import { notFound } from "next/navigation"

import { MinistryForm } from "@/components/admin/ministry-form"
import { prisma } from "lib/prisma"

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function EditMinistryPage({ params }: Props) {
  const { id } = await params

  const ministry = await prisma.ministry.findUnique({
    where: { id },
  })

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
