"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  LayoutDashboard,
  Newspaper,
  FileText,
  ReceiptText,
  Users,
  Church,
  Calendar,
  LogOut,
} from "lucide-react"

const menu = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Notícias", href: "/admin/noticias", icon: Newspaper },
  { name: "Prestações", href: "/admin/prestacoes-contas", icon: ReceiptText },
  { name: "Homilias", href: "/admin/homilias", icon: FileText },
  { name: "Pastorais", href: "/admin/pastorais", icon: Users },
  { name: "Padres", href: "/admin/padres", icon: Users },
  { name: "Igrejas", href: "/admin/igrejas", icon: Church },
  { name: "Agendamentos", href: "/admin/agendamentos", icon: Calendar },
  { name: "Usuários", href: "/admin/usuarios", icon: Users },
]

type SidebarProps = {
  role: string | null
}

export function AdminSidebar({ role }: SidebarProps) {
  const pathname = usePathname()
  const router = useRouter()

  const visibleMenu = menu.filter((item) => {
    if (item.href === "/admin/agendamentos" && role !== "ADMIN") {
      return false
    }

    if (item.href === "/admin/usuarios" && role !== "ADMIN") {
      return false
    }

    return true
  })

  async function handleLogout() {
    await fetch("/api/auth/logout", {
      method: "POST",
    })

    router.replace("/login")
  }

  return (
    <aside className="w-64 bg-primary border-r flex flex-col">
      <div className="px-6 py-5 border-b font-semibold text-white">
        Paróquia São Dimas
      </div>

      <nav className="flex flex-col gap-1 p-3">
        {visibleMenu.map((item) => {
          const Icon = item.icon
          const active =
            item.href === "/admin"
              ? pathname === item.href
              : pathname === item.href || pathname.startsWith(`${item.href}/`)

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
        <button
          type="button"
          onClick={handleLogout}
          className="cursor-pointer flex items-center gap-2 text-sm text-secondary hover:text-secondary/50"
        >
          <LogOut size={18} />
          Sair
        </button>
      </div>
    </aside>
  )
}
