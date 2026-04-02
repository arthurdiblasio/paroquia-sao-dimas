import "./globals.css"

import { Inter } from "next/font/google"

import { PublicShell } from "@/components/layout/public-shell"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

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
        <PublicShell>{children}</PublicShell>
      </body>
    </html>
  )
}
