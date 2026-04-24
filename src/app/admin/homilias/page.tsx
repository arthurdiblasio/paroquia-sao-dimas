import Link from "next/link"

import { HomiliesTable } from "@/components/admin/homilies-table"
import { fetchInternalApi } from "@/lib/internal-api"
import { getPublicationStatusFromPublished } from "@/lib/publication-status"

type HomilyItem = {
  id: string
  title: string
  description: string | null
  videoUrl: string | null
  date: string
  published: boolean
  createdBy: {
    name: string
  }
}

export default async function HomiliesPage() {
  const homilies = await fetchInternalApi<HomilyItem[]>("/api/homilies")

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Homilias
          </h1>

          <p className="text-sm text-gray-500">
            Gerencie as homilias e o link do video associado
          </p>
        </div>

        <Link
          href="/admin/homilias/new"
          className="rounded-md bg-[#092070] px-4 py-2 text-sm text-white hover:opacity-90"
        >
          Nova homilia
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-gray-200">
        <HomiliesTable
          homilies={homilies.map((homily) => ({
            id: homily.id,
            title: homily.title,
            description: homily.description,
            videoUrl: homily.videoUrl,
            date: homily.date,
            status: getPublicationStatusFromPublished(homily.published),
            createdByName: homily.createdBy.name,
          }))}
        />
      </div>
    </div>
  )
}
