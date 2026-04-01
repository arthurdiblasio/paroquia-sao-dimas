"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Newspaper,
  FileText,
  Users,
  Church,
  Calendar,
  LogOut
} from "lucide-react"

const menu = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Notícias", href: "/admin/noticias", icon: Newspaper },
  { name: "Homilias", href: "/admin/homilias", icon: FileText },
  { name: "Pastorais", href: "/admin/pastorais", icon: Users },
  { name: "Igrejas", href: "/admin/igrejas", icon: Church },
  { name: "Agendamentos", href: "/admin/agendamentos", icon: Calendar }
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname()

  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar */}
      <aside className="w-64 bg-primary border-r flex flex-col">

        <div className="px-6 py-5 border-b font-semibold text-white">
          Paróquia São Dimas
        </div>

        <nav className="flex flex-col gap-1 p-3">

          {menu.map((item) => {

            const Icon = item.icon
            const active = pathname === item.href

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition
                ${active
                    ? "text-secondary border-0 border-l-4 border-secondary bg-secondary/10"
                    : "bg-primary text-white hover:text-secondary"
                  }`}
              >
                <Icon size={18} />
                {item.name}
              </Link>
            )
          })}

        </nav>

        <div className="mt-auto p-4 border-t">
          <button className="cursor-pointer flex items-center gap-2 text-sm text-secondary hover:text-secondary/50">
            <LogOut size={18} />
            Sair
          </button>
        </div>

      </aside>

      {/* Conteúdo */}
      <main className="flex-1 p-10">
        {children}
      </main>

    </div>
  )
}