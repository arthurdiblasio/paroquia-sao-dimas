import { prisma } from "lib/prisma"

import { getAuthenticatedUserIdOrFallback } from "@/lib/auth"

type CreateHomilyBody = {
  title: string
  description?: string | null
  content?: string | null
  videoUrl?: string | null
  date: string
}

function normalizeString(value?: string | null) {
  const normalizedValue = value?.trim()

  return normalizedValue ? normalizedValue : null
}

function normalizeDate(value: string) {
  const parsedDate = new Date(value)

  return Number.isNaN(parsedDate.getTime()) ? null : parsedDate
}

export async function GET() {
  const homilies = await prisma.homily.findMany({
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
  })

  return Response.json(homilies)
}

export async function POST(req: Request) {
  const body = (await req.json()) as CreateHomilyBody
  const createdById = await getAuthenticatedUserIdOrFallback()

  if (!createdById) {
    return Response.json({ error: "Nenhum usuario encontrado para vincular a homilia." }, { status: 400 })
  }

  const date = normalizeDate(body.date)

  if (!date) {
    return Response.json({ error: "Data invalida." }, { status: 400 })
  }

  const videoUrl = normalizeString(body.videoUrl)

  const homily = await prisma.homily.create({
    data: {
      title: body.title.trim(),
      description: normalizeString(body.description),
      content: normalizeString(body.content),
      videoUrl,
      date,
      published: true,
      publishedAt: new Date(),
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
  })

  return Response.json(homily)
}
