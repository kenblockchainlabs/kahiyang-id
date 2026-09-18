"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, CheckCircle2, TrendingUp, Users, Video, Flame, Sparkles } from "lucide-react"

const SERVICES = [
  {
    id: "agency",
    num: "01",
    code: "AGY-EXP",
    title: "Kahiyang Agency",
    tagline: "TALENT & BRAND ACCELERATOR",
    desc: "Manajemen kreator TikTok Shop skala nasional. Mulai dari formulasi hook retensi, optimasi profiling, hingga direct connection ke brand tier-1 dengan sistem komisi transparan.",
    href: "https://agency.kahiyang.id",
    metrics: [
      { label: "CREATORS", val: "500+" },
      { label: "SPLIT RATIO", val: "70 / 30" },
      { label: "PIPELINE", val: "Direct Brand" }
    ],
    highlight: "COMMISSION ENGINE"
  },
  {
    id: "studio",
    num: "02",
    code: "STU-GEN",
    title: "Kahiyang Studio",
    tagline: "AI VISUAL & PRODUCT RENDERING",
    desc: "Laboratorium visual berbasis generative synthetic media. Memproduksi staging produk fotorealistis 4K, video transisi katalog 3D, dan scene dinamis tanpa biaya sewa studio fisik.",
    href: "https://studio.kahiyang.id",
    metrics: [
      { label: "OUTPUT", val: "4K UHD" },
      { label: "STAGING COST", val: "Zero Studio" },
      { label: "CYCLE TIME", val: "< 24 Jam" }
    ],
    highlight: "SYNTHETIC MEDIA"
  },
  {
    id: "analyzer",
    num: "03",
    code: "ANL-VIR",
    title: "Viral Analyzer",
    tagline: "ALGORITHMIC AUDIT & METRICS",
    desc: "SaaS analitik akun TikTok. Membedah kurva retensi 3 detik pertama, indeks kesehatan profil, deteksi audio trending harian, serta perbandingan metrik kompetitor secara presisi.",
    href: "https://analyzer.kahiyang.id",
    metrics: [
      { label: "CONFIDENCE", val: "98.4%" },
      { label: "AUDIT SCOPE", val: "Real-time" },
      { label: "INDEX", val: "FYP Potential" }
    ],
    highlight: "NEURAL SCORING"
  },
  {
    id: "affiliate",
    num: "04",
    code: "AFF-CLS",
    title: "Affiliate Syndicate",
    tagline: "INTENSIVE MENTORSHIP & BLUEPRINT",
    desc: "Inkubasi taktis affiliate TikTok Shop berbasis data. Playbook operasional akun ternak, optimasi live streaming tanpa modal besar, dan panduan bypass pembatasan algoritma.",
    href: "#komunitas",
    metrics: [
      { label: "COMMUNITY", val: "1,200+ Member" },
      { label: "PLATFORM", val: "Private Vault" },
      { label: "TACTIC", val: "Zero-Capital" }
    ],
    highlight: "WAR ROOM"
  },
  {
    id: "web-dev",
    num: "05",
    code: "ENG-AWW",
    title: "Cinematic Web Engineering",
    tagline: "HIGH-END AWWWARDS-GRADE ARCHITECTURE",
    desc: "Pembangunan web interaktif kelas dunia. Memadukan Next.js App Router, Lenis Smooth Scroll, transisi kinetik Obys, dan performa 100/100 Lighthouse untuk brand yang menolak tampil biasa.",
    href: "https://t.me/kahiyang_partnership",
    metrics: [
      { label: "PERFORMANCE", val: "100/100" },
      { label: "KINETIC ENGINE", val: "Custom RAF" },
      { label: "FRAMEWORK", val: "Next.js + Lenis" }
    ],
    highlight: "EDITORIAL BRUTALISM",
    isFull: true
  }
]

export default function Layanan() {
  const [activeTab, setActiveTab] = useState(SERVICES[0].id)
  const activeService = SERVICES.find(s => s.id === activeTab) || SERVICES[0]

  return (
    <section className="w-full bg-[#0e0e0e] text-[#f4f4f4] py-20 border-b border-[#222222] font-sans select-none">
      
      {/* Header Section */}
      <div className="flex flex-wrap justify-between items-end pb-8 border-b border-[#222222] mb-12">
        <div>
          <span className="text-xs font-mono text-[#777777] uppercase tracking-[0.2em] block mb-3">
            [ SECTION 02 &bull; DEPLOYED CAPABILITIES ]
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            Ecosystem Matrix.
          </h2>
        </div>
        <div className="text-right font-mono text-xs text-[#666666]">
          <span>INDEX (05 DISCIPLINES)</span>
        </div>
      </div>

      {/* Grid of Specimen Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {SERVICES.map((item) => {
          const isSelected = activeTab === item.id
          const colSpan = item.isFull ? "lg:col-span-12" : "lg:col-span-6"

          return (
            <div
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`${colSpan} group cursor-pointer transition-all duration-300`}
            >
              <div className={`p-8 border bg-[#141414] flex flex-col justify-between h-full transition-all duration-300 ${
                isSelected 
                  ? "border-white bg-[#1a1a1a]" 
                  : "border-[#222222] hover:border-[#555555]"
              }`}>
                <div>
                  <div className="flex justify-between items-start font-mono text-xs pb-4 border-b border-[#222222] mb-6">
                    <span className={isSelected ? "text-white font-bold" : "text-[#777777]"}>
                      NO. {item.num}
                    </span>
                    <span className="text-[#888888] tracking-widest">{item.highlight}</span>
                    <span className="text-[#555555]">{item.code}</span>
                  </div>

                  <span className="text-[11px] font-mono tracking-widest text-[#888888] uppercase block mb-1">
                    {item.tagline}
                  </span>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-4 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#aaaaaa] font-light leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#222222] font-mono text-xs">
                    {item.metrics.map((m, idx) => (
                      <div key={idx}>
                        <span className="text-[#666666] block text-[10px] uppercase">{m.label}</span>
                        <span className="text-white font-medium">{m.val}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex justify-between items-center pt-4 border-t border-[#222222]">
                    <span className="text-xs font-mono text-[#777777] group-hover:text-white transition-colors">
                      [ ACCESS MODULE ]
                    </span>
                    <Link
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      className="inline-flex items-center gap-2 text-xs font-mono text-white border border-[#333333] px-3 py-1.5 hover:bg-white hover:text-black transition-all"
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
