"use client"

import { useState, useRef } from "react"

interface Specimen {
  id: string
  code: string
  title: string
  category: string
  author: string
  year: string
  desc: string
  metric: string
  throughput: string
  stack: string
}

const SPECIMENS: Specimen[] = [
  {
    id: "01",
    code: "AFF-01",
    title: "TikTok Shop Stream Pipeline",
    category: "AFFILIATE ENGINE",
    author: "Kahiyang Core Team",
    year: "2026",
    desc: "Autonomous pipeline yang memonitor pergeseran tren GMV produk TikTok Shop, scoring velocity konten FYP, dan dispatch sampel otomatis langsung ke creator network.",
    metric: "99.8% System Uptime",
    throughput: "2,400 Event/Sec",
    stack: "TikTok Graph API, Redis, Go"
  },
  {
    id: "02",
    code: "SYN-02",
    title: "Autonomous Content Synthesizer",
    category: "N8N ORCHESTRATION",
    author: "Automation Labs",
    year: "2026",
    desc: "Sistem generative pipeline yang meramu hook 3-detik pertama, script copywriting berkonversi tinggi, komposisi visual produk 9:16, dan audio trending dalam sekali jalan.",
    metric: "14.2s Pipeline Latency",
    throughput: "120 Tasks/hr",
    stack: "n8n, Python, FFmpeg"
  },
  {
    id: "03",
    code: "VRL-03",
    title: "Algorithmic Retention Auditor",
    category: "NEURAL VISION",
    author: "Research Unit",
    year: "2026",
    desc: "Engine forensik video yang mendeteksi drop-rate penonton, density tipografi cover, dan kecocokan algoritma FYP agar kreator tidak membakar ad-spend sia-sia.",
    metric: "94.6% FYP Accuracy",
    throughput: "Real-time Poll",
    stack: "Gemini Vision, PyTorch"
  },
  {
    id: "04",
    code: "RTR-04",
    title: "Multi-Agent Gateway Nexus",
    category: "INFRASTRUCTURE",
    author: "Systems Architecture",
    year: "2026",
    desc: "Reverse proxy cerdas yang mengatur load balancing token provider, rate limit protection, session persistence, dan failover antar node VPS tanpa jeda.",
    metric: "12ms Mean Latency",
    throughput: "High Concurrency",
    stack: "9Router, Nginx, Caddy"
  },
  {
    id: "05",
    code: "MEM-05",
    title: "Mnemosyne Agentic Memory",
    category: "ZERO-DEP VAULT",
    author: "Database Guild",
    year: "2026",
    desc: "Arsip context memory terdistribusi berlatensi ultra-rendah berbasis SQLite WAL FTS5 untuk menyimpan knowledge base dan riwayat keputusan agen otonom.",
    metric: "0kb Extra Dep",
    throughput: "Instant SQLite Query",
    stack: "SQLite FTS5, WAL Mode"
  }
]

