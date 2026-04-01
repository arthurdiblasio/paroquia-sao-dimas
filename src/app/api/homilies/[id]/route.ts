import { prisma } from "lib/prisma"

type UpdateHomilyBody = {
  title: string
  description?: string | null
  content?: string | null
  videoUrl?: string | null
  date: string
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

function normalizeDate(value: string) {
  const parsedDate = new Date(value)

  return Number.isNaN(parsedDate.getTime()) ? null : parsedDate
}

export async function GET(_req: Request, { params }: Props) {
  const { id } = await params

  const homily = await prisma.homily.findUnique({
    where: { id },
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
  })

  if (!homily) {
    return Response.json({ error: "Homilia nao encontrada." }, { status: 404 })
  }

  return Response.json(homily)
}

export async function PUT(req: Request, { params }: Props) {
  const { id } = await params
  const body = (await req.json()) as UpdateHomilyBody

  const currentHomily = await prisma.homily.findUnique({
    where: { id },
    include: {
      media: true,
    },
  })

  if (!currentHomily) {
    return Response.json({ error: "Homilia nao encontrada." }, { status: 404 })
  }

  const date = normalizeDate(body.date)

  if (!date) {
    return Response.json({ error: "Data invalida." }, { status: 400 })
  }

  const mediaIds = currentHomily.media.map((item) => item.mediaId)
  const videoUrl = normalizeString(body.videoUrl)

  const homily = await prisma.$transaction(async (tx) => {
    await tx.homilyMedia.deleteMany({
      where: { homilyId: id },
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

    return tx.homily.update({
      where: { id },
      data: {
        title: body.title.trim(),
        description: normalizeString(body.description),
        content: normalizeString(body.content),
        videoUrl,
        date,
        published: true,
        publishedAt: currentHomily.publishedAt ?? new Date(),
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
    })
  })

  return Response.json(homily)
}

export async function DELETE(_req: Request, { params }: Props) {
  const { id } = await params

  const currentHomily = await prisma.homily.findUnique({
    where: { id },
    include: {
      media: true,
    },
  })

  if (!currentHomily) {
    return Response.json({ error: "Homilia nao encontrada." }, { status: 404 })
  }

  const mediaIds = currentHomily.media.map((item) => item.mediaId)

  await prisma.$transaction(async (tx) => {
    await tx.homilyMedia.deleteMany({
      where: { homilyId: id },
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

    await tx.homily.delete({
      where: { id },
    })
  })

  return Response.json({ success: true })
}
