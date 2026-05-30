"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const services = [
  { num: "01", title: "Forensic Analysis", desc: "Bedah akun TikTok lo pakai data real — hook pattern, engagement rate, ad spend ratio, winning content formula.", tag: "Core" },
  { num: "02", title: "Kelas Affiliate", desc: "Dari nol sampai pecah telur. Basic Rp 199K (Zoom + Ebook) atau Pro Rp 1Jt (Private Grup + Live Session).", tag: "Education" },
  { num: "03", title: "Konsultasi", desc: "Case-by-case deep dive untuk akun yang stuck, strategy pivot, atau market share analysis.", tag: "Premium" },
  { num: "04", title: "AI Agent", desc: "Instalasi Hermes AI Agent untuk kebutuhan instansi, lembaga, dan personal — automation tanpa batas.", tag: "Enterprise" },
]

export default function Layanan() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"])

  return (
    <section id="layanan" ref={ref} className="relative w-full bg-[#0a0a0a] overflow-hidden">
      {/* BRIDGE: fade-in dari hero zoom */}
      <div className="relative h-[40vh] bg-gradient-to-b from-[#0a0a0a] to-[#0a0a0a]">
        <motion.div style={{ y: bgY }} className="absolute inset-0 flex items-center justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true, margin: "-100px" }} className="w-px h-32 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative py-20 px-6">
        <div className="absolute inset-4 sm:inset-8 md:inset-12 z-10 pointer-events-none">
          <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
          <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
          <div className="absolute left-0 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />
          <div className="absolute right-0 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />
          {["top-0 left-0","top-0 right-0","bottom-0 left-0","bottom-0 right-0"].map((pos)=><div key={pos} className={"absolute "+pos+" w-2 h-2 rounded-full bg-cyan-400/30"}/>)}
        </div>

        <div className="relative z-20 max-w-6xl mx-auto">
          <motion.div initial={{opacity:0,y:60,scale:0.95}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:1.2,ease:[0.16,1,0.3,1]}} viewport={{once:true,margin:"-100px"}} className="mb-20">
            <div className="flex items-center gap-3 mb-6"><div className="w-8 h-px bg-cyan-400/50"/><span className="text-[11px] text-white/30 tracking-[0.3em] uppercase font-light">Layanan</span></div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white/90 tracking-tight">Eksplor Layanan<br/><span className="text-white/30">Kami</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((s,i)=>(
              <motion.div key={s.num} initial={{opacity:0,y:60,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:0.8,delay:i*0.15,ease:[0.16,1,0.3,1]}} viewport={{once:true,margin:"-50px"}} className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] text-white/20 tracking-[0.3em] uppercase font-light">{s.num}</span>
                    <span className="text-[10px] text-cyan-400/50 tracking-[0.2em] uppercase font-light px-3 py-1 rounded-full border border-cyan-400/10">{s.tag}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-light text-white/80 mb-4 tracking-tight">{s.title}</h3>
                  <p className="text-sm text-white/30 font-light leading-relaxed">{s.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-[12px] text-white/20 group-hover:text-white/50 transition-colors duration-300"><span className="tracking-[0.15em] uppercase">Pelajari</span><span>→</span></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* BRIDGE: morph ke Tentang */}
      <div className="relative h-[30vh] bg-[#0a0a0a] overflow-hidden">
<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} viewport={{ once: true }} className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/10" />
            <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="w-2 h-2 rounded-full bg-cyan-400/40" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/10" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
