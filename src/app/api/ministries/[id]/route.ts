import { prisma } from "lib/prisma"

type UpdateMinistryBody = {
  name: string
  slug: string
  description?: string | null
  imageUrl?: string | null
  contactName?: string | null
  contactPhone?: string | null
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

export async function PUT(req: Request, { params }: Props) {
  const { id } = await params
  const body = (await req.json()) as UpdateMinistryBody

  const currentMinistry = await prisma.ministry.findUnique({
    where: { id },
    include: {
      media: true,
    },
  })

  if (!currentMinistry) {
    return Response.json({ error: "Pastoral nao encontrada." }, { status: 404 })
  }

  const mediaIds = currentMinistry.media.map((item) => item.mediaId)
  const imageUrl = normalizeString(body.imageUrl)

  const ministry = await prisma.$transaction(async (tx) => {
    await tx.ministryMedia.deleteMany({
      where: { ministryId: id },
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

    return tx.ministry.update({
      where: { id },
      data: {
        name: body.name,
        slug: body.slug,
        description: normalizeString(body.description),
        imageUrl,
        contactName: normalizeString(body.contactName),
        contactPhone: normalizeString(body.contactPhone),
        media: imageUrl
          ? {
              create: [
                {
                  media: {
                    create: {
                      url: imageUrl,
                      type: "IMAGE",
                      altText: body.name,
                    },
                  },
                },
              ],
            }
          : undefined,
      },
      include: {
        media: {
          include: {
            media: true,
          },
        },
      },
    })
  })

  return Response.json(ministry)
}

export async function DELETE(_req: Request, { params }: Props) {
  const { id } = await params

  const currentMinistry = await prisma.ministry.findUnique({
    where: { id },
    include: {
      media: true,
    },
  })

  if (!currentMinistry) {
    return Response.json({ error: "Pastoral nao encontrada." }, { status: 404 })
  }

  const mediaIds = currentMinistry.media.map((item) => item.mediaId)

  await prisma.$transaction(async (tx) => {
    await tx.ministryMedia.deleteMany({
      where: { ministryId: id },
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

    await tx.ministry.delete({
      where: { id },
    })
  })

  return Response.json({ success: true })
}
