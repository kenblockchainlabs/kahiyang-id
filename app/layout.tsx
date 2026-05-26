import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import LenisProvider from "@/components/providers/lenis-provider"
import ThemeProvider from "@/components/providers/theme-provider"

export const metadata: Metadata = {
  title: "Negeri Kahiyang",
  description: "Mulai, Tumbuh, dan Berkembang â€” Tanpa Batas.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} antialiased`}>
        <LenisProvider><ThemeProvider>{children}</ThemeProvider></LenisProvider>
      </body>
    </html>
  );
}



