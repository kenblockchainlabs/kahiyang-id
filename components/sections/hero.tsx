"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Wave } from "@/components/ui/wave"

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })

  // Neon — zoom 10x DALAM, lorong
  const waveScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 4, 10])
  const waveOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.9, 0.6])

  // Text — hilang awal
  const textScale = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1.3, 2])
  const textOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 0.5, 0])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"])

  // Frame — hilang awal
  const frameScale = useTransform(scrollYProgress, [0, 1], [1, 2])
  const frameOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 0.3, 0])

  // Vignette lorong — makin gelap di pinggir
  const vignetteOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 0.85], [0, 0.3, 0.7, 1])

  // BURN — BARU MUNCUL DI AKHIR (75-100%), pelan
  const burnScale = useTransform(scrollYProgress, [0, 0.75, 0.82, 0.9, 0.96, 1], [0, 0, 0.02, 0.12, 0.5, 4])
  const burnOpacity = useTransform(scrollYProgress, [0, 0.75, 0.82], [0, 0, 1])

  // Hero fade — hitam hilang pas burn buka
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0])

  const corners = ["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"]

  return (
    <section ref={ref} className="relative w-full" style={{ height: "700vh" }}>
      <motion.div style={{ opacity: heroOpacity }} className="sticky top-0 h-screen w-full overflow-hidden">

        {/* === CLEAN hitam + neon — bersih, gak ada efek lain === */}
        <div className="absolute inset-0 z-10 bg-[#0a0a0a]">
          {/* Neon — zoom 10x lorong */}
          <motion.div style={{ scale: waveScale, opacity: waveOpacity }} className="absolute inset-0 flex items-center justify-center origin-center">
            <Wave speed={0.5} tiles={1.2} width={1920} height={1080} />
          </motion.div>

          {/* Vignette lorong */}
          <motion.div style={{ opacity: vignetteOpacity }} className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0" style={{
              background: "radial-gradient(ellipse at center, transparent 10%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,1) 100%)"
            }} />
          </motion.div>
        </div>

        {/* === BURN — BARU MUNCUL DI AKHIR, sections keliatan DI DALAM === */}
        <motion.div
          style={{ scale: burnScale, opacity: burnOpacity }}
          className="absolute inset-0 z-20 flex items-center justify-center origin-center pointer-events-none"
        >
          <div
            className="w-[50vmin] h-[50vmin]"
            style={{
              borderRadius: "40% 60% 55% 45% / 55% 45% 60% 40%",
              background: "radial-gradient(circle, #f5f0e8 0%, #f5f0e8 55%, #e8ddd0 65%, #d4c8b4 75%, #b8a890 85%, transparent 100%)",
              boxShadow: "0 0 100px 50px rgba(168,152,128,0.4), 0 0 200px 100px rgba(106,94,78,0.2)"
            }}
          />
        </motion.div>

        {/* === Frame === */}
        <motion.div style={{ scale: frameScale, opacity: frameOpacity }} className="absolute inset-6 sm:inset-10 md:inset-16 z-30 pointer-events-none">
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }} className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent origin-center" />
<motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }} className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent origin-center" />
          <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }} className="absolute left-0 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-white/[0.15] to-transparent origin-center" />
          <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }} className="absolute right-0 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-white/[0.15] to-transparent origin-center" />
          {corners.map((pos, i) => (
            <motion.div key={pos} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 1.3 + i * 0.1 }} className={"absolute " + pos + " w-2 h-2 rounded-full bg-cyan-400/50"} />
          ))}
        </motion.div>

        {/* === Text === */}
        <motion.div style={{ scale: textScale, opacity: textOpacity, y: textY }} className="absolute inset-0 z-40 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto w-full origin-center pointer-events-none">
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
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }} style={{ opacity: textOpacity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 text-white/20 text-[10px] tracking-[0.5em] uppercase flex flex-col items-center gap-3 font-light">
          <span>Scroll</span>
<motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>

      </motion.div>
    </section>
  )
}
