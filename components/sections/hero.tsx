"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Wave } from "@/components/ui/wave"
import { RevealText } from "@/components/ui/reveal-text"

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">

      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Wave speed={0.5} tiles={1.2} width={1920} height={1080} />
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl mx-auto w-full">

        <RevealText text="NEGERI" textColor="text-white" overlayColor="text-cyan-400" fontSize="text-6xl md:text-8xl" letterDelay={0.08} overlayDelay={0.05} overlayDuration={0.4} springDuration={600} />
        <div className="mt-2">
          <RevealText text="KAHIYANG" textColor="text-white" overlayColor="text-cyan-400" fontSize="text-6xl md:text-8xl" letterDelay={0.08} overlayDelay={0.05} overlayDuration={0.4} springDuration={600} />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl"
        >
          Mulai, Tumbuh, dan Berkembang — Tanpa Batas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <button className="group bg-white text-black px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition-transform">
            Mulai Sekarang <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border border-white/30 bg-white/5 backdrop-blur text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
            Pelajari Lebih
          </button>
        </motion.div>

      </div>
    </section>
  )
}
