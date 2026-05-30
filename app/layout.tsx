import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

import LenisProvider from "@/components/providers/lenis-provider"

export const metadata: Metadata = {
  title: "Negeri Kahiyang",
  description: "Mulai, Tumbuh, dan Berkembang — Tanpa Batas.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="!scroll-smooth">
      <body className={`${inter.className} bg-[#0a0a0a] antialiased`}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
