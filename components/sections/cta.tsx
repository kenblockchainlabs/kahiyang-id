"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function CTA() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })

  const scale = useTransform(scrollYProgress, [0, 0.15, 0.5, 1], [0.88, 1, 1, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.5, 1], [0, 1, 1, 1])
  const y = useTransform(scrollYProgress, [0, 0.15, 0.5, 1], [60, 0, 0, 0])
  const borderRadius = useTransform(scrollYProgress, [0, 0.15, 1], [32, 0, 0])

  return (
    <section ref={ref} className="relative w-full bg-[#f5f0e8]">
      <motion.div style={{ scale, opacity, y, borderRadius }} className="relative min-h-[80vh] py-32 px-6 flex items-center justify-center bg-[#f5f0e8] origin-top overflow-hidden">
        <div className="absolute z-10 pointer-events-none" style={{ top: "3vh", bottom: "3vh", left: "3vw", right: "3vw" }}>
          <div className="absolute top-0 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-black/[0.06] to-transparent"/>
          <div className="absolute bottom-0 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-black/[0.06] to-transparent"/>
          <div className="absolute left-0 top-[8%] bottom-[8%] w-px bg-gradient-to-b from-transparent via-black/[0.06] to-transparent"/>
          <div className="absolute right-0 top-[8%] bottom-[8%] w-px bg-gradient-to-b from-transparent via-black/[0.06] to-transparent"/>
          {["top-0 left-0","top-0 right-0","bottom-0 left-0","bottom-0 right-0"].map((pos)=><div key={pos} className={"absolute "+pos+" w-2 h-2 rounded-full bg-cyan-500/40"}/>)}
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/[0.06] rounded-full blur-[120px] pointer-events-none"/>

        <div className="relative z-20 text-center max-w-3xl mx-auto">
          <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:1,ease:[0.16,1,0.3,1]}} viewport={{once:true,margin:"-100px"}} className="mb-8 flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-cyan-500/60"/><span className="text-[11px] text-black/30 tracking-[0.3em] uppercase font-light">Mulai Sekarang</span><div className="w-8 h-px bg-cyan-500/60"/>
          </motion.div>
          <motion.h2 initial={{opacity:0,y:50,scale:0.95}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:1.2,delay:0.2,ease:[0.16,1,0.3,1]}} viewport={{once:true,margin:"-100px"}} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-black/90 tracking-tight leading-tight mb-8">
            Siap Upgrade<br/><span className="bg-gradient-to-r from-cyan-700 to-cyan-500 bg-clip-text text-transparent">Akun TikTok Lo?</span>
          </motion.h2>
          <motion.p initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.8,delay:0.4,ease:[0.16,1,0.3,1]}} viewport={{once:true,margin:"-100px"}} className="text-sm sm:text-base text-black/40 font-light leading-relaxed max-w-xl mx-auto mb-12">
            Gratis analisa akun pertama. Gue bedah pake data, bukan asumsi.
          </motion.p>
<motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.8,delay:0.6,ease:[0.16,1,0.3,1]}} viewport={{once:true,margin:"-100px"}} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="group relative rounded-full bg-black text-white px-8 py-4 text-[13px] font-medium tracking-[0.2em] uppercase transition-all duration-500 hover:bg-black/80"><span className="relative z-10">Gabung Sekarang</span></a>
            <a href="#" className="text-[13px] text-black/25 hover:text-black/50 tracking-[0.2em] uppercase font-light transition-colors duration-300">Pelajari Lebih Lanjut →</a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
