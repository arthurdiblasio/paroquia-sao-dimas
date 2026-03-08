import Header from "@/components/header"
import "./globals.css"
import { Open_Sans } from "next/font/google"
import Footer from "@/components/footer"

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
})

export const metadata = {
  title: "Paróquia São Dimas",
  description: "Site oficial da Paróquia São Dimas",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={openSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}