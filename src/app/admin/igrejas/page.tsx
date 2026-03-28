import Link from "next/link"

import { ChurchesTable } from "@/components/admin/churches-table"
import { prisma } from "lib/prisma"

export default async function ChurchesPage() {
  const churches = await prisma.church.findMany({
    include: {
      massSchedules: true,
    },
    orderBy: [
      {
        isMainChurch: "desc",
      },
      {
        createdAt: "desc",
      },
    ],
  })

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Igrejas
          </h1>

          <p className="text-sm text-gray-500">
            Gerencie as igrejas e os horarios de missa
          </p>
        </div>

        <Link
          href="/admin/igrejas/new"
          className="rounded-md bg-[#092070] px-4 py-2 text-sm text-white hover:opacity-90"
        >
          Nova igreja
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-gray-200">
        <ChurchesTable
          churches={churches.map((church) => ({
            id: church.id,
            name: church.name,
            address: church.address,
            isMainChurch: church.isMainChurch,
            massSchedules: church.massSchedules.map((schedule) => ({
              dayOfWeek: schedule.dayOfWeek,
              time: schedule.time,
              notes: schedule.notes ?? "",
            })),
          }))}
        />
      </div>
    </div>
  )
}
