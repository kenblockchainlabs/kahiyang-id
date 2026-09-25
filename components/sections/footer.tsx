"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "expo.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 90%",
              toggleActions: "play none none none"
            }
          }
        )
      }
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="bg-[#050505] border-t border-white/[0.06] relative">
      {/* Ambient top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px bg-gradient-to-r from-transparent via-[#d25933]/30 to-transparent" />

      <div ref={contentRef} className="max-w-[1580px] mx-auto px-6 sm:px-10">

        {/* Top Grid: Brand + Links + Contact */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 sm:py-16 border-b border-white/[0.06]">

          {/* Brand Column */}
          <div className="md:col-span-4">
            <Link href="/" className="text-white text-xl font-display tracking-tight">
              Kahiyang<span className="text-[#d25933]">.id</span>
            </Link>
            <p className="text-[13px] text-white/40 mt-3 leading-relaxed max-w-[280px]">
              Ekosistem digital Indonesia. Mulai, tumbuh, dan berkembang — tanpa batas.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-4">
            <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] block mb-4">
              NAVIGATION
            </span>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-8">
              {[
                { label: "Work", href: "#layanan" },
                { label: "About", href: "#tentang" },
                { label: "Komunitas", href: "/komunitas" },
                { label: "Partnership", href: "/partnership" },
                { label: "Privacy", href: "/privacy-policy" },
                { label: "Terms", href: "/terms" },
              ].map(link => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/40 hover:text-white transition-colors duration-300 font-light"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4">
            <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em] block mb-4">
              DIRECT INQUIRY
            </span>
            <div className="space-y-3">
              <Link
                href="mailto:partnership@kahiyang.id"
                className="text-sm text-white/60 hover:text-white transition-colors duration-300 block"
              >
                partnership@kahiyang.id
              </Link>
              <Link
                href="https://t.me/kahiyang_partnership"
                target="_blank"
                className="text-sm text-white/60 hover:text-white transition-colors duration-300 block"
              >
                Telegram Partnership
              </Link>
              <Link
                href="https://t.me/+FarOaL4D-HFlMGM1"
                target="_blank"
                className="text-sm text-white/60 hover:text-white transition-colors duration-300 block"
              >
                Telegram Community
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 py-6 sm:py-8">
          <p className="text-white/20 text-[10px] sm:text-xs font-mono tracking-wide">
            © 2026 KAHIYANG — BINAR PAGI NUSANTARA. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d25933]" />
            <span className="text-[10px] font-mono text-white/20 tracking-widest uppercase">
              MALANG, INDONESIA
            </span>
          </div>
        </div>

      </div>
    </footer>
  )
}
