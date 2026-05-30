"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Tentang() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.5, 0.85, 1], [0.88, 1, 1, 1, 0.92])
  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.5, 0.88, 1], [0, 1, 1, 1, 0.5])
  const y = useTransform(scrollYProgress, [0, 0.15, 0.5, 0.85, 1], [60, 0, 0, 0, -40])
  const borderRadius = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [32, 0, 0, 24])

  return (
    <section id="tentang" ref={ref} className="relative w-full bg-[#f5f0e8]">
      <motion.div style={{ scale, opacity, y, borderRadius }} className="relative py-32 px-6 flex items-center min-h-screen bg-[#f5f0e8] origin-top overflow-hidden">
        <div className="absolute z-10 pointer-events-none" style={{ top: "3vh", bottom: "3vh", left: "3vw", right: "3vw" }}>
          <div className="absolute top-0 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-black/[0.06] to-transparent"/>
          <div className="absolute bottom-0 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-black/[0.06] to-transparent"/>
          <div className="absolute left-0 top-[8%] bottom-[8%] w-px bg-gradient-to-b from-transparent via-black/[0.06] to-transparent"/>
          <div className="absolute right-0 top-[8%] bottom-[8%] w-px bg-gradient-to-b from-transparent via-black/[0.06] to-transparent"/>
          {["top-0 left-0","top-0 right-0","bottom-0 left-0","bottom-0 right-0"].map((pos)=><div key={pos} className={"absolute "+pos+" w-2 h-2 rounded-full bg-cyan-500/40"}/>)}
        </div>
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:1,ease:[0.16,1,0.3,1]}} viewport={{once:true,margin:"-100px"}} className="mb-12 flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-cyan-500/60"/><span className="text-[11px] text-black/30 tracking-[0.3em] uppercase font-light">Tentang Kami</span><div className="w-8 h-px bg-cyan-500/60"/>
          </motion.div>
          <motion.h2 initial={{opacity:0,y:50,scale:0.95}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:1.2,delay:0.2,ease:[0.16,1,0.3,1]}} viewport={{once:true,margin:"-100px"}} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black/90 tracking-tight leading-tight mb-10">
            Negeri Kahiyang adalah tempat untuk siapa saja yang siap <span className="bg-gradient-to-r from-cyan-700 to-cyan-500 bg-clip-text text-transparent">berkembang</span>
          </motion.h2>
          <motion.p initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:0.8,delay:0.4,ease:[0.16,1,0.3,1]}} viewport={{once:true,margin:"-100px"}} className="text-base sm:text-lg text-black/40 font-light leading-relaxed max-w-2xl mx-auto mb-16">
            Tumbuh bersama, eksplor versi terbaik dirimu, dan berkembang tanpa batas dalam ekosistem digital yang mendukung setiap langkahmu.
          </motion.p>
          <motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:0.8,delay:0.6,ease:[0.16,1,0.3,1]}} viewport={{once:true,margin:"-100px"}} className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[{val:"500+",label:"Akun Dianalisa"},{val:"50+",label:"Murid Aktif"},{val:"24/7",label:"AI Agent"}].map((s,i)=>(
              <motion.div key={s.label} initial={{opacity:0,y:30,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:0.6,delay:0.8+i*0.15,ease:[0.16,1,0.3,1]}} viewport={{once:true}} className="text-center">
                <div className="text-2xl sm:text-3xl font-light text-black/80 mb-1">{s.val}</div>
<div className="text-[10px] text-black/25 tracking-[0.2em] uppercase">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.8,delay:0.8}} viewport={{once:true,margin:"-100px"}} className="mt-20 flex items-center justify-center gap-2 text-[11px] text-black/20 tracking-[0.2em] uppercase">
            <span>Powered by</span><a href="https://binarpagi.co.id" target="_blank" rel="noopener noreferrer" className="text-black/40 hover:text-black/60 transition-colors underline underline-offset-4">binarpagi.co.id</a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
