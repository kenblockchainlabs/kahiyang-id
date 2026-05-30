"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect, Component, type ReactNode } from "react"
import dynamic from "next/dynamic"

const Wave = dynamic(() => import("@/components/ui/wave").then(m => m.Wave), { ssr: false })

class WaveSafe extends Component<{ children: ReactNode }, { ok: boolean }> {
  state = { ok: true }
  static getDerivedStateFromError() { return { ok: false } }
  render() { return this.state.ok ? this.props.children : null }
}

function MobileHero() {
  return (
    <section className="relative w-full h-screen bg-[#0a0a0a] overflow-hidden">
      {/* CSS Neon Ring — konsisten di semua HP */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative" style={{ width: "70vmin", height: "70vmin" }}>
          {/* Outer glow */}
          <div className="absolute inset-0 rounded-full animate-neon-pulse" style={{
            background: "radial-gradient(ellipse at center, rgba(0,200,255,0.08) 0%, rgba(0,200,255,0.04) 40%, transparent 70%)"
          }} />
          {/* Ring */}
          <div className="absolute inset-[15%] rounded-full animate-neon-ring" style={{
            border: "2px solid rgba(0,200,255,0.3)",
            boxShadow: "0 0 30px rgba(0,200,255,0.15), inset 0 0 30px rgba(0,200,255,0.08), 0 0 60px rgba(0,200,255,0.05)"
          }} />
          {/* Inner glow */}
          <div className="absolute inset-[30%] rounded-full" style={{
            background: "radial-gradient(circle, rgba(0,200,255,0.06) 0%, transparent 70%)"
          }} />
          {/* Center dot */}
          <div className="absolute inset-[45%] rounded-full animate-neon-dot" style={{
            background: "radial-gradient(circle, rgba(0,255,212,0.4) 0%, rgba(0,255,212,0.1) 50%, transparent 70%)"
          }} />
        </div>
      </div>

      {/* Gradient portal */}
      <div className="absolute inset-0 z-10 pointer-events-none hero-gradient-fade">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(42,37,32,0.6) 40%, #f5f0e8 100%)"
        }} />
      </div>

      {/* Frame */}
      <div className="absolute inset-6 sm:inset-10 z-20 pointer-events-none">
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent origin-center hero-scale-x" style={{ animationDelay: "0.8s" }} />
        <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent origin-center hero-scale-x" style={{ animationDelay: "1.0s" }} />
        <div className="absolute left-0 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-white/[0.15] to-transparent origin-center hero-scale-y" style={{ animationDelay: "0.9s" }} />
        <div className="absolute right-0 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-white/[0.15] to-transparent origin-center hero-scale-y" style={{ animationDelay: "1.1s" }} />
        <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-cyan-400/50 hero-fade" style={{ animationDelay: "1.3s" }} />
        <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-cyan-400/50 hero-fade" style={{ animationDelay: "1.4s" }} />
        <div className="absolute bottom-0 left-0 w-2 h-2 rounded-full bg-cyan-400/50 hero-fade" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-cyan-400/50 hero-fade" style={{ animationDelay: "1.6s" }} />
      </div>

      {/* Text */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center px-4 h-full max-w-5xl mx-auto w-full">
        <div className="mb-8 flex items-center gap-3 hero-fade" style={{ animationDelay: "0.3s" }}>
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-400/50" />
<span className="text-[11px] text-white/30 tracking-[0.3em] uppercase font-light">Digital Ecosystem</span>
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-cyan-400/50" />
        </div>
        <h1 className="text-5xl font-light tracking-tight hero-fade" style={{ animationDelay: "0.5s" }}>
          <span className="bg-gradient-to-b from-white via-white/90 to-white/40 bg-clip-text text-transparent">Negeri</span><br />
          <span className="bg-gradient-to-r from-cyan-200 via-white to-cyan-200 bg-clip-text text-transparent">Kahiyang</span>
        </h1>
        <p className="mt-8 text-sm text-white/30 max-w-xl font-light tracking-[0.15em] leading-relaxed hero-fade" style={{ animationDelay: "0.8s" }}>
          Mulai, Tumbuh, dan Berkembang &mdash; Tanpa Batas.
        </p>
        <div className="mt-12 flex items-center gap-4 hero-fade" style={{ animationDelay: "1.1s" }}>
          <a href="#layanan" className="rounded-full bg-white/[0.06] border border-white/[0.1] px-7 py-3 text-[13px] text-white/70 tracking-[0.2em] uppercase font-light inline-block">
            Eksplor
          </a>
          <a href="#tentang" className="text-[13px] text-white/25 tracking-[0.2em] uppercase font-light">Tentang →</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 text-white/20 text-[10px] tracking-[0.5em] uppercase flex flex-col items-center gap-3 font-light hero-fade" style={{ animationDelay: "1.5s" }}>
        <span>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent animate-bounce-slow" />
      </div>
    </section>
  )
}

