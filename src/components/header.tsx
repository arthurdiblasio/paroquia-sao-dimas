"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navigationItems = [
  { href: "/", label: "Início" },
  { href: "/igrejas", label: "Igrejas" },
  { href: "/noticias", label: "Notícias" },
  { href: "/missas", label: "Missas" },
  { href: "/pastorais", label: "Pastorais" },
  { href: "/prestacao-contas", label: "Prestação de Contas" },
  { href: "/agendamentos", label: "Agendamentos" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  function isActivePath(href: string) {
    if (href === "/") {
      return pathname === "/"
    }

    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header className="w-full bg-primary">
      <div className="flex w-full items-center justify-between px-6 py-4">
        <nav className="hidden w-full items-center gap-8 text-white font-bold md:flex">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image src="/logo.png" alt="Paróquia São Dimas" width={40} height={40} />
          </Link>

          <div className="flex flex-1 items-center justify-center gap-8 xl:gap-10">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap transition hover:text-secondary ${isActivePath(item.href) ? "text-secondary" : "text-white"}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/login"
            className="shrink-0 rounded-md bg-secondary px-4 py-2 text-white hover:bg-secondary/90"
          >
            <div className="text-primary">Acesso Restrito</div>
          </Link>
        </nav>

        <button className="text-white md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <nav className="flex flex-col gap-4 px-6 py-4">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`transition ${isActivePath(item.href) ? "font-semibold text-secondary" : "text-slate-900"}`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/login"
              className="mt-2 rounded-md bg-primary px-4 py-2 text-center text-white"
              onClick={() => setOpen(false)}
            >
              Acesso Restrito
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
