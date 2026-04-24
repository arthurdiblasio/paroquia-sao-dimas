import { notFound } from "next/navigation"

import { ChurchForm } from "@/components/admin/church-form"
import { fetchInternalApi, fetchInternalApiOrNull } from "@/lib/internal-api"

type ChurchItem = {
  id: string
  name: string
  address: string
  latitude: number
  longitude: number
  description: string | null
  isMainChurch: boolean
  massSchedules: {
    dayOfWeek: number
    time: string
    notes: string | null
  }[]
  crunchMedias: {
    media: {
      url: string
    }
  }[]
}

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function EditChurchPage({ params }: Props) {
  const { id } = await params

  const [church, churches] = await Promise.all([
    fetchInternalApiOrNull<ChurchItem>(`/api/churches/${id}`),
    fetchInternalApi<ChurchItem[]>("/api/churches"),
  ])
  const currentMainChurch = churches.find((item) => item.isMainChurch) ?? null

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
