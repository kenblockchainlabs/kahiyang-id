"use client"

import { motion } from "framer-motion"
import AnimatedTextCycle from "@/components/ui/animated-text-cycle"

export default function Tentang() {
  return (
    <section id="tentang" className="relative bg-black py-24 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">

        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-8"
        >
          TENTANG KAMI
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl md:text-5xl font-light text-white/80 leading-tight max-w-4xl"
        >
          Negeri Kahiyang adalah tempat untuk siapa saja yang siap{" "}
          <AnimatedTextCycle words={["melangkah", "tumbuh", "berkembang", "berkarya", "tanpa batas"]} interval={2500} className="bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-transparent" />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 text-base md:text-lg text-white/60 max-w-2xl leading-relaxed"
        >
          Tumbuh bersama, eksplor versi terbaik dirimu, dan berkembang tanpa batas dalam ekosistem digital yang mendukung setiap langkahmu.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-sm text-white/40"
        >
          Powered by <a href="https://binarpagi.co.id" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">binarpagi.co.id</a>
        </motion.p>

      </div>
    </section>
  )
}
