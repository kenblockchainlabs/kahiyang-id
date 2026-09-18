"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { ArrowUpRight, X } from "lucide-react"

interface ProjectItem {
  id: string
  title: string
  client: string
  category: string
  aspectRatio: string
  widthClass: string
  image: string
  year: string
  metrics: { label: string; val: string }[]
  desc: string
  href: string
}

const PROJECTS: ProjectItem[] = [
  {
    id: "01",
    title: "TikTok Shop Stream Pipeline",
    client: "Kahiyang Automation",
    category: "Affiliate Recon & Dispatch",
    aspectRatio: "aspect-[1/1]",
    widthClass: "w-[260px] sm:w-[320px]",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85",
    year: "2026",
    metrics: [
      { label: "Throughput", val: "2,400 ev/s" },
      { label: "Uptime", val: "99.9%" },
      { label: "Dispatch Latency", val: "18ms" }
    ],
    desc: "Autonomous stream engine yang menganalisis pergeseran GMV ribuan produk TikTok Shop secara real-time, mendeteksi spike penjualan, dan mengirim sampel produk otomatis ke affiliator.",
    href: "https://agency.kahiyang.id"
  },
  {
    id: "02",
    title: "Autonomous Content Synthesizer",
    client: "AI Production Labs",
    category: "Generative Video & Carousel",
    aspectRatio: "aspect-[3/4]",
    widthClass: "w-[240px] sm:w-[290px]",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=85",
    year: "2026",
    metrics: [
      { label: "Render Cycle", val: "14.2 sec" },
      { label: "Format", val: "9:16 Vertical" },
      { label: "Batch Scale", val: "120 clip/hr" }
    ],
    desc: "Pipeline end-to-end n8n yang menyatukan AI vision, hook copywriting berdaya konversi tinggi, komposisi visual, dan sound trending menjadi video siap posting dalam hitungan detik.",
    href: "https://studio.kahiyang.id"
  },
  {
    id: "03",
    title: "Viral Retention Analyzer",
    client: "SaaS Algorithmic Audit",
    category: "Neural Retention Forensics",
    aspectRatio: "aspect-[16/10]",
    widthClass: "w-[340px] sm:w-[420px]",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=85",
    year: "2026",
    metrics: [
      { label: "Confidence", val: "98.4%" },
      { label: "Retention Scan", val: "0-3s Hook" },
      { label: "Competitor Map", val: "Real-time" }
    ],
    desc: "Sistem forensik video TikTok yang membedah kurva retensi audiens, mendeteksi second-drop rate, dan memberi skor kesehatan akun berdasarkan parameter FYP aktual.",
    href: "https://analyzer.kahiyang.id"
  },
  {
    id: "04",
    title: "Talent & Creator Network",
    client: "Kahiyang Agency",
    category: "Creator Management",
    aspectRatio: "aspect-[3/4]",
    widthClass: "w-[250px] sm:w-[300px]",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
    year: "2026",
    metrics: [
      { label: "Roster", val: "500+ Creators" },
      { label: "GMV Generated", val: "Rp 10M+" },
      { label: "Split", val: "70 / 30 Net" }
    ],
    desc: "Akselerasi kreator dan talent affiliate TikTok Shop nasional. Menghubungkan akun bertalenta langsung dengan brand principal tanpa potongan predatory.",
    href: "https://agency.kahiyang.id"
  },
  {
    id: "05",
    title: "Multi-Agent Gateway Nexus",
    client: "Infrastructure Core",
    category: "High-Concurrency Router",
    aspectRatio: "aspect-[1/1]",
    widthClass: "w-[260px] sm:w-[310px]",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=85",
    year: "2026",
    metrics: [
      { label: "Proxy Latency", val: "12ms" },
      { label: "Token Shield", val: "Active" },
      { label: "Failover Node", val: "Zero Downtime" }
    ],
    desc: "Distributed reverse proxy yang mendistribusikan beban token LLM dan beban otomasi lintas node VPS dengan session persistence penuh.",
    href: "https://t.me/kahiyang_partnership"
  }
]

