import { notFound } from "next/navigation"

import { HomilyForm } from "@/components/admin/homily-form"
import { prisma } from "lib/prisma"

type Props = {
  params: Promise<{
    id: string
  }>
}

function formatDateToInput(date: Date) {
  return date.toISOString().slice(0, 10)
}

export default async function EditHomilyPage({ params }: Props) {
  const { id } = await params

  const homily = await prisma.homily.findUnique({
    where: { id },
  })

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
      }}
    />
  )
}
