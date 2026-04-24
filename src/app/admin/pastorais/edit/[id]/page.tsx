import { notFound } from "next/navigation"

import { MinistryForm } from "@/components/admin/ministry-form"
import { fetchInternalApiOrNull } from "@/lib/internal-api"

type MinistryItem = {
  id: string
  name: string
  description: string | null
  contactName: string | null
  contactPhone: string | null
  imageUrl: string | null
}

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function EditMinistryPage({ params }: Props) {
  const { id } = await params

  const ministry = await fetchInternalApiOrNull<MinistryItem>(`/api/ministries/${id}`)

  if (!ministry) {
    notFound()
  }

  return (
    <MinistryForm
      mode="edit"
      ministryId={ministry.id}
      initialValues={{
        name: ministry.name,
        description: ministry.description ?? "",
        contactName: ministry.contactName ?? "",
        contactPhone: ministry.contactPhone ?? "",
        imageUrl: ministry.imageUrl ?? null,
      }}
    />
  )
}
