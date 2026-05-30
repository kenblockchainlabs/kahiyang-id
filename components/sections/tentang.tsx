"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Tentang() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end end"] })
  const scale = useTransform(scrollYProgress, [0, 0.6], [0.6, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1])
  const borderRadius = useTransform(scrollYProgress, [0, 0.6], ["3rem", "0rem"])
  const y = useTransform(scrollYProgress, [0, 0.6], [100, 0])

  return (
    <motion.section ref={sectionRef} id="tentang" style={{ scale, opacity, borderRadius, y }} className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0a] py-32 px-6 flex items-center origin-bottom">
      <div className="absolute inset-4 sm:inset-8 md:inset-12 z-10 pointer-events-none">
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"/>
        <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"/>
        <div className="absolute left-0 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent"/>
        <div className="absolute right-0 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent"/>
        {["top-0 left-0","top-0 right-0","bottom-0 left-0","bottom-0 right-0"].map((pos)=><div key={pos} className={"absolute "+pos+" w-2 h-2 rounded-full bg-cyan-400/30"}/>)}
      </div>
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.8,ease:[0.16,1,0.3,1]}} viewport={{once:true,margin:"-100px"}} className="mb-12 flex items-center justify-center gap-3">
          <div className="w-8 h-px bg-cyan-400/50"/><span className="text-[11px] text-white/30 tracking-[0.3em] uppercase font-light">Tentang Kami</span><div className="w-8 h-px bg-cyan-400/50"/>
        </motion.div>
        <motion.h2 initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:1,delay:0.2,ease:[0.16,1,0.3,1]}} viewport={{once:true,margin:"-100px"}} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white/90 tracking-tight leading-tight mb-10">
          Negeri Kahiyang adalah tempat untuk siapa saja yang siap <span className="bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent">berkembang</span>
        </motion.h2>
        <motion.p initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.8,delay:0.4,ease:[0.16,1,0.3,1]}} viewport={{once:true,margin:"-100px"}} className="text-base sm:text-lg text-white/30 font-light leading-relaxed max-w-2xl mx-auto mb-16">
          Tumbuh bersama, eksplor versi terbaik dirimu, dan berkembang tanpa batas dalam ekosistem digital yang mendukung setiap langkahmu.
        </motion.p>
        <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{duration:0.8,delay:0.6,ease:[0.16,1,0.3,1]}} viewport={{once:true,margin:"-100px"}} className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
{[{val:"500+",label:"Akun Dianalisa"},{val:"50+",label:"Murid Aktif"},{val:"24/7",label:"AI Agent"}].map((s)=><div key={s.label} className="text-center"><div className="text-2xl sm:text-3xl font-light text-white/80 mb-1">{s.val}</div><div className="text-[10px] text-white/20 tracking-[0.2em] uppercase">{s.label}</div></div>)}
        </motion.div>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.8,delay:0.8}} viewport={{once:true,margin:"-100px"}} className="mt-20 flex items-center justify-center gap-2 text-[11px] text-white/15 tracking-[0.2em] uppercase">
          <span>Powered by</span><a href="https://binarpagi.co.id" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/50 transition-colors underline underline-offset-4">binarpagi.co.id</a>
        </motion.div>
      </div>
    </motion.section>
  )
}
