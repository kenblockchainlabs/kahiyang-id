"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Wave } from "@/components/ui/wave"

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const waveY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">

      <motion.div style={{ y: waveY, scale }} className="absolute inset-0 z-0 flex items-center justify-center">
        <Wave speed={0.5} tiles={1.2} width={1920} height={1080} />
      </motion.div>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-transparent to-black/90 pointer-events-none" />

      <motion.div style={{ y: textY, opacity }} className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl mx-auto w-full">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent leading-tight"
        >
          Negeri Kahiyang
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mt-6 text-base sm:text-lg md:text-xl text-white/70 max-w-2xl font-light tracking-wide"
        >
          Mulai, Tumbuh, dan Berkembang &mdash; Tanpa Batas.
        </motion.p>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/40 text-xs tracking-widest uppercase flex flex-col items-center gap-2"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>

    </section>
  )
}
