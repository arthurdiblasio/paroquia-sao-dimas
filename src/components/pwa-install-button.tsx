"use client"

import { useEffect, useState } from "react"
import { Download } from "lucide-react"

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>
}

function isStandaloneApp() {
  const navigatorWithStandalone = window.navigator as Navigator & { standalone?: boolean }

  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.matchMedia("(display-mode: fullscreen)").matches ||
    navigatorWithStandalone.standalone === true
  )
}

export function PwaInstallButton() {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isInstalled, setIsInstalled] = useState(() => {
    if (typeof window === "undefined") {
      return false
    }

    return isStandaloneApp()
  })

  useEffect(() => {
    function handleBeforeInstallPrompt(event: Event) {
      event.preventDefault()
      setInstallPrompt(event as BeforeInstallPromptEvent)
    }

    function handleAppInstalled() {
      setInstallPrompt(null)
      setIsInstalled(true)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    window.addEventListener("appinstalled", handleAppInstalled)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
      window.removeEventListener("appinstalled", handleAppInstalled)
    }
  }, [])

  async function handleInstall() {
    if (!installPrompt) {
      return
    }

    await installPrompt.prompt()
    const choice = await installPrompt.userChoice

    if (choice.outcome === "accepted") {
      setIsInstalled(true)
    }

    setInstallPrompt(null)
  }

  if (isInstalled || !installPrompt) {
    return null
  }

  return (
    <button
      type="button"
      onClick={handleInstall}
      className="fixed bottom-24 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
      aria-label="Instalar aplicativo"
      title="Instalar aplicativo"
    >
      <Download className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}
