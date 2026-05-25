import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import LenisProvider from "@/components/providers/lenis-provider"

export const metadata: Metadata = {
  title: "Negeri Kahiyang",
  description: "Mulai, Tumbuh, dan Berkembang â€” Tanpa Batas.",
};

import LenisProvider from "@/components/providers/lenis-provider"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}

