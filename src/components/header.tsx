"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Paróquia São Dimas"
            width={40}
            height={40}
          />
        </Link>

        {/* Desktop menu */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="hover:text-primary">Início</Link>
          <Link href="/igrejas" className="hover:text-primary">Igrejas</Link>
          <Link href="/noticias" className="hover:text-primary">Notícias</Link>
          <Link href="/missas" className="hover:text-primary">Missas</Link>
          <Link href="/pastorais" className="hover:text-primary">Pastorais</Link>
          <Link href="/prestacao-contas" className="hover:text-primary">
            Prestação de Contas
          </Link>
          <Link href="/agendamentos" className="hover:text-primary">
            Agendamentos
          </Link>

          <Link
            href="/login"
            className="rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90"
          >
            Acesso Restrito
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
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