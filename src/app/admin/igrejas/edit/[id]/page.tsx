import { notFound } from "next/navigation"

import { ChurchForm } from "@/components/admin/church-form"
import { prisma } from "lib/prisma"

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function EditChurchPage({ params }: Props) {
  const { id } = await params

  const church = await prisma.church.findUnique({
    where: { id },
    include: {
      massSchedules: {
        orderBy: [
          { dayOfWeek: "asc" },
          { time: "asc" },
        ],
      },
      crunchMedias: {
        include: {
          media: true,
        },
      },
    },
  })
  const currentMainChurch = await prisma.church.findFirst({
    where: {
      isMainChurch: true,
    },
    select: {
      id: true,
      name: true,
    },
  })

  if (!church) {
    notFound()
  }

  return (
    <ChurchForm
      mode="edit"
      churchId={church.id}
      initialValues={{
        name: church.name,
        address: church.address,
        latitude: church.latitude,
        longitude: church.longitude,
        description: church.description ?? "",
        isMainChurch: church.isMainChurch,
        images: church.crunchMedias.map((item) => item.media.url),
        schedules: church.massSchedules.map((schedule) => ({
          dayOfWeek: schedule.dayOfWeek,
          time: schedule.time,
          notes: schedule.notes ?? "",
        })),
      }}
      currentMainChurch={currentMainChurch}
    />
  )
}