function DesktopHero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })

  const waveScale = useTransform(scrollYProgress, [0, 1], [1, 6])
  const waveOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.8, 0])
  const textScale = useTransform(scrollYProgress, [0, 0.4], [1, 4])
  const textOpacity = useTransform(scrollYProgress, [0, 0.25, 0.4], [1, 0.5, 0])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])
  const frameScale = useTransform(scrollYProgress, [0, 1], [1, 3])
  const frameOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7], [1, 0.4, 0])
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [0, 0, 0.5, 1])

  const corners = ["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"]

  return (
    <section ref={ref} className="relative w-full bg-[#0a0a0a]" style={{ height: "400vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#0a0a0a]">
        <motion.div style={{ scale: waveScale, opacity: waveOpacity }} className="absolute inset-0 z-0 flex items-center justify-center origin-center">
          <WaveSafe>
            <Wave speed={0.5} tiles={1.2} width={1920} height={1080} />
          </WaveSafe>
        </motion.div>

        <motion.div style={{ opacity: gradientOpacity }} className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute inset-0" style={{
            background: "linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(42,37,32,0.6) 40%, #f5f0e8 100%)"
          }} />
        </motion.div>

        <motion.div style={{ scale: frameScale, opacity: frameOpacity }} className="absolute inset-6 sm:inset-10 md:inset-16 z-20 pointer-events-none">
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }} className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent origin-center" />
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }} className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent origin-center" />
<motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }} className="absolute left-0 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-white/[0.15] to-transparent origin-center" />
          <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }} className="absolute right-0 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-white/[0.15] to-transparent origin-center" />
          {corners.map((pos, i) => (
            <motion.div key={pos} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 1.3 + i * 0.1 }} className={"absolute " + pos + " w-2 h-2 rounded-full bg-cyan-400/50"} />
          ))}
        </motion.div>

        <motion.div style={{ scale: textScale, opacity: textOpacity, y: textY }} className="relative z-30 flex flex-col items-center text-center px-4 max-w-5xl mx-auto w-full origin-center">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="mb-8 flex items-center gap-3">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-400/50" />
            <span className="text-[11px] sm:text-xs text-white/30 tracking-[0.3em] uppercase font-light">Digital Ecosystem</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-cyan-400/50" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }} className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight">
            <span className="bg-gradient-to-b from-white via-white/90 to-white/40 bg-clip-text text-transparent">Negeri</span><br />
            <span className="bg-gradient-to-r from-cyan-200 via-white to-cyan-200 bg-clip-text text-transparent">Kahiyang</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }} className="mt-8 text-sm sm:text-base md:text-lg text-white/30 max-w-xl font-light tracking-[0.15em] leading-relaxed">
            Mulai, Tumbuh, dan Berkembang &mdash; Tanpa Batas.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }} className="mt-12 flex items-center gap-4">
            <a href="#layanan" className="group relative rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.1] hover:border-white/20 px-7 py-3 text-[13px] text-white/70 hover:text-white tracking-[0.2em] uppercase font-light transition-all duration-500 overflow-hidden">
              <span className="relative z-10">Eksplor</span>
            </a>
            <a href="#tentang" className="text-[13px] text-white/25 hover:text-white/50 tracking-[0.2em] uppercase font-light transition-colors duration-300">Tentang →</a>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }} style={{ opacity: textOpacity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 text-white/20 text-[10px] tracking-[0.5em] uppercase flex flex-col items-center gap-3 font-light">
          <span>Scroll</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}

export default function Hero() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  if (isMobile === null) return <div className="h-screen bg-[#0a0a0a]" />
if (isMobile) return <MobileHero />
  return <DesktopHero />
}
