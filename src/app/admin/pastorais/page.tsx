import Link from "next/link"

import { MinistriesTable } from "@/components/admin/ministries-table"
import { prisma } from "lib/prisma"

export default async function MinistriesPage() {
  const ministries = await prisma.ministry.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Pastorais
          </h1>

          <p className="text-sm text-gray-500">
            Gerencie as pastorais e seus contatos
          </p>
        </div>

        <Link
          href="/admin/pastorais/new"
          className="rounded-md bg-[#092070] px-4 py-2 text-sm text-white hover:opacity-90"
        >
          Nova pastoral
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-gray-200">
        <MinistriesTable
          ministries={ministries.map((ministry) => ({
            id: ministry.id,
            name: ministry.name,
            slug: ministry.slug,
            description: ministry.description,
            contactName: ministry.contactName,
            contactPhone: ministry.contactPhone,
            imageUrl: ministry.imageUrl,
          }))}
        />
      </div>
    </div>
  )
}
