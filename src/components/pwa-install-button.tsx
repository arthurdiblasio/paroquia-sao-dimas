"use client"

import { Download } from "lucide-react"

import { usePwaInstall } from "@/hooks/use-pwa-install"

export function PwaInstallButton() {
  const { canInstall, installApp } = usePwaInstall()

  if (!canInstall) {
    return null
  }

  return (
    <button
      type="button"
      onClick={installApp}
      className="fixed bottom-24 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 lg:hidden"
      aria-label="Instalar aplicativo"
      title="Instalar aplicativo"
    >
      <Download className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}
