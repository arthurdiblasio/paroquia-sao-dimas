import { prisma } from "lib/prisma";

import { getAuthenticatedUserId } from "@/lib/auth";
import {
  parseFinancialReportBody,
  type FinancialReportBody,
} from "@/lib/financial-report";
import {
  getPublishedStateFromStatus,
  normalizePublicationStatus,
} from "@/lib/publication-status";
import { Prisma } from "@prisma/client";

function getFinancialReportInclude() {
  return {
    createdBy: {
      select: {
        id: true,
        name: true,
      },
    },
    phases: {
      orderBy: {
        phaseOrder: "asc" as const,
      },
      include: {
        media: {
          include: {
            media: true,
          },
        },
      },
    },
    _count: {
      select: {
        phases: true,
      },
    },
  };
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const published = searchParams.get("published");

  const reports = await prisma.financialReport.findMany({
    where: published === "true" ? { published: true } : undefined,
    include: getFinancialReportInclude(),
    orderBy:
      published === "true"
        ? [{ publishedAt: "desc" }, { updatedAt: "desc" }]
        : { updatedAt: "desc" },
  });

  return Response.json(reports);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as FinancialReportBody & {
      publicationStatus?: string;
    };
    const createdById = await getAuthenticatedUserId();

    if (!createdById) {
      return Response.json({ error: "Não autorizado." }, { status: 401 });
    }

    const parsedBody = parseFinancialReportBody(body);
    const publicationStatus = normalizePublicationStatus(
      body.publicationStatus,
    );

    if (!createdById) {
      return Response.json(
        {
          error:
            "Nenhum usuario encontrado para vincular a prestacao de contas.",
        },
        { status: 400 },
      );
    }

    if (typeof parsedBody === "string") {
      return Response.json({ error: parsedBody }, { status: 400 });
    }

    const report = await prisma.financialReport.create({
      data: {
        title: parsedBody.title,
        description: parsedBody.description,
        status: parsedBody.status,
        progressPercentage: parsedBody.progressPercentage,
        ...getPublishedStateFromStatus(publicationStatus),
        createdById,
        phases: {
          create: parsedBody.phases.map((phase, index) => ({
            title: phase.title,
            phaseOrder: index,
            doneDetails: phase.doneDetails,
            nextDetails: phase.nextDetails,
            media:
              phase.images.length > 0
                ? {
                    create: phase.images.map((url) => ({
                      media: {
                        create: {
                          url,
                          type: "IMAGE",
                          altText: `${parsedBody.title} - ${phase.title}`,
                        },
                      },
                    })),
                  }
                : undefined,
          })),
        },
      },
      include: getFinancialReportInclude(),
    });

    return Response.json(report);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return Response.json(
        { error: "Nao foi possivel salvar a prestacao de contas." },
        { status: 400 },
      );
    }

    return Response.json(
      { error: "Nao foi possivel salvar a prestacao de contas." },
      { status: 500 },
    );
  }
}
