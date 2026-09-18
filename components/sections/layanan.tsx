"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const SERVICES = [
  {
    id: "agency",
    num: "01",
    code: "AGY-EXP",
    title: "Kahiyang Agency",
    tagline: "TALENT & BRAND ACCELERATOR",
    desc: "Manajemen kreator TikTok Shop skala nasional. Formulasi hook retensi, optimasi profiling, dan direct connection ke brand tier-1 dengan sistem split transparan.",
    href: "https://agency.kahiyang.id",
    metrics: [
      { label: "CREATORS", val: "500+" },
      { label: "SPLIT RATIO", val: "70 / 30" },
      { label: "PIPELINE", val: "Direct Brand" }
    ],
    highlight: "COMMISSION ENGINE",
    isAccent: true
  },
  {
    id: "studio",
    num: "02",
    code: "STU-GEN",
    title: "Kahiyang Studio",
    tagline: "AI VISUAL & PRODUCT RENDERING",
    desc: "Laboratorium visual generatif. Memproduksi staging produk fotorealistis 4K, video transisi 3D katalog, dan scene dinamis tanpa biaya sewa studio fisik.",
    href: "https://studio.kahiyang.id",
    metrics: [
      { label: "OUTPUT", val: "4K UHD" },
      { label: "STAGING COST", val: "Zero Studio" },
      { label: "CYCLE TIME", val: "< 24 Jam" }
    ],
    highlight: "SYNTHETIC MEDIA",
    isAccent: false
  },
  {
    id: "analyzer",
    num: "03",
    code: "ANL-VIR",
    title: "Viral Analyzer",
    tagline: "ALGORITHMIC AUDIT & METRICS",
    desc: "SaaS analitik akun TikTok. Membedah kurva retensi 3 detik pertama, indeks kesehatan profil, deteksi audio trending harian, dan audit kompetitor.",
    href: "https://analyzer.kahiyang.id",
    metrics: [
      { label: "CONFIDENCE", val: "98.4%" },
      { label: "AUDIT SCOPE", val: "Real-time" },
      { label: "INDEX", val: "FYP Potential" }
    ],
    highlight: "NEURAL SCORING",
    isAccent: false
  },
  {
    id: "affiliate",
    num: "04",
    code: "AFF-CLS",
    title: "Affiliate Syndicate",
    tagline: "INTENSIVE MENTORSHIP & BLUEPRINT",
    desc: "Inkubasi taktis affiliate TikTok Shop berbasis data. Playbook operasional akun ternak, optimasi live streaming tanpa modal besar, dan bypass batas algoritma.",
    href: "#komunitas",
    metrics: [
      { label: "COMMUNITY", val: "1,200+ Member" },
      { label: "PLATFORM", val: "Private Vault" },
      { label: "TACTIC", val: "Zero-Capital" }
    ],
    highlight: "WAR ROOM",
    isAccent: true
  },
  {
    id: "web-dev",
    num: "05",
    code: "ENG-AWW",
    title: "Cinematic Web Engineering",
    tagline: "HIGH-END AWWWARDS-GRADE ARCHITECTURE",
    desc: "Pembangunan web interaktif kelas dunia. Next.js App Router, Lenis Smooth Scroll, transisi kinetik Obys, dan performa 100/100 Lighthouse.",
    href: "https://t.me/kahiyang_partnership",
    metrics: [
      { label: "PERFORMANCE", val: "100/100" },
      { label: "KINETIC ENGINE", val: "Custom RAF" },
      { label: "FRAMEWORK", val: "Next.js + Lenis" }
    ],
    highlight: "EDITORIAL BRUTALISM",
    isFull: true,
    isAccent: false
  }
]

export default function Layanan() {
  return (
    <section className="w-full text-[#222222] py-20 font-sans select-none">
      
      {/* Editorial Section Header */}
      <div className="flex flex-wrap justify-between items-end pb-6 border-b border-white/20 mb-10 text-white">
        <div>
          <span className="text-xs font-mono text-[#d25933] uppercase tracking-[0.2em] block mb-2 font-bold">
            [ SECTION 02 &bull; DEPLOYED CAPABILITIES ]
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase">
            Ecosystem Matrix.
          </h2>
        </div>
        <div className="text-right font-mono text-xs text-white/60">
          <span>05 REGISTERED SPECIMENS</span>
        </div>
      </div>

      {/* Grid of Specimen Cards with Real Obys Textures */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {SERVICES.map((item) => {
          const colSpan = item.isFull ? "lg:col-span-12" : "lg:col-span-6"
          const bgTexture = item.isAccent 
            ? 'url("/textures/binder-orange.avif")' 
            : 'url("/textures/paper-white.webp")'
          const bgColor = item.isAccent ? "#d25933" : "#f5f5f5"
          const textColor = item.isAccent ? "text-white" : "text-[#222222]"

          return (
            <div
              key={item.id}
              className={`${colSpan} group shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-transform duration-200 hover:-translate-y-1`}
            >
              <div 
                className={`p-8 flex flex-col justify-between h-full border border-black/20 ${textColor}`}
                style={{
                  backgroundColor: bgColor,
                  backgroundImage: bgTexture,
                  backgroundSize: "cover"
                }}
              >
                <div>
                  <div className="flex justify-between items-start font-mono text-xs pb-4 border-b border-current/20 mb-6">
                    <span className="font-bold">NO. {item.num}</span>
                    <span className="tracking-widest text-[11px] opacity-80">{item.highlight}</span>
                    <span className="opacity-60">{item.code}</span>
                  </div>

                  <span className="text-[11px] font-mono tracking-widest uppercase block mb-1 opacity-75">
                    {item.tagline}
                  </span>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm font-normal leading-relaxed mb-6 opacity-90">
                    {item.desc}
                  </p>
                </div>

                <div>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-current/20 font-mono text-xs">
                    {item.metrics.map((m, idx) => (
                      <div key={idx}>
                        <span className="block text-[10px] uppercase opacity-70">{m.label}</span>
                        <span className="font-bold">{m.val}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex justify-between items-center pt-4 border-t border-current/20">
                    <span className="text-xs font-mono opacity-80">
                      [ ACCESS SPECIMEN ]
                    </span>
                    <Link
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      className={`inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 border transition-all ${
                        item.isAccent 
                          ? "border-white bg-white text-black hover:bg-black hover:text-white hover:border-black" 
                          : "border-black bg-black text-white hover:bg-white hover:text-black"
                      }`}
                    >
                      EXPLORE <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

    </section>
  )
}