export default function ObysHero() {
  const [selected, setSelected] = useState<ProjectItem | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)
  const isDown = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const moved = useRef(false)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return
    isDown.current = true
    moved.current = false
    startX.current = e.pageX - trackRef.current.offsetLeft
    scrollLeft.current = trackRef.current.scrollLeft
    setIsDragging(true)
  }

  const handleMouseLeave = () => {
    isDown.current = false
    setIsDragging(false)
  }

  const handleMouseUp = () => {
    isDown.current = false
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !trackRef.current) return
    const x = e.pageX - trackRef.current.offsetLeft
    const dist = Math.abs(x - startX.current)
    if (dist > 5) moved.current = true
    const walk = (x - startX.current) * 1.8
    trackRef.current.scrollLeft = scrollLeft.current - walk
  }

  const handleCardClick = (item: ProjectItem) => {
    if (!moved.current) {
      setSelected(item)
    }
  }

  return (
    <section className="relative w-full min-h-screen bg-[#000000] text-white pt-24 pb-16 px-6 sm:px-12 flex flex-col justify-between overflow-hidden select-none">
      
      {/* Top Header Floating Status (Khas Obys Agency) */}
      <div className="flex justify-between items-center text-xs font-mono tracking-widest text-[#777777] uppercase border-b border-[#181818] pb-6 mb-8">
        <div className="flex items-center gap-4">
          <span className="text-white font-bold tracking-tight">KAHIYANG ECOSYSTEM</span>
          <span className="text-[#333333]">/</span>
          <span>AUTONOMOUS WORKS</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-white font-mono text-[11px]">DRAG TO PAN &bull; CLICK IMAGE FOR DATA</span>
        </div>
      </div>

      {/* Main Cinematic Multi-Aspect Horizontal Gallery Track */}
      <div className="my-auto py-6">
        <div
          ref={trackRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`w-full overflow-x-auto no-scrollbar pb-6 ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex items-center gap-10 sm:gap-14 w-max px-4">
            {PROJECTS.map((item) => (
              <div
                key={item.id}
                onClick={() => handleCardClick(item)}
                className={`group flex-shrink-0 ${item.widthClass} transition-transform duration-300 hover:scale-[1.02]`}
              >
                {/* Cinematic Image Frame */}
                <div className={`relative ${item.aspectRatio} w-full overflow-hidden bg-[#111111] border border-[#222222] group-hover:border-white transition-colors duration-500 shadow-2xl`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    draggable={false}
                    className="w-full h-full object-cover grayscale brightness-90 contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 pointer-events-none"
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                  
                  {/* Serial badge */}
                  <span className="absolute top-4 left-4 font-mono text-xs text-white/70 bg-black/60 backdrop-blur-md px-2 py-0.5 border border-white/10">
                    {item.id}
                  </span>
                </div>

                {/* Minimalist Sub-Label (Obys Typography) */}
                <div className="mt-4 flex justify-between items-baseline font-sans text-xs">
                  <div>
                    <h3 className="font-semibold text-white tracking-tight text-sm uppercase group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                    <span className="font-mono text-[#666666] text-[11px] block mt-0.5">
                      {item.category}
                    </span>
                  </div>
                  <span className="font-mono text-[#555555] text-xs">
                    {item.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Editorial Meta Bar */}
      <div className="flex flex-wrap justify-between items-end border-t border-[#181818] pt-6 text-xs font-mono text-[#666666]">
        <div>
          <span className="text-white font-medium block mb-0.5">MALANG &bull; INDONESIA</span>
          <span>TIKTOK AFFILIATE &bull; AI PIPELINE &bull; PRESS AUDIT</span>
        </div>
        <div className="text-right">
          <span className="text-white font-bold block">{PROJECTS.length} FEATURED ARCHITECTURES</span>
          <span>ALL RIGHTS RESERVED &copy; 2026</span>
        </div>
      </div>

      {/* Full-Screen Context Inspection Modal (Muncul saat gambar diklik) */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-6 sm:p-12 animate-in fade-in duration-300">
          <div className="relative w-full max-w-4xl bg-[#0d0d0d] border border-[#262626] p-8 sm:p-12 text-white shadow-2xl">
            
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 font-mono text-xs uppercase tracking-widest text-[#777777] hover:text-white border border-[#333333] px-3 py-1.5 flex items-center gap-2 transition-colors"
            >
              <span>CLOSE</span>
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              {/* Thumbnail preview inside modal */}
              <div className="md:col-span-5">
                <div className="aspect-[4/5] w-full overflow-hidden border border-[#222222]">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Data & metrics */}
              <div className="md:col-span-7 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 font-mono text-xs text-[#777777] pb-3 border-b border-[#222222] mb-4">
                    <span>SPECIMEN {selected.id}</span>
                    <span>&bull;</span>
                    <span className="text-emerald-400">{selected.category}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mb-4">
                    {selected.title}
                  </h2>

                  <p className="text-sm text-[#aaaaaa] font-light leading-relaxed mb-6">
                    {selected.desc}
                  </p>
                </div>

                <div>
                  {/* Real Metrics Grid */}
                  <div className="grid grid-cols-3 gap-4 border-t border-[#222222] pt-6 font-mono text-xs">
                    {selected.metrics.map((m, idx) => (
                      <div key={idx}>
                        <span className="text-[#666666] block text-[10px] uppercase mb-1">{m.label}</span>
                        <span className="text-white font-semibold text-sm">{m.val}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#222222] flex justify-between items-center">
                    <span className="text-xs font-mono text-[#555555]">
                      CLIENT: {selected.client}
                    </span>
                    <Link
                      href={selected.href}
                      target={selected.href.startsWith("http") ? "_blank" : undefined}
                      className="inline-flex items-center gap-2 bg-white text-black font-mono font-bold text-xs uppercase px-5 py-2.5 hover:bg-neutral-200 transition-colors"
                    >
                      EXPLORE REPO <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  )
}
