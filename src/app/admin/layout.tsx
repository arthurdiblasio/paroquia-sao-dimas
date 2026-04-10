import { getAuthenticatedUserRole } from "@/lib/auth"
import { AdminSidebar } from "@/components/admin/admin-sidebar"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const role = await getAuthenticatedUserRole()

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar role={role} />
      <main className="flex-1 p-10">{children}</main>
    </div>
  )
}
