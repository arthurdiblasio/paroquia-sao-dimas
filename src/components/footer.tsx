import Link from "next/link"
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="mx-auto max-w-[1200px] px-6 py-12 grid gap-10 md:grid-cols-3">

        {/* Informações */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Paróquia São Dimas</h3>

          <p className="flex items-center gap-2 text-sm">
            <MapPin size={18} />
            Rua Exemplo, 123 - Cidade
          </p>

          <p className="flex items-center gap-2 text-sm">
            <Phone size={18} />
            (31) 99999-9999
          </p>

          <p className="flex items-center gap-2 text-sm">
            <Mail size={18} />
            contato@paroquiasaodimas.com
          </p>
        </div>

        {/* Navegação */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Navegação</h3>

          <nav className="flex flex-col gap-2 text-sm">
            <Link href="/">Início</Link>
            <Link href="/noticias">Notícias</Link>
            <Link href="/igrejas">Igrejas</Link>
            <Link href="/missas">Missas</Link>
            <Link href="/pastorais">Pastorais</Link>
            <Link href="/prestacao-contas">Prestação de Contas</Link>
            <Link href="/agendamentos">Agendamentos</Link>
          </nav>
        </div>

        {/* Redes sociais */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Redes Sociais</h3>

          <div className="flex gap-4">
            <a href="#" className="hover:text-secondary">
              <Instagram size={22} />
            </a>

            <a href="#" className="hover:text-secondary">
              <Facebook size={22} />
            </a>

            <a href="#" className="hover:text-secondary">
              <Youtube size={22} />
            </a>
          </div>
          <div className="w-full align-middle">
            <Image
              src="/logo.png"
              alt="Paróquia São Dimas"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="border-t border-white/20">
        <div className="mx-auto max-w-[1200px] px-6 py-4 text-center text-sm">
          © {new Date().getFullYear()} Paróquia São Dimas — Desenvolvido por{" "}
          <span className="font-semibold text-secondary">
            Di Blasio Tech
          </span>
        </div>
      </div>
    </footer>
  )
}