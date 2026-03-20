import { prisma } from "lib/prisma"

type ChurchScheduleInput = {
  dayOfWeek: number
  time: string
  notes?: string
}

type UpdateChurchBody = {
  name: string
  address: string
  latitude: number | null
  longitude: number | null
  description?: string
  images?: string[]
  schedules: ChurchScheduleInput[]
}

type Props = {
  params: Promise<{
    id: string
  }>
}

export async function PUT(req: Request, { params }: Props) {
  const { id } = await params
  const body = (await req.json()) as UpdateChurchBody

  const currentChurch = await prisma.church.findUnique({
    where: { id },
    include: {
      crunchMedias: true,
    },
  })

  if (!currentChurch) {
    return Response.json({ error: "Igreja nao encontrada." }, { status: 404 })
  }

  const mediaIds = currentChurch.crunchMedias.map((item) => item.mediaId)

  const church = await prisma.$transaction(async (tx) => {
    await tx.massSchedule.deleteMany({
      where: { churchId: id },
    })

    await tx.crunchMedia.deleteMany({
      where: { crunchId: id },
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

    return tx.church.update({
      where: { id },
      data: {
        name: body.name,
        address: body.address,
        latitude: body.latitude ?? 0,
        longitude: body.longitude ?? 0,
        description: body.description,
        massSchedules: {
          create: body.schedules.map((schedule) => ({
            dayOfWeek: schedule.dayOfWeek,
            time: schedule.time,
            notes: schedule.notes,
          })),
        },
        crunchMedias: {
          create: (body.images ?? []).map((url) => ({
            media: {
              create: {
                url,
                type: "IMAGE",
                altText: body.name,
              },
            },
          })),
        },
      },
      include: {
        massSchedules: true,
        crunchMedias: {
          include: {
            media: true,
          },
        },
      },
    })
  })

  return Response.json(church)
}

export async function DELETE(_req: Request, { params }: Props) {
  const { id } = await params

  const currentChurch = await prisma.church.findUnique({
    where: { id },
    include: {
      crunchMedias: true,
    },
  })

  if (!currentChurch) {
    return Response.json({ error: "Igreja nao encontrada." }, { status: 404 })
  }

  const mediaIds = currentChurch.crunchMedias.map((item) => item.mediaId)

  await prisma.$transaction(async (tx) => {
    await tx.massSchedule.deleteMany({
      where: { churchId: id },
    })

    await tx.crunchMedia.deleteMany({
      where: { crunchId: id },
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

    await tx.church.delete({
      where: { id },
    })
  })

  return Response.json({ success: true })
}
