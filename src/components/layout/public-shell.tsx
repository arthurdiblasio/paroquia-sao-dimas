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
    </>
  )
}
