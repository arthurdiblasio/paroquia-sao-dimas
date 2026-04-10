import { prisma } from "lib/prisma";
import { getAuthenticatedUserId } from "@/lib/auth";
import {
  getPublishedStateFromStatus,
  normalizePublicationStatus,
} from "@/lib/publication-status";
import { Prisma } from "@prisma/client";

type CreateNewsBody = {
  title: string;
  subtitle?: string | null;
  slug: string;
  content: string;
  categoryId: string;
  status?: string;
  coverImage?: string | null;
  images?: string[];
};

function normalizeString(value?: string | null) {
  const normalizedValue = value?.trim();

  return normalizedValue ? normalizedValue : null;
}

function getUniqueImageUrls(coverImage?: string | null, images?: string[]) {
  return Array.from(
    new Set(
      [
        normalizeString(coverImage),
        ...(images ?? []).map((image) => normalizeString(image)),
      ].filter((image): image is string => Boolean(image)),
    ),
  );
}

export async function GET() {
  const news = await prisma.news.findMany({
    include: {
      category: true,
      media: {
        include: {
          media: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return Response.json(news);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as CreateNewsBody;
    const createdById = await getAuthenticatedUserId();

    if (!createdById) {
      return Response.json({ error: "Não autorizado." }, { status: 401 });
    }

    const title = normalizeString(body.title);
    const subtitle = normalizeString(body.subtitle);
    const content = normalizeString(body.content);
    const categoryId = normalizeString(body.categoryId);
    const status = normalizePublicationStatus(body.status);

    if (!createdById) {
      return Response.json(
        { error: "Nenhum usuario encontrado para vincular a noticia." },
        { status: 400 },
      );
    }

    if (!title) {
      return Response.json(
        { error: "Titulo da noticia e obrigatorio." },
        { status: 400 },
      );
    }

    if (!content) {
      return Response.json(
        { error: "Conteudo da noticia e obrigatorio." },
        { status: 400 },
      );
    }

    if (!categoryId) {
      return Response.json(
        { error: "Selecione uma categoria para a noticia." },
        { status: 400 },
      );
    }

    const categoryExists = await prisma.newsCategory.findUnique({
      where: { id: categoryId },
      select: { id: true },
    });

    if (!categoryExists) {
      return Response.json(
        { error: "Categoria da noticia invalida." },
        { status: 400 },
      );
    }

    const imageUrls = getUniqueImageUrls(body.coverImage, body.images);

    const news = await prisma.news.create({
      data: {
        title,
        subtitle,
        slug: body.slug,
        content,
        imageUrl: normalizeString(body.coverImage),
        categoryId,
        ...getPublishedStateFromStatus(status),
        createdById,
        media:
          imageUrls.length > 0
            ? {
                create: imageUrls.map((url) => ({
                  media: {
                    create: {
                      url,
                      type: "IMAGE",
                      altText: title,
                    },
                  },
                })),
              }
            : undefined,
      },
      include: {
        category: true,
        media: {
          include: {
            media: true,
          },
        },
      },
    });

    return Response.json(news);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return Response.json(
          { error: "Ja existe uma noticia com esse titulo ou slug." },
          { status: 400 },
        );
      }
    }

    return Response.json(
      { error: "Nao foi possivel salvar a noticia." },
      { status: 500 },
    );
  }
}
