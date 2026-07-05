"use client"

import { motion } from "framer-motion"

const services = [
  { num: "01", title: "Agency", desc: "Full-service TikTok agency — dari strategi sampai eksekusi. Kelola kreator, optimasi iklan, scale revenue.", tag: "Coming Soon", coming: true, href: "https://kahiyang-agency.vercel.app", preview: "/preview/agency.png" },
  { num: "02", title: "Kahiyang Visual", desc: "Upload foto produk, dapatkan visual profesional siap jual. Foto produk, poster promo, banner iklan — semua dari 1 foto.", tag: "Visual", href: "https://kahiyang-visual.vercel.app", preview: "/preview/visual.jpg" },
  { num: "03", title: "Viral Analyzer", desc: "Bedah akun lo kayak forensik — kenapa stuck, hook mana yang lemah, kapan waktu posting terbaik. Bukan tebak-tebakan, tapi data dari 500+ akun yang udah dipecahkan.", tag: "AI", href: "https://kahiyang-visual.vercel.app/analyzer", preview: "/preview/analyzer.jpg" },
  { num: "04", title: "Kelas Affiliate", desc: "Dari nol sampai pecah telur. Basic Rp 199K (Zoom + Ebook) atau Pro Rp 1Jt (Private Grup + Live Session).", tag: "Education", href: "https://edu.kahiyang.id" },
]

export default function Layanan() {
  return (
    <section id="layanan" className="relative w-full bg-[#f5f0e8] py-28 px-6">
      <div className="absolute z-10 pointer-events-none" style={{ top: "3vh", bottom: "3vh", left: "3vw", right: "3vw" }}>
        <div className="absolute top-0 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-black/[0.06] to-transparent" />
        <div className="absolute bottom-0 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-black/[0.06] to-transparent" />
        <div className="absolute left-0 top-[8%] bottom-[8%] w-px bg-gradient-to-b from-transparent via-black/[0.06] to-transparent" />
        <div className="absolute right-0 top-[8%] bottom-[8%] w-px bg-gradient-to-b from-transparent via-black/[0.06] to-transparent" />
        {["top-0 left-0","top-0 right-0","bottom-0 left-0","bottom-0 right-0"].map((pos)=><div key={pos} className={"absolute "+pos+" w-2 h-2 rounded-full bg-lime-400/40"}/>)}
      </div>

      <div className="relative z-20 max-w-6xl mx-auto">
        <motion.div initial={{opacity:0,y:50,scale:0.95}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:1.2,ease:[0.16,1,0.3,1]}} viewport={{once:true,margin:"-80px"}} className="mb-20">
          <div className="flex items-center gap-3 mb-6"><div className="w-8 h-px bg-lime-400/60"/><span className="text-[11px] text-black/30 tracking-[0.3em] uppercase font-light">Layanan</span></div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-black/90 tracking-tight">Eksplor Layanan<br/><span className="text-black/20">Kami</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((s,i)=>(
            <motion.div key={s.num} initial={{opacity:0,y:60,scale:0.9}} whileInView={{opacity:1,y:0,scale:1}} transition={{duration:0.8,delay:i*0.15,ease:[0.16,1,0.3,1]}} viewport={{once:true,margin:"-50px"}} className="group relative p-8 rounded-2xl bg-white/60 border border-black/[0.06] hover:border-lime-400/20 transition-all duration-500 overflow-hidden backdrop-blur-sm">
              {/* Motion blur blob — gerak gak beraturan */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                  className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    width: "60%",
                    height: "60%",
                    top: "20%",
                    left: "20%",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(0,200,220,0.12) 0%, rgba(0,200,220,0.05) 40%, transparent 70%)",
                    filter: "blur(40px)",
                    animation: "motionBlurA 8s ease-in-out infinite",
                    animationDelay: `${i * 0.8}s`,
                  }}
                />
                <div
                  className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    width: "45%",
                    height: "45%",
top: "30%",
                    left: "35%",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(0,255,212,0.1) 0%, rgba(0,200,220,0.03) 50%, transparent 70%)",
                    filter: "blur(30px)",
                    animation: "motionBlurB 9s ease-in-out infinite",
                    animationDelay: `${i * 1.2}s`,
                  }}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-lime-400/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] text-black/20 tracking-[0.3em] uppercase font-light">{s.num}</span>
                  <span className="text-[10px] text-lime-600/60 tracking-[0.2em] uppercase font-light px-3 py-1 rounded-full border border-lime-400/20">{s.tag}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-light text-black/80 mb-4 tracking-tight">{s.title}</h3>
                {s.preview && (
                  <div className="mb-4 rounded-xl overflow-hidden border border-black/[0.06] h-40 sm:h-48 relative">
                    <img
                      src={s.preview}
                      alt={s.title}
                      className="w-full"
                      style={{
                        height: "250%",
                        objectFit: "cover",
                        objectPosition: "top",
                        animation: "autoScroll 12s ease-in-out infinite alternate",
                      }}
                      loading="lazy"
                    />
                  </div>
                )}
                <p className="text-sm text-black/40 font-light leading-relaxed">{s.desc}</p>
                {s.href ? (
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-[12px] text-lime-600 hover:text-lime-500 transition-colors">
                    <span className="tracking-[0.15em] uppercase animate-beep">Selengkapnya</span><span className="animate-beep">→</span>
                  </a>
                ) : (
                  <div className="mt-6 flex items-center gap-2 text-[12px] text-black/20 group-hover:text-black/50 transition-colors duration-300">
                    <span className="tracking-[0.15em] uppercase">Pelajari</span><span>→</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
