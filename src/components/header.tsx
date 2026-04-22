"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"

const navigationItems = [
  { href: "/noticias", label: "Notícias" },
  { href: "/pastorais", label: "Pastorais" },
  { href: "/prestacao-contas", label: "Prestação de Contas" },
  { href: "/agendamentos", label: "Agendamentos" },
]

const churchMenuItems = [
  { href: "/igrejas", label: "Igrejas" },
  { href: "/missas", label: "Missas" },
  { href: "/pastorais", label: "Párocos" },
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

  const isChurchMenuActive = churchMenuItems.some((item) => isActivePath(item.href))

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-primary shadow-lg shadow-slate-950/5">
      <div className="flex w-full items-center justify-between px-6 py-4">
        <nav className="hidden w-full items-center gap-8 text-white font-bold lg:flex">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image src="/logo.png" alt="Paróquia São Dimas" width={40} height={40} />
          </Link>

          <div className="flex flex-1 items-center justify-center gap-8 xl:gap-10">
            <Link
              href="/"
              className={`whitespace-nowrap transition hover:text-secondary ${isActivePath("/") ? "text-secondary" : "text-white"}`}
            >
              Início
            </Link>

            <div className="relative group">
              <button
                type="button"
                className={`flex items-center gap-1 whitespace-nowrap transition hover:text-secondary ${isChurchMenuActive ? "text-secondary" : "text-white"}`}
              >
                Igrejas
                <ChevronDown size={16} />
              </button>

              <div className="invisible absolute left-0 top-full z-10 mt-1 min-w-[170px] flex-col rounded-2xl border border-white/10 bg-primary/95 p-3 opacity-0 shadow-xl shadow-slate-950/20 transition duration-150 group-hover:visible group-hover:opacity-100">
                {churchMenuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block whitespace-nowrap rounded-xl px-4 py-2 text-sm text-white transition hover:bg-white/10 hover:text-secondary"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

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
        <nav className="lg:hidden flex justify-between w-full">
          <button className="text-white " onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image src="/logo.png" alt="Paróquia São Dimas" width={40} height={40} />
          </Link>

        </nav>
      </div>

      {open && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <nav className="flex flex-col gap-4 px-6 py-4">
            <div className="space-y-2">
              <div className="text-sm font-semibold uppercase tracking-wide text-slate-900">Igreja</div>
              {churchMenuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2 transition ${isActivePath(item.href) ? "font-semibold text-secondary" : "text-slate-900 hover:text-secondary"}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

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
