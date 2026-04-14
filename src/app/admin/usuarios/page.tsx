import { getAuthenticatedUserRole } from "@/lib/auth"
import { prisma } from "lib/prisma"
import { UsersTable } from "@/components/admin/users-table"

export default async function UsersPage() {
  const role = await getAuthenticatedUserRole()

  if (role !== "ADMIN") {
    return (
      <div className="rounded-xl bg-white p-8 shadow-sm text-red-600">
        Acesso não autorizado.
      </div>
    )
  }

  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  })

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Usuários
          </h1>
          <p className="text-sm text-gray-500">
            Gerencie usuários do sistema, adicione novos, atualize e remova e-mails.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-gray-200">
        <UsersTable users={users} />
      </div>
    </div>
  )
}
