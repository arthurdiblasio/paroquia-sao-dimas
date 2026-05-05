"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { PwaInstallButton } from "@/components/pwa-install-button"
import { usePathname } from "next/navigation"

export function PublicShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  if (pathname.startsWith("/login")) {
    return <main>{children}</main>
  }

  if (pathname.startsWith("/admin") || pathname.startsWith("/api")) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
      <PwaInstallButton />
      <a
        href="https://api.whatsapp.com/send?phone=5531990841083&text=Olá, preciso de ajuda com a Paróquia São Dimas."
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Abrir WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:shadow-xl"
      >
        <svg viewBox="0 0 32 32" className="h-8 w-8" fill="currentColor" aria-hidden="true">
          <path d="M16.03 3.2A12.77 12.77 0 0 0 5.1 22.56L3.5 28.8l6.39-1.5a12.75 12.75 0 0 0 6.14 1.56h.01A12.83 12.83 0 0 0 28.9 16.04 12.84 12.84 0 0 0 16.03 3.2Zm0 23.5h-.01a10.58 10.58 0 0 1-5.39-1.48l-.39-.23-3.79.89 1.01-3.69-.25-.38a10.58 10.58 0 1 1 8.82 4.89Zm5.8-7.92c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.72.16-.21.32-.82 1.03-1.01 1.24-.19.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57a9.54 9.54 0 0 1-1.76-2.19c-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.15 3.09 1.31 3.3.16.21 2.26 3.45 5.48 4.84.77.33 1.36.52 1.83.67.77.24 1.47.2 2.02.12.62-.09 1.88-.77 2.15-1.51.27-.75.27-1.39.19-1.52-.08-.14-.29-.21-.61-.37Z" />
        </svg>
      </a>
    </>
  )
}
