import { prisma } from "lib/prisma";

import { getAuthenticatedUserId } from "@/lib/auth";
import {
  getPublishedStateFromStatus,
  normalizePublicationStatus,
} from "@/lib/publication-status";

type CreateHomilyBody = {
  title: string;
  description?: string | null;
  content?: string | null;
  videoUrl?: string | null;
  date: string;
  status?: string;
};

function normalizeString(value?: string | null) {
  const normalizedValue = value?.trim();

  return normalizedValue ? normalizedValue : null;
}

function normalizeDate(value: string) {
  const parsedDate = new Date(value);

  return Number.isNaN(parsedDate.getTime()) ? null : parsedDate;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const published = searchParams.get("published");
  const takeParam = searchParams.get("take");
  const take = takeParam ? Number(takeParam) : undefined;

  const homilies = await prisma.homily.findMany({
    where: published === "true" ? { published: true } : undefined,
    include: {
      createdBy: {
        select: {
          id: true,
          name: true,
        },
      },
      media: {
        include: {
          media: true,
        },
      },
    },
    orderBy: {
      date: "desc",
    },
    take: Number.isFinite(take) ? take : undefined,
  });

  return Response.json(homilies);
}

export async function POST(req: Request) {
  const body = (await req.json()) as CreateHomilyBody;
  const createdById = await getAuthenticatedUserId();
  const status = normalizePublicationStatus(body.status);

  if (!createdById) {
    return Response.json({ error: "Não autorizado." }, { status: 401 });
  }

  const date = normalizeDate(body.date);

  if (!date) {
    return Response.json({ error: "Data invalida." }, { status: 400 });
  }

  const videoUrl = normalizeString(body.videoUrl);

  const homily = await prisma.homily.create({
    data: {
      title: body.title.trim(),
      description: normalizeString(body.description),
      content: normalizeString(body.content),
      videoUrl,
      date,
      ...getPublishedStateFromStatus(status),
      createdById,
      media: videoUrl
        ? {
            create: [
              {
                media: {
                  create: {
                    url: videoUrl,
                    type: "VIDEO",
                    altText: body.title.trim(),
                  },
                },
              },
            ],
          }
        : undefined,
    },
    include: {
      createdBy: {
        select: {
          id: true,
          name: true,
        },
      },
      media: {
        include: {
          media: true,
        },
      },
    },
  });

  return Response.json(homily);
}
