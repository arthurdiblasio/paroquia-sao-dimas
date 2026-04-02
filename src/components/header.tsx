"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-primary">
      <div className="flex w-full items-center justify-between px-6 py-4">
        {/* Desktop menu */}
        <nav className="hidden w-full items-center gap-8 text-white font-bold md:flex">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image
              src="/logo.png"
              alt="Paróquia São Dimas"
              width={40}
              height={40}
            />
          </Link>

          <div className="flex flex-1 items-center justify-center gap-8 xl:gap-10">
            <Link href="/" className="whitespace-nowrap hover:text-secondary">Início</Link>
            <Link href="/igrejas" className="whitespace-nowrap hover:text-secondary">Igrejas</Link>
            <Link href="/noticias" className="whitespace-nowrap hover:text-secondary">Notícias</Link>
            <Link href="/missas" className="whitespace-nowrap hover:text-secondary">Missas</Link>
            <Link href="/pastorais" className="whitespace-nowrap hover:text-secondary">Pastorais</Link>
            <Link href="/prestacao-contas" className="whitespace-nowrap hover:text-secondary">
              Prestação de Contas
            </Link>
            <Link href="/agendamentos" className="whitespace-nowrap hover:text-secondary">
              Agendamentos
            </Link>
          </div>

          <Link
            href="/login"
            className="shrink-0 rounded-md bg-secondary px-4 py-2 text-white hover:bg-secondary/90"
          >
            <div className="text-primary">
              Acesso Restrito

            </div>
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <nav className="flex flex-col gap-4 px-6 py-4">
            <Link href="/" onClick={() => setOpen(false)}>Início</Link>
            <Link href="/noticias" onClick={() => setOpen(false)}>Notícias</Link>
            <Link href="/igrejas" onClick={() => setOpen(false)}>Igrejas</Link>
            <Link href="/missas" onClick={() => setOpen(false)}>Missas</Link>
            <Link href="/pastorais" onClick={() => setOpen(false)}>Pastorais</Link>
            <Link href="/prestacao-contas" onClick={() => setOpen(false)}>
              Prestação de Contas
            </Link>
            <Link href="/agendamentos" onClick={() => setOpen(false)}>
              Agendamentos
            </Link>

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
