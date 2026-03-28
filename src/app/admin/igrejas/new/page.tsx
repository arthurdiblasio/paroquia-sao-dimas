import { ChurchForm } from "@/components/admin/church-form"
import { prisma } from "lib/prisma"

export default async function NewChurchPage() {
  const currentMainChurch = await prisma.church.findFirst({
    where: {
      isMainChurch: true,
    },
    select: {
      id: true,
      name: true,
    },
  })

  return <ChurchForm mode="create" currentMainChurch={currentMainChurch} />
}
