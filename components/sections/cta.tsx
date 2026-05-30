"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end end"] })
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.6, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1])
  const borderRadius = useTransform(scrollYProgress, [0, 0.6], ["3rem", "0rem"])
  const y = useTransform(scrollYProgress, [0, 0.6], [100, 0])

  return (
    <motion.section ref={sectionRef} style={{ scale, opacity, borderRadius, y }} className="relative min-h-[70vh] w-full overflow-hidden bg-[#0a0a0a] py-32 px-6 flex items-center justify-center origin-bottom">
      <div className="absolute inset-4 sm:inset-8 md:inset-12 z-10 pointer-events-none">
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"/>
        <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"/>
        <div className="absolute left-0 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent"/>
        <div className="absolute right-0 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent"/>
        {["top-0 left-0","top-0 right-0","bottom-0 left-0","bottom-0 right-0"].map((pos)=><div key={pos} className={"absolute "+pos+" w-2 h-2 rounded-full bg-cyan-400/30"}/>)}
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/[0.04] rounded-full blur-[120px] pointer-events-none"/>
      <div className="relative z-20 text-center max-w-3xl mx-auto">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.8,ease:[0.16,1,0.3,1]}} viewport={{once:true,margin:"-100px"}} className="mb-8 flex items-center justify-center gap-3">
          <div className="w-8 h-px bg-cyan-400/50"/><span className="text-[11px] text-white/30 tracking-[0.3em] uppercase font-light">Mulai Sekarang</span><div className="w-8 h-px bg-cyan-400/50"/>
        </motion.div>
        <motion.h2 initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:1,delay:0.2,ease:[0.16,1,0.3,1]}} viewport={{once:true,margin:"-100px"}} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white/90 tracking-tight leading-tight mb-8">
          Siap Upgrade<br/><span className="bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent">Akun TikTok Lo?</span>
        </motion.h2>
        <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.8,delay:0.4,ease:[0.16,1,0.3,1]}} viewport={{once:true,margin:"-100px"}} className="text-sm sm:text-base text-white/30 font-light leading-relaxed max-w-xl mx-auto mb-12">
          Gratis analisa akun pertama. Gue bedah pake data, bukan asumsi.
        </motion.p>
<motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.8,delay:0.6,ease:[0.16,1,0.3,1]}} viewport={{once:true,margin:"-100px"}} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="group relative rounded-full bg-white text-black px-8 py-4 text-[13px] font-medium tracking-[0.2em] uppercase transition-all duration-500 hover:bg-white/90"><span className="relative z-10">Gabung Sekarang</span></a>
          <a href="#" className="text-[13px] text-white/25 hover:text-white/50 tracking-[0.2em] uppercase font-light transition-colors duration-300">Pelajari Lebih Lanjut →</a>
        </motion.div>
      </div>
    </motion.section>
  )
}
