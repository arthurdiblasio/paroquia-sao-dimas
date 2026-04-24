import { notFound } from "next/navigation"

import { HomilyForm } from "@/components/admin/homily-form"
import { fetchInternalApiOrNull } from "@/lib/internal-api"
import { getPublicationStatusFromPublished } from "@/lib/publication-status"

type HomilyItem = {
  id: string
  title: string
  description: string | null
  content: string | null
  videoUrl: string | null
  date: string
  published: boolean
}

type Props = {
  params: Promise<{
    id: string
  }>
}

function formatDateToInput(date: string) {
  return date.slice(0, 10)
}

export default async function EditHomilyPage({ params }: Props) {
  const { id } = await params

  const homily = await fetchInternalApiOrNull<HomilyItem>(`/api/homilies/${id}`)

  if (!homily) {
    notFound()
  }

  return (
    <HomilyForm
      mode="edit"
      homilyId={homily.id}
      initialValues={{
        title: homily.title,
        description: homily.description ?? "",
        content: homily.content ?? "",
        videoUrl: homily.videoUrl ?? "",
        date: formatDateToInput(homily.date),
        status: getPublicationStatusFromPublished(homily.published),
      }}
    />
  )
}
