"use client"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { usePathname } from "next/navigation"

export function PublicShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  if (pathname === "/login") {
    return <main>{children}</main>
  }

  if (pathname.startsWith("/admin") || pathname.startsWith("/api")) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <a
        href="https://api.whatsapp.com/send?phone=5531990841083&text=Olá, preciso de ajuda com a Paróquia São Dimas."
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Abrir WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:shadow-xl"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48a11.88 11.88 0 0 0-16.8 0A11.78 11.78 0 0 0 2 12.02c0 2.08.55 4.12 1.6 5.92L2 22l4.27-1.37a11.83 11.83 0 0 0 5.75 1.49h.02c6.56 0 11.91-5.32 11.91-11.88a11.8 11.8 0 0 0-3.43-8.26Zm-8.5 17.12h-.01a9.26 9.26 0 0 1-4.71-1.27l-.34-.2-2.53.81.85-2.47-.22-.4A9.15 9.15 0 0 1 4.5 12.02a8.97 8.97 0 0 1 8.98-9 8.97 8.97 0 0 1 6.35 2.64 8.92 8.92 0 0 1 2.64 6.33 8.97 8.97 0 0 1-9 8.99Zm5.08-6.22c-.28-.14-1.66-.82-1.92-.91-.26-.09-.45-.14-.64.14-.19.28-.74.91-.9 1.1-.16.19-.33.21-.61.07a6.79 6.79 0 0 1-2-.99 7.99 7.99 0 0 1-1.52-1.88c-.16-.28-.02-.43.12-.57.12-.12.28-.31.42-.46.14-.15.19-.26.28-.43.09-.17.05-.32-.02-.45-.08-.14-.64-1.55-.88-2.12-.23-.56-.47-.49-.64-.5-.16 0-.34-.01-.52-.01a.95.95 0 0 0-.69.32c-.24.26-.93.91-.93 2.2 0 1.28.95 2.52 1.08 2.7.13.18 1.84 2.86 4.46 4.01 1.24.54 1.76.61 2.38.51.36-.06 1.11-.45 1.27-.89.16-.43.16-.8.11-.89-.05-.09-.18-.14-.39-.24Z" />
        </svg>
      </a>
    </>
  )
}
