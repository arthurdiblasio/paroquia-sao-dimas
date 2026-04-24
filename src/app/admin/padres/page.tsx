import Link from "next/link"

import { PriestsTable } from "@/components/admin/priests-table"
import { fetchInternalApi } from "@/lib/internal-api"

type PriestItem = {
  id: string
  name: string
  birthDate: string
  birthCity: string
  photoUrl: string | null
  startDate: string
  endDate: string | null
  deathDate: string | null
}

export default async function PriestsPage() {
  const priests = await fetchInternalApi<PriestItem[]>("/api/padres")

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Párocos</h1>
          <p className="text-sm text-gray-500">
            Históricos dos padres que passaram pela paróquia.
          </p>
        </div>

        <Link
          href="/admin/padres/new"
          className="rounded-md bg-[#092070] px-4 py-2 text-sm text-white hover:opacity-90"
        >
          Novo pároco
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-gray-200">
        <PriestsTable
          priests={priests.map((priest) => ({
            ...priest,
            birthDate: new Date(priest.birthDate),
            startDate: new Date(priest.startDate),
            endDate: priest.endDate ? new Date(priest.endDate) : null,
            deathDate: priest.deathDate ? new Date(priest.deathDate) : null,
          }))}
        />
      </div>
    </div>
  )
}
