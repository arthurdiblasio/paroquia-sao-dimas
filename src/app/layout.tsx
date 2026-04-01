import "./globals.css"

import { PublicShell } from "@/components/layout/public-shell"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places`}
          async
        />
        <PublicShell>{children}</PublicShell>
      </body>
    </html>
  )
}
