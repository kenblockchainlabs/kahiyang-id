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

  // Neon zoom 10x lorong
  const waveScale = useTransform(scrollYProgress, [0, 0.5, 0.75], [1, 4, 8])
  const waveOpacity = useTransform(scrollYProgress, [0, 0.6, 0.75], [1, 0.8, 0])

  // Text — hilang awal
  const textScale = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1.3, 2])
  const textOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 0.5, 0])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"])

  // Frame — hilang awal
  const frameScale = useTransform(scrollYProgress, [0, 1], [1, 2])
  const frameOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 0.3, 0])

  // Vignette lorong
  const vignetteOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 0.75], [0, 0.3, 0.7, 0])

  // === SECTION ANIMATIONS — overlap, no gap ===
  // Layanan: 78-86%
  const layananScale = useTransform(scrollYProgress, [0.78, 0.8, 0.84, 0.86], [0.88, 1, 1, 0.92])
  const layananOpacity = useTransform(scrollYProgress, [0.78, 0.8, 0.84, 0.86], [0, 1, 1, 0])
  const layananY = useTransform(scrollYProgress, [0.78, 0.8, 0.84, 0.86], [40, 0, 0, -30])

  // Tentang: 84-92% (overlap dengan Layanan di 84-86%)
  const tentangScale = useTransform(scrollYProgress, [0.84, 0.86, 0.9, 0.92], [0.88, 1, 1, 0.92])
  const tentangOpacity = useTransform(scrollYProgress, [0.84, 0.86, 0.9, 0.92], [0, 1, 1, 0])
  const tentangY = useTransform(scrollYProgress, [0.84, 0.86, 0.9, 0.92], [40, 0, 0, -30])

  // CTA: 90-100% (overlap dengan Tentang di 90-92%, STAY)
  const ctaScale = useTransform(scrollYProgress, [0.9, 0.92, 1], [0.88, 1, 1])
  const ctaOpacity = useTransform(scrollYProgress, [0.9, 0.92, 1], [0, 1, 1])
  const ctaY = useTransform(scrollYProgress, [0.9, 0.92, 1], [40, 0, 0])

  // MASK — burn mulai 70%, selesai 90%
  useEffect(() => {
    let rafId: number
    const handleScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        if (!ref.current || !maskRef.current) return
        const rect = ref.current.getBoundingClientRect()
        const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)))
        const burn = Math.max(0, Math.min(1, (progress - 0.7) / 0.2))
        const r = burn * 75
        const mask = `radial-gradient(circle at center, transparent 0%, transparent ${r}%, rgba(0,0,0,0.2) ${r + 1}%, black ${r + 3}%, black 100%)`
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
    <section ref={ref} className="relative w-full" style={{ height: "600vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* === Cream bg === */}
        <div className="absolute inset-0 z-0 bg-[#f5f0e8]" />

{/* === SECTIONS — muncul satu per satu === */}
        <div className="absolute inset-0 z-[5] pointer-events-none">

          {/* LAYANAN */}
          <motion.div style={{ scale: layananScale, opacity: layananOpacity, y: layananY }} className="absolute inset-0 flex items-center justify-center p-8">
            <div className="max-w-4xl w-full text-center">
              <p className="text-[11px] text-black/30 tracking-[0.3em] uppercase mb-4 font-light">Layanan</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-black/80 tracking-tight mb-10">Eksplor Layanan Kami</h2>
              <div className="grid grid-cols-2 gap-3 max-w-3xl mx-auto">
                {[
                  { n: "01", t: "Forensic Analysis", d: "Bedah akun TikTok lo pakai data real", tag: "Core" },
                  { n: "02", t: "Kelas Affiliate", d: "Dari nol sampai pecah telur", tag: "Education" },
                  { n: "03", t: "Konsultasi", d: "Deep dive untuk akun yang stuck", tag: "Premium" },
                  { n: "04", t: "AI Agent", d: "Instalasi Hermes AI Agent", tag: "Enterprise" },
                ].map(s => (
                  <div key={s.n} className="p-5 rounded-2xl bg-white/60 border border-black/[0.06] backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] text-black/20 tracking-[0.3em] uppercase">{s.n}</span>
                      <span className="text-[9px] text-cyan-700/60 tracking-[0.2em] uppercase px-2 py-0.5 rounded-full border border-cyan-500/20">{s.tag}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-light text-black/80">{s.t}</h3>
                    <p className="text-xs text-black/40 mt-1 font-light">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* TENTANG */}
          <motion.div style={{ scale: tentangScale, opacity: tentangOpacity, y: tentangY }} className="absolute inset-0 flex items-center justify-center p-8">
            <div className="max-w-3xl w-full text-center">
              <p className="text-[11px] text-black/30 tracking-[0.3em] uppercase mb-4 font-light">Tentang Kami</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black/80 tracking-tight leading-tight mb-6">
                Negeri Kahiyang adalah tempat untuk siapa saja yang siap <span className="text-cyan-700">berkembang</span>
              </h2>
              <p className="text-sm text-black/40 font-light leading-relaxed max-w-xl mx-auto mb-10">
                Tumbuh bersama, eksplor versi terbaik dirimu, dan berkembang tanpa batas dalam ekosistem digital yang mendukung setiap langkahmu.
              </p>
              <div className="flex justify-center gap-10">
                {[{ v: "500+", l: "Akun Dianalisa" }, { v: "50+", l: "Murid Aktif" }, { v: "24/7", l: "AI Agent" }].map(s => (
                  <div key={s.l} className="text-center">
                    <div className="text-xl sm:text-2xl font-light text-black/80">{s.v}</div>
                    <div className="text-[9px] text-black/25 tracking-[0.2em] uppercase">{s.l}</div>
                  </div>
                ))}
              </div>
              <p className="mt-10 text-[10px] text-black/20 tracking-[0.2em] uppercase">
                Powered by <a href="https://binarpagi.co.id" target="_blank" rel="noopener noreferrer" className="text-black/40 underline underline-offset-4">binarpagi.co.id</a>
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div style={{ scale: ctaScale, opacity: ctaOpacity, y: ctaY }} className="absolute inset-0 flex items-center justify-center p-8">
            <div className="max-w-2xl w-full text-center">
              <p className="text-[11px] text-black/30 tracking-[0.3em] uppercase mb-4 font-light">Mulai Sekarang</p>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-black/80 tracking-tight leading-tight mb-4">
                Siap Upgrade <span className="text-cyan-700">Akun TikTok Lo?</span>
              </h2>
              <p className="text-sm text-black/40 font-light leading-relaxed max-w-md mx-auto mb-8">
                Gratis analisa akun pertama. Gue bedah pake data, bukan asumsi.
              </p>
              <div className="flex justify-center gap-4">
                <span className="rounded-full bg-black text-white px-6 py-3 text-[12px] font-medium tracking-[0.2em] uppercase">Gabung Sekarang</span>
                <span className="text-[12px] text-black/25 tracking-[0.2em] uppercase py-3">Pelajari Lebih Lanjut →</span>
              </div>
            </div>
          </motion.div>

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

      </div>
    </section>
  )
}
