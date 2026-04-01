import { prisma } from "lib/prisma"

type CreateMinistryBody = {
  name: string
  slug: string
  description?: string | null
  imageUrl?: string | null
  contactName?: string | null
  contactPhone?: string | null
}

function normalizeString(value?: string | null) {
  const normalizedValue = value?.trim()

  return normalizedValue ? normalizedValue : null
}

export async function GET() {
  const ministries = await prisma.ministry.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })

  return Response.json(ministries)
}

export async function POST(req: Request) {
  const body = (await req.json()) as CreateMinistryBody
  const imageUrl = normalizeString(body.imageUrl)

  const ministry = await prisma.ministry.create({
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

  return Response.json(ministry)
}
