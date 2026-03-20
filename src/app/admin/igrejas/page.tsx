import Link from "next/link"

import { prisma } from "lib/prisma"

export default async function ChurchesPage() {
  const churches = await prisma.church.findMany({
    include: {
      massSchedules: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  })

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Igrejas
          </h1>

          <p className="text-sm text-gray-500">
            Gerencie as igrejas e os horários de missa
          </p>
        </div>

        <Link
          href="/admin/igrejas/new"
          className="rounded-md bg-[#092070] px-4 py-2 text-sm text-white hover:opacity-90"
        >
          Nova igreja
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg border bg-white">
        <table className="min-w-full">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="p-4 text-left">Nome</th>
              <th className="p-4 text-left">Endereço</th>
              <th className="p-4 text-left">Horários</th>
              <th className="p-4 text-left">Cadastro</th>
            </tr>
          </thead>

          <tbody>
            {churches.map((church) => (
              <tr key={church.id} className="border-t align-top hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-800">
                  {church.name}
                </td>

                <td className="p-4 text-gray-600">
                  {church.address}
                </td>

                <td className="p-4 text-gray-600">
                  {church.massSchedules.length}
                </td>

                <td className="p-4 text-gray-600">
                  {new Date(church.createdAt).toLocaleDateString("pt-BR")}
                </td>
              </tr>
            ))}

            {churches.length === 0 && (
              <tr>
                <td colSpan={4} className="p-6 text-center text-gray-400">
                  Nenhuma igreja cadastrada
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
