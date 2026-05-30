"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, Component, type ReactNode } from "react"
import dynamic from "next/dynamic"

const Wave = dynamic(() => import("@/components/ui/wave").then(m => m.Wave), { ssr: false })

class WaveSafe extends Component<{ children: ReactNode }, { ok: boolean }> {
  state = { ok: true }
  static getDerivedStateFromError() { return { ok: false } }
  render() { return this.state.ok ? this.props.children : null }
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const maskRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })

  const waveScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 4, 10])
  const waveOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.9, 0.6])
  const textScale = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1.3, 2])
  const textOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 0.5, 0])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"])
  const frameScale = useTransform(scrollYProgress, [0, 1], [1, 2])
  const frameOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 0.3, 0])
  const vignetteOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 0.85], [0, 0.3, 0.7, 1])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0])

  // MASK — burn dari tengah, tepi irregular
  useEffect(() => {
    let rafId: number
    const handleScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        if (!ref.current || !maskRef.current) return
        const rect = ref.current.getBoundingClientRect()
        const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)))
        const burn = Math.max(0, Math.min(1, (progress - 0.4) / 0.4))
        const r = burn * 55
        const mask = `radial-gradient(circle at center, transparent 0%, transparent ${r}%, rgba(0,0,0,0.15) ${r + 0.8}%, black ${r + 2.5}%, rgba(0,0,0,0.3) ${r + 4}%, black ${r + 6}%, black 100%)`
        maskRef.current.style.maskImage = mask
        maskRef.current.style.webkitMaskImage = mask
      })
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => { window.removeEventListener("scroll", handleScroll); cancelAnimationFrame(rafId) }
  }, [])

  const corners = ["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"]

  return (
    <section ref={ref} className="relative w-full" style={{ height: "500vh" }}>
      <motion.div style={{ opacity: heroOpacity }} className="sticky top-0 h-screen w-full overflow-hidden">

        {/* === Cream bg === */}
        <div className="absolute inset-0 z-0 bg-[#f5f0e8]" />

        {/* === SECTIONS DI DALAM HERO — keliatan pas mask buka === */}
        <div className="absolute inset-0 z-[5] flex items-center justify-center pointer-events-none p-8">
          <div className="max-w-5xl w-full">
            <div className="text-center mb-12">
              <p className="text-[11px] text-black/30 tracking-[0.3em] uppercase mb-4 font-light">Layanan</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-black/80 tracking-tight">Eksplor Layanan Kami</h2>
            </div>
            <div className="grid grid-cols-2 gap-3 max-w-3xl mx-auto mb-16">
              {[
                { n: "01", t: "Forensic Analysis", d: "Bedah akun TikTok lo pakai data real" },
                { n: "02", t: "Kelas Affiliate", d: "Dari nol sampai pecah telur" },
                { n: "03", t: "Konsultasi", d: "Deep dive untuk akun yang stuck" },
{ n: "04", t: "AI Agent", d: "Instalasi Hermes AI Agent" },
              ].map(s => (
                <div key={s.n} className="p-5 rounded-xl bg-white/60 border border-black/[0.06]">
                  <span className="text-[10px] text-black/20 tracking-[0.3em] uppercase">{s.n}</span>
                  <h3 className="text-base sm:text-lg font-light text-black/80 mt-2">{s.t}</h3>
                  <p className="text-xs text-black/40 mt-1 font-light">{s.d}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-[11px] text-black/30 tracking-[0.3em] uppercase mb-4 font-light">Tentang Kami</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black/80 tracking-tight max-w-2xl mx-auto">
                Negeri Kahiyang adalah tempat untuk siapa saja yang siap <span className="text-cyan-700">berkembang</span>
              </h2>
            </div>
          </div>
        </div>

        {/* === Hitam + Neon + Mask === */}
        <div ref={maskRef} className="absolute inset-0 z-10 bg-[#0a0a0a]">
          <WaveSafe>
            <motion.div style={{ scale: waveScale, opacity: waveOpacity }} className="absolute inset-0 flex items-center justify-center origin-center">
              <Wave speed={0.5} tiles={1.2} width={1920} height={1080} />
            </motion.div>
          </WaveSafe>
          <motion.div style={{ opacity: vignetteOpacity }} className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0" style={{
              background: "radial-gradient(ellipse at center, transparent 10%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,1) 100%)"
            }} />
          </motion.div>
        </div>

        {/* === Frame === */}
        <motion.div style={{ scale: frameScale, opacity: frameOpacity }} className="absolute inset-6 sm:inset-10 md:inset-16 z-20 pointer-events-none">
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }} className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent origin-center" />
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }} className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent origin-center" />
          <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }} className="absolute left-0 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-white/[0.15] to-transparent origin-center" />
          <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }} className="absolute right-0 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-white/[0.15] to-transparent origin-center" />
          {corners.map((pos, i) => (
            <motion.div key={pos} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 1.3 + i * 0.1 }} className={"absolute " + pos + " w-2 h-2 rounded-full bg-cyan-400/50"} />
          ))}
        </motion.div>

        {/* === Text === */}
        <motion.div style={{ scale: textScale, opacity: textOpacity, y: textY }} className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto w-full origin-center pointer-events-none">
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

        {/* === Scroll indicator === */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }} style={{ opacity: textOpacity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 text-white/20 text-[10px] tracking-[0.5em] uppercase flex flex-col items-center gap-3 font-light">
          <span>Scroll</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>

      </motion.div>
    </section>
  )
}
