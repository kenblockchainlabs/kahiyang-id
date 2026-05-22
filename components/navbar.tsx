'use client'

import Image from 'next/image'
import { Menu } from 'lucide-react'

const navLinks = [
  { label: 'Beranda', href: '#' },
  { label: 'Layanan', href: '#' },
  { label: 'Ruang Ilmu', href: '#' },
  { label: 'Komunitas', href: '#' },
  { label: 'BlockInside', href: '#' },
  { label: 'Partnership', href: '#' },
  { label: 'Tentang', href: '#' },
]

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center gap-8">
        <Image
          src="/logo.jpg"
          width={32}
          height={32}
          alt="Negeri Kahiyang"
          className="rounded-full"
        />

        <div className="hidden lg:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button className="rounded-full bg-white text-black px-4 py-1.5 text-sm font-semibold hover:bg-white/90 transition-colors">
          Gabung
        </button>

        <button className="lg:hidden">
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>
    </nav>
  )
}
