import { prisma } from "lib/prisma";
import {
  getPublishedStateFromStatus,
  normalizePublicationStatus,
} from "@/lib/publication-status";
import { Prisma } from "../../../../../generated/prisma/client";

type UpdateNewsBody = {
  title: string
  subtitle?: string | null
  slug: string
  content: string
  categoryId: string
  status?: string
  coverImage?: string | null
  images?: string[]
}

type Props = {
  params: Promise<{
    id: string
  }>
}

function normalizeString(value?: string | null) {
  const normalizedValue = value?.trim()

  return normalizedValue ? normalizedValue : null
}

function getUniqueImageUrls(coverImage?: string | null, images?: string[]) {
  return Array.from(
    new Set(
      [normalizeString(coverImage), ...(images ?? []).map((image) => normalizeString(image))]
        .filter((image): image is string => Boolean(image))
    )
  )
}

export async function PUT(
  req: Request,
  { params }: Props,
) {
  try {
    const { id } = await params
    const body = (await req.json()) as UpdateNewsBody
    const title = normalizeString(body.title)
    const subtitle = normalizeString(body.subtitle)
    const content = normalizeString(body.content)
    const categoryId = normalizeString(body.categoryId)
    const status = normalizePublicationStatus(body.status)
    const currentNews = await prisma.news.findUnique({
      where: { id },
      include: {
        media: true,
      },
    })

    if (!currentNews) {
      return Response.json({ error: "Noticia nao encontrada." }, { status: 404 })
    }

    if (!title) {
      return Response.json({ error: "Titulo da noticia e obrigatorio." }, { status: 400 })
    }

    if (!content) {
      return Response.json({ error: "Conteudo da noticia e obrigatorio." }, { status: 400 })
    }

    if (!categoryId) {
      return Response.json({ error: "Selecione uma categoria para a noticia." }, { status: 400 })
    }

    const categoryExists = await prisma.newsCategory.findUnique({
      where: { id: categoryId },
      select: { id: true },
    })

    if (!categoryExists) {
      return Response.json({ error: "Categoria da noticia invalida." }, { status: 400 })
    }

    const imageUrls = getUniqueImageUrls(body.coverImage, body.images)
    const mediaIds = currentNews.media.map((item) => item.mediaId)

    const news = await prisma.$transaction(async (tx) => {
      await tx.newsMedia.deleteMany({
        where: { newsId: id },
      })

      if (mediaIds.length > 0) {
        await tx.media.deleteMany({
          where: {
            id: {
              in: mediaIds,
            },
          },
        })
      }

      return tx.news.update({
        where: { id },
        data: {
          title,
          subtitle,
          slug: body.slug,
          content,
          imageUrl: normalizeString(body.coverImage),
          categoryId,
          ...getPublishedStateFromStatus(status),
          media: imageUrls.length > 0
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
      })
    })

    return Response.json(news);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return Response.json({ error: "Ja existe uma noticia com esse titulo ou slug." }, { status: 400 })
      }
    }

    return Response.json({ error: "Nao foi possivel salvar a noticia." }, { status: 500 })
  }
}

export async function DELETE(
  _req: Request,
  { params }: Props,
) {
  const { id } = await params
  const currentNews = await prisma.news.findUnique({
    where: { id },
    include: {
      media: true,
    },
  })

  if (!currentNews) {
    return Response.json({ error: "Noticia nao encontrada." }, { status: 404 })
  }

  const mediaIds = currentNews.media.map((item) => item.mediaId)

  await prisma.$transaction(async (tx) => {
    await tx.newsMedia.deleteMany({
      where: { newsId: id },
    })

    if (mediaIds.length > 0) {
      await tx.media.deleteMany({
        where: {
          id: {
            in: mediaIds,
          },
        },
      })
    }

    await tx.news.delete({
      where: { id },
    })
  })

  return Response.json({ success: true });
}

export async function PATCH(
  req: Request,
  { params }: Props,
) {
  const { id } = await params
  const body = (await req.json()) as { status?: string }
  const status = normalizePublicationStatus(body.status)

  const currentNews = await prisma.news.findUnique({
    where: { id },
    select: { id: true },
  })

  if (!currentNews) {
    return Response.json({ error: "Noticia nao encontrada." }, { status: 404 })
  }

  const news = await prisma.news.update({
    where: { id },
    data: getPublishedStateFromStatus(status),
  })

  return Response.json(news)
}
