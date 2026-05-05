import "./globals.css"

import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"

import { PublicShell } from "@/components/layout/public-shell"
import { PwaServiceWorker } from "@/components/pwa-service-worker"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  applicationName: "Paroquia Sao Dimas",
  title: {
    default: "Paroquia Sao Dimas",
    template: "%s | Paroquia Sao Dimas",
  },
  description: "Aplicativo da Paroquia Sao Dimas.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Sao Dimas",
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" }],
  },
}

export const viewport: Viewport = {
  themeColor: "#144f3f",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.variable}>
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places`}
          async
        />
        <PwaServiceWorker />
        <PublicShell>{children}</PublicShell>
      </body>
    </html>
  )
}