export default function ObysHero() {
  const [selected, setSelected] = useState<Specimen>(SPECIMENS[0])
  const trackRef = useRef<HTMLDivElement>(null)
  const isDown = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return
    isDown.current = true
    startX.current = e.pageX - trackRef.current.offsetLeft
    scrollLeft.current = trackRef.current.scrollLeft
  }

  const handleMouseLeave = () => { isDown.current = false }
  const handleMouseUp = () => { isDown.current = false }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !trackRef.current) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    const walk = (x - startX.current) * 1.6
    trackRef.current.scrollLeft = scrollLeft.current - walk
  }

  return (
    <section className="relative w-full bg-[#0e0e0e] text-[#262626] pt-24 pb-20 px-4 sm:px-8 md:px-12 font-sans select-none overflow-hidden">
      
      {/* Container Open Book Canvas */}
      <div className="max-w-[1520px] mx-auto relative">
        
        {/* The Open Book Two-Page Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-black/40 relative">
          
          {/* LEFT PAGE: Raw Charcoal Gray Textured Paper (#7c7c7c paper-gray) */}
          <div 
            className="lg:col-span-5 p-8 sm:p-12 text-[#f4f4f4] relative flex flex-col justify-between min-h-[620px] border-b lg:border-b-0 lg:border-r border-black/30"
            style={{
              backgroundColor: "#7c7c7c",
              backgroundImage: 'url("/textures/paper-gray.webp")',
              backgroundRepeat: "repeat",
              backgroundSize: "400px"
            }}
          >
            {/* Top Binder Holes Decoration on Left Margin */}
            <div className="flex justify-between items-start font-mono text-xs text-white/80 pb-6 border-b border-white/20 uppercase tracking-[0.2em]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#d25933]" />
                <span className="font-bold text-white">KAHIYANG LIBRARY</span>
              </div>
              <span>VOL. 2026 // N° 01</span>
            </div>

            {/* Editorial Title Block */}
            <div className="my-auto py-8">
              <span className="text-xs font-mono tracking-widest text-white/70 uppercase block mb-3">
                [ ESSENTIAL TITLES & ARTIFACTS ]
              </span>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-[1.05] text-white uppercase mb-6 drop-shadow-sm">
                Kahiyang Design Books — Arsitektur Otomasi & Kedaulatan Kreator.
              </h1>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal max-w-md">
                Koleksi taktis sistem otonomus, neural pipeline, dan jurnalisme sains yang membuktikan bahwa performa digital sejati melampaui ilusi layar semata.
              </p>
            </div>

            {/* Left Page Bottom Specimen Index */}
            <div className="pt-6 border-t border-white/20 flex justify-between items-end text-xs font-mono text-white/70">
              <div>
                <span className="block text-white/50 text-[10px]">ORGANIZATION</span>
                <span className="text-white font-semibold">Kahiyang Ecosystem</span>
              </div>
              <div className="text-right">
                <span className="block text-white/50 text-[10px]">CURATED IN</span>
                <span className="text-white font-semibold">Malang &bull; Indonesia</span>
              </div>
            </div>
          </div>

          {/* RIGHT PAGE: Warm Textured Newsprint / Sand Paper (#f5f5f5 paper-white) */}
          <div 
            className="lg:col-span-7 p-8 sm:p-12 text-[#222222] relative flex flex-col justify-between min-h-[620px]"
            style={{
              backgroundColor: "#f5f5f5",
              backgroundImage: 'url("/textures/paper-white.webp")',
              backgroundRepeat: "repeat",
              backgroundSize: "400px"
            }}
          >
            {/* Top Bar on Right Page */}
            <div className="flex justify-between items-center text-xs font-mono text-[#666666] pb-6 border-b border-[#222222]/15 uppercase tracking-widest">
              <span>FEATURED SPECIMENS ({SPECIMENS.length})</span>
              <span className="hidden sm:inline">SWIPE / DRAG CARDS ↔</span>
            </div>

            {/* Draggable Specimen Cards with Terracotta Accent (#d25933) */}
            <div className="my-auto py-6">
              <div
                ref={trackRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className="w-full overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing pb-2 select-none"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <div className="flex gap-5 w-max py-2">
                  {SPECIMENS.map((item) => {
                    const isSelected = selected.id === item.id
                    return (
                      <div
                        key={item.id}
                        onClick={() => setSelected(item)}
                        className="w-[240px] sm:w-[270px] group transition-all duration-200"
                      >
                        <div 
                          className={`p-5 flex flex-col justify-between aspect-[3/4] transition-all duration-200 shadow-md ${
                            isSelected 
                              ? "ring-2 ring-[#d25933] shadow-xl scale-[1.02]" 
                              : "hover:ring-1 hover:ring-black/30"
                          }`}
                          style={{
                            backgroundColor: isSelected ? "#d25933" : "#e6e6e6",
                            backgroundImage: isSelected ? 'url("/textures/binder-orange.avif")' : 'url("/textures/paper-white.webp")',
                            backgroundSize: "cover",
                            color: isSelected ? "#ffffff" : "#1a1a1a"
                          }}
                        >
                          <div className="flex justify-between items-start font-mono text-xs">
                            <span className="font-bold opacity-80">{item.id}</span>
                            <span className="text-[10px] tracking-widest uppercase opacity-80">{item.category}</span>
                          </div>

                          <div className="my-auto text-center py-4">
                            <span className="text-4xl sm:text-5xl font-mono font-black tracking-tighter block">
                              {item.code}
                            </span>
                          </div>

                          <div className="border-t border-current/20 pt-3">
                            <span className="text-[10px] font-mono uppercase block opacity-70 mb-0.5">
                              {item.author} ({item.year})
                            </span>
                            <h3 className="text-xs font-bold uppercase tracking-tight line-clamp-2">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Context Detail Drawer (Active Specimen Inspection) */}
            <div 
              className="mt-4 p-6 border border-[#222222]/20 shadow-sm transition-all duration-300"
              style={{
                backgroundColor: "#d25933",
                backgroundImage: 'url("/textures/binder-orange.avif")',
                backgroundSize: "cover",
                color: "#ffffff"
              }}
            >
              <div className="flex justify-between items-start font-mono text-xs pb-3 border-b border-white/20 mb-4">
                <span className="tracking-widest uppercase font-bold text-white">
                  SPECIMEN AUDIT // {selected.id} &bull; {selected.code}
                </span>
                <span className="text-white/80">{selected.category}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-2">
                {selected.title}
              </h2>
              <p className="text-xs sm:text-sm text-white/90 font-normal leading-relaxed mb-6">
                {selected.desc}
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20 font-mono text-xs">
                <div>
                  <span className="text-white/60 block text-[10px] uppercase">PERFORMANCE</span>
                  <span className="text-white font-bold">{selected.metric}</span>
                </div>
                <div>
                  <span className="text-white/60 block text-[10px] uppercase">RATE</span>
                  <span className="text-white font-bold">{selected.throughput}</span>
                </div>
                <div>
                  <span className="text-white/60 block text-[10px] uppercase">FOUNDATION</span>
                  <span className="text-white font-bold">{selected.stack}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
