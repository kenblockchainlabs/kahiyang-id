"use client"

import { useEffect, useRef, useState } from "react"
import { Wave } from "@/components/ui/wave"

export default function Hero() {
  const [showContent, setShowContent] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Wave — always running */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Wave speed={0.5} tiles={1.2} width={1920} height={1080} />
      </div>

      {/* Gradient overlay — fade on scroll */}
      <div
        className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-700"
        style={{
          opacity: scrolled ? 1 : 0,
          background: "linear-gradient(to bottom, transparent 0%, #2a2520 40%, #f5f0e8 100%)"
        }}
      />

      {/* Frame */}
      <div className="absolute inset-[4vh] sm:inset-[4vw] z-20 pointer-events-none">
        <div
          className="absolute inset-0 origin-center transition-transform duration-1000"
          style={{ transform: `scale(${scrolled ? 3 : 1})`, opacity: scrolled ? 0 : 1 }}
        >
          <div className="absolute top-0 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
          <div className="absolute bottom-0 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
          <div className="absolute left-0 top-[8%] bottom-[8%] w-px bg-gradient-to-b from-transparent via-white/[0.15] to-transparent" />
          <div className="absolute right-0 top-[8%] bottom-[8%] w-px bg-gradient-to-b from-transparent via-white/[0.15] to-transparent" />
          <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-cyan-400/50" />
          <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-cyan-400/50" />
          <div className="absolute bottom-0 left-0 w-2 h-2 rounded-full bg-cyan-400/50" />
          <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-cyan-400/50" />
        </div>
      </div>

      {/* Text */}
      <div
        className="relative z-30 flex flex-col items-center justify-center text-center px-4 h-full transition-all duration-700"
        style={{
          transform: `scale(${scrolled ? 2 : 1})`,
          opacity: scrolled ? 0 : 1
        }}
      >
        <div
          className={`flex items-center gap-3 mb-8 transition-all duration-700 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-400/50" />
          <span className="text-[11px] sm:text-xs text-white/30 tracking-[0.3em] uppercase font-light">Digital Ecosystem</span>
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-cyan-400/50" />
        </div>
        <h1
          className={`text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight transition-all duration-1000 delay-200 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="bg-gradient-to-b from-white via-white/90 to-white/40 bg-clip-text text-transparent">Negeri</span><br />
          <span className="bg-gradient-to-r from-cyan-200 via-white to-cyan-200 bg-clip-text text-transparent">Kahiyang</span>
        </h1>
        <p
className={`mt-8 text-sm sm:text-base md:text-lg text-white/30 max-w-xl font-light tracking-[0.15em] leading-relaxed transition-all duration-1000 delay-500 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          Mulai, Tumbuh, dan Berkembang &mdash; Tanpa Batas.
        </p>
        <div
          className={`mt-12 flex items-center gap-4 transition-all duration-700 delay-700 ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <a href="#layanan" className="group relative rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] hover:border-white/20 px-7 py-3 text-[13px] text-white/70 hover:text-white tracking-[0.2em] uppercase font-light transition-all duration-500 overflow-hidden">
            <span className="relative z-10">Eksplor</span>
          </a>
          <a href="#tentang" className="text-[13px] text-white/25 hover:text-white/50 tracking-[0.2em] uppercase font-light transition-colors duration-300">Tentang →</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-3 transition-opacity duration-700 delay-1000 ${showContent && !scrolled ? "opacity-100" : "opacity-0"}`}
      >
        <span className="text-white/30 text-[10px] tracking-[0.4em] uppercase font-light">Geser ke bawah</span>
        <div className="animate-bounce">
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-white/20">
            <path d="M8 4L8 18M8 18L2 12M8 18L14 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  )
}
