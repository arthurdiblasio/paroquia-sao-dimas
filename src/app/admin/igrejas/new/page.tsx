import { ChurchForm } from "@/components/admin/church-form"
import { fetchInternalApi } from "@/lib/internal-api"

type ChurchItem = {
  id: string
  name: string
  isMainChurch: boolean
}

export default async function NewChurchPage() {
  const churches = await fetchInternalApi<ChurchItem[]>("/api/churches")
  const currentMainChurch = churches.find((church) => church.isMainChurch) ?? null

  return <ChurchForm mode="create" currentMainChurch={currentMainChurch} />
}
