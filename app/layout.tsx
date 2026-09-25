import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

import LenisProvider from "@/components/providers/lenis-provider"
import ScrollProgress from "@/components/scroll-progress"
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
} from "@/lib/seo"

export const metadata: Metadata = {
  metadataBase: new URL("https://kahiyang.id"),
  title: {
    default: "Kahiyang — Ekosistem Digital Indonesia",
    template: "%s | Kahiyang",
  },
  description:
    "Ekosistem digital Indonesia: komunitas TikTok Affiliate, tools AI untuk konten kreator, foto produk otomatis, dan layanan digital marketing. Mulai, tumbuh, dan berkembang tanpa batas.",
  keywords: [
    "Kahiyang",
    "TikTok Affiliate Indonesia",
    "komunitas TikTok",
    "foto produk AI",
    "digital marketing Indonesia",
    "konten kreator",
    "affiliate marketing",
    "tools AI",
    "Kahiyang Studio",
    "Kahiyang Visual",
  ],
  authors: [{ name: "Kahiyang", url: "https://kahiyang.id" }],
  creator: "Kahiyang",
  publisher: "Kahiyang",
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
    title: "Kahiyang — Ekosistem Digital Indonesia",
    description:
      "Komunitas TikTok Affiliate, tools AI, foto produk otomatis, dan layanan digital marketing. Mulai, tumbuh, dan berkembang tanpa batas.",
    url: "https://kahiyang.id",
    siteName: "Kahiyang",
    images: [
      {
        url: "https://kahiyang.id/og-image.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Kahiyang — Ekosistem Digital Indonesia",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kahiyang — Ekosistem Digital Indonesia",
    description:
      "Komunitas TikTok Affiliate, tools AI, dan layanan digital marketing Indonesia.",
    images: ["https://kahiyang.id/og-image.png"],
  },
  alternates: {
    canonical: "https://kahiyang.id",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: "#050505",
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
    <html lang="id">
      <head>
        {/* Instrument Serif — editorial display font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#050505] text-[#f4f4f4] antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebsiteSchema()),
          }}
        />

        {/* Film grain noise overlay */}
        <div className="noise-overlay pointer-events-none fixed inset-0 z-[9998]" aria-hidden="true" />

        <ScrollProgress />
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
