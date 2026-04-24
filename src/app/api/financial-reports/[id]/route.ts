import { prisma } from "lib/prisma";

import {
  parseFinancialReportBody,
  type FinancialReportBody,
} from "@/lib/financial-report";
import {
  getPublishedStateFromStatus,
  normalizePublicationStatus,
} from "@/lib/publication-status";
import { Prisma } from "@prisma/client";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

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

export async function GET(_req: Request, { params }: Props) {
  const { id } = await params;

  const report = await prisma.financialReport.findUnique({
    where: { id },
    include: getFinancialReportInclude(),
  });

  if (!report) {
    return Response.json(
      { error: "Prestacao de contas nao encontrada." },
      { status: 404 },
    );
  }

  return Response.json(report);
}

export async function PUT(req: Request, { params }: Props) {
  try {
    const { id } = await params;
    const body = (await req.json()) as FinancialReportBody & {
      publicationStatus?: string;
    };
    const parsedBody = parseFinancialReportBody(body);
    const publicationStatus = normalizePublicationStatus(
      body.publicationStatus,
    );

    const currentReport = await prisma.financialReport.findUnique({
      where: { id },
      include: {
        phases: {
          include: {
            media: true,
          },
        },
      },
    });

    if (!currentReport) {
      return Response.json(
        { error: "Prestacao de contas nao encontrada." },
        { status: 404 },
      );
    }

    if (typeof parsedBody === "string") {
      return Response.json({ error: parsedBody }, { status: 400 });
    }

    const mediaIds = currentReport.phases.flatMap((phase) =>
      phase.media.map((item) => item.mediaId),
    );
    const phaseIds = currentReport.phases.map((phase) => phase.id);

    const report = await prisma.$transaction(async (tx) => {
      if (phaseIds.length > 0) {
        await tx.financialReportPhaseMedia.deleteMany({
          where: {
            phaseId: {
              in: phaseIds,
            },
          },
        });
      }

      if (mediaIds.length > 0) {
        await tx.media.deleteMany({
          where: {
            id: {
              in: mediaIds,
            },
          },
        });
      }

      await tx.financialReportPhase.deleteMany({
        where: {
          reportId: id,
        },
      });

      return tx.financialReport.update({
        where: { id },
        data: {
          title: parsedBody.title,
          description: parsedBody.description,
          status: parsedBody.status,
          progressPercentage: parsedBody.progressPercentage,
          ...getPublishedStateFromStatus(publicationStatus),
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
    });

    return Response.json(report);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return Response.json(
        { error: "Nao foi possivel atualizar a prestacao de contas." },
        { status: 400 },
      );
    }

    return Response.json(
      { error: "Nao foi possivel atualizar a prestacao de contas." },
      { status: 500 },
    );
  }
}

export async function DELETE(_req: Request, { params }: Props) {
  const { id } = await params;

  const currentReport = await prisma.financialReport.findUnique({
    where: { id },
    include: {
      phases: {
        include: {
          media: true,
        },
      },
    },
  });

  if (!currentReport) {
    return Response.json(
      { error: "Prestacao de contas nao encontrada." },
      { status: 404 },
    );
  }

  const mediaIds = currentReport.phases.flatMap((phase) =>
    phase.media.map((item) => item.mediaId),
  );
  const phaseIds = currentReport.phases.map((phase) => phase.id);

  await prisma.$transaction(async (tx) => {
    if (phaseIds.length > 0) {
      await tx.financialReportPhaseMedia.deleteMany({
        where: {
          phaseId: {
            in: phaseIds,
          },
        },
      });
    }

    if (mediaIds.length > 0) {
      await tx.media.deleteMany({
        where: {
          id: {
            in: mediaIds,
          },
        },
      });
    }

    await tx.financialReportPhase.deleteMany({
      where: {
        reportId: id,
      },
    });

    await tx.financialReport.delete({
      where: { id },
    });
  });

  return Response.json({ success: true });
}

export async function PATCH(req: Request, { params }: Props) {
  const { id } = await params;
  const body = (await req.json()) as { publicationStatus?: string };
  const publicationStatus = normalizePublicationStatus(body.publicationStatus);

  const currentReport = await prisma.financialReport.findUnique({
    where: { id },
    select: { id: true },
  });

  if (!currentReport) {
    return Response.json(
      { error: "Prestacao de contas nao encontrada." },
      { status: 404 },
    );
  }

  const report = await prisma.financialReport.update({
    where: { id },
    data: getPublishedStateFromStatus(publicationStatus),
  });

  return Response.json(report);
}
