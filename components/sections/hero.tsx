"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, Component, type ReactNode, useState, useEffect } from "react"
import dynamic from "next/dynamic"

const Wave = dynamic(() => import("@/components/ui/wave").then(m => ({ default: m.Wave })), {
  ssr: false,
  loading: () => null,
})

class WaveErrorBoundary extends Component<{ children: ReactNode, hasError?: boolean }, { hasError: boolean }> {
  state = { hasError: false }
  static getDerivedStateFromError() { return { hasError: true } }
  render() {
    if (this.state.hasError) return null
    return this.props.children
  }
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })

  const waveScale = useTransform(scrollYProgress, [0, 1], [1, 3])
  const waveOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.5, 0])
  const textScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 4])
  const textOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [1, 0.8, 0])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])
  const frameScale = useTransform(scrollYProgress, [0, 1], [1, 3])
  const frameOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [1, 0.5, 0])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.2, 0])

  const corners = ["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"]

  return (
    <section ref={ref} className="relative h-[300vh] w-full bg-[#0a0a0a]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center" style={{ perspective: '1000px' }}>
        {/* Wave — desktop only (WebGL too heavy for mobile) */}
        {!isMobile && (
          <motion.div style={{ scale: waveScale, opacity: waveOpacity }} className="absolute inset-0 z-0 flex items-center justify-center">
            <WaveErrorBoundary>
              <Wave speed={0.5} tiles={1.2} width={1920} height={1080} />
            </WaveErrorBoundary>
          </motion.div>
        )}

        <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 z-10 bg-[#0a0a0a] pointer-events-none" />

        <motion.div style={{ scale: frameScale, opacity: frameOpacity }} className="absolute inset-6 sm:inset-10 md:inset-16 z-20 pointer-events-none">
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }} className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent origin-center" />
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, delay: 1.0, ease: [0.16, 1, 0.3, 1] }} className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent origin-center" />
          <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }} className="absolute left-0 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-white/[0.15] to-transparent origin-center" />
          <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }} className="absolute right-0 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-white/[0.15] to-transparent origin-center" />
          {corners.map((pos) => (
            <motion.div key={pos} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 1.4, ease: [0.16, 1, 0.3, 1] }} className={`absolute ${pos} w-2 h-2 rounded-full bg-cyan-500/40`} />
          ))}
        </motion.div>

        <motion.div style={{ scale: textScale, opacity: textOpacity, y: textY }} className="relative z-30 text-center px-6">
          <div className="inline-block mb-4">
            <span className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-white/30 font-light">Digital Ecosystem</span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-white tracking-tight leading-[0.9]">
            <span className="block">Negeri</span>
            <span className="block text-white/20">Kahiyang</span>
          </h1>
          <p className="mt-6 text-sm sm:text-base text-white/30 font-light tracking-wide max-w-md mx-auto">
            Mulai, Tumbuh, dan Berkembang — Tanpa Batas.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#layanan" className="px-8 py-3 bg-white text-black text-sm font-medium tracking-[0.15em] uppercase hover:bg-white/90 transition-colors">
              Eksplor
            </a>
            <a href="#tentang" className="text-[12px] text-white/40 tracking-[0.15em] uppercase hover:text-white/60 transition-colors">
              Tentang →
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/20 font-light">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
