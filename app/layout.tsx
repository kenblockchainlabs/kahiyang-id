import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

import LenisProvider from "@/components/providers/lenis-provider"

export const metadata: Metadata = {
  title: "Negeri Kahiyang",
  description: "Mulai, Tumbuh, dan Berkembang — Tanpa Batas.",
  manifest: "/manifest.json",
  icons: {
    icon: "/logo-sm.png",
    apple: "/logo.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Kahiyang",
  },
  openGraph: {
    title: "Negeri Kahiyang",
    description: "Digital Ecosystem — Mulai, Tumbuh, dan Berkembang Tanpa Batas.",
    url: "https://kahiyang.id",
    siteName: "Kahiyang",
    images: [{ url: "https://kahiyang.id/og-image.png", width: 1200, height: 630, type: "image/png" }],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Negeri Kahiyang",
    description: "Digital Ecosystem — Mulai, Tumbuh, dan Berkembang Tanpa Batas.",
    images: ["https://kahiyang.id/og-image.png"],
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="!scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${inter.className} bg-[#0a0a0a] antialiased`}>
        <LenisProvider>{children}</LenisProvider>
        <script dangerouslySetInnerHTML={{ __html: `
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
              navigator.serviceWorker.register('/sw.js');
            });
          }
        `}} />
      </body>
    </html>
  )
}
