"use client"

import { motion } from "framer-motion"
import { Wave } from "@/components/ui/wave"

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">

      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Wave speed={0.5} tiles={1.2} width={1920} height={1080} />
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl mx-auto w-full">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent leading-tight"
        >
          Negeri Kahiyang
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-white/70 max-w-2xl font-light tracking-wide"
        >
          Mulai, Tumbuh, dan Berkembang &mdash; Tanpa Batas.
        </motion.p>

      </div>
    </section>
  )
}
