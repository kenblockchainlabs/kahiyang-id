'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Komunitas', href: '#komunitas' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Partnership', href: '#partnership' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClass = [
    'relative rounded-full px-3 py-2 flex items-center gap-3',
    'transition-all duration-500 ease-out',
    scrolled
      ? 'bg-[#151515]/90 backdrop-blur-2xl border border-white/[0.08] shadow-2xl shadow-black/50'
      : 'bg-white/[0.04] backdrop-blur-xl border border-white/[0.06]',
  ].join(' ')

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      >
        <div className={navClass}>
          <a href="#" className="flex items-center gap-2.5 px-3">
            <Image
              src="/logo.jpg"
              width={28}
              height={28}
              alt="Negeri Kahiyang"
              className="rounded-full ring-1 ring-white/10"
            />
            <span className="hidden sm:block text-white/90 text-sm font-medium tracking-wide">
              Kahiyang
            </span>
          </a>
          <div className="hidden lg:block w-px h-5 bg-white/[0.08]" />
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-4 py-1.5 text-[13px] text-white/50 hover:text-white/90 font-light tracking-wider uppercase transition-all duration-300 group"
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute inset-0 rounded-full bg-white/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
          </div>
          <div className="hidden lg:block w-px h-5 bg-white/[0.08]" />
          <button className="relative rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/[0.1] hover:border-white/20 text-white/90 px-5 py-2 text-[13px] font-light tracking-wider uppercase transition-all duration-300 overflow-hidden group">
            <span className="relative z-10">Gabung</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center"
          >
            <div className="flex flex-col gap-[5px] items-center">
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
                className="block w-4 h-[1.5px] bg-white/70 origin-center"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
                className="block w-4 h-[1.5px] bg-white/70 origin-center"
              />
            </div>
          </button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-3xl"
          >
            <div className="flex flex-col items-center justify-center h-full gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setMobileOpen(false)}
                  className="text-4xl sm:text-5xl font-light text-white/20 hover:text-white/90 tracking-tight transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: navLinks.length * 0.08 }}
                className="mt-8 rounded-full bg-white text-black px-8 py-3 text-lg font-medium tracking-wide"
              >
                Gabung
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
