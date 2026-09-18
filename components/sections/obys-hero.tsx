"use client"

import { useState, useRef } from "react"

interface NodeSpec {
  id: string
  code: string
  title: string
  category: string
  desc: string
  metric: string
  throughput: string
  tech: string
  status: string
}

const NODES: NodeSpec[] = [
  {
    id: "01",
    code: "AFF-01",
    title: "TikTok Shop Stream Pipeline",
    category: "AFFILIATE RECON",
    desc: "Engine scanner real-time untuk audit produk viral, deteksi pergeseran GMV, komisi affiliate tertinggi, dan auto-dispatching order sampel ke kreator.",
    metric: "99.8% Uptime",
    throughput: "2,400 Event/Sec",
    tech: "TikTok API + Redis",
    status: "ACTIVE"
  },
  {
    id: "02",
    code: "SYN-02",
    title: "Autonomous Content Synthesizer",
    category: "N8N ORCHESTRATION",
    desc: "Pipeline n8n end-to-end yang menyusun skrip hook viral, prompt visual L4, sound matching, hingga render carousel format 9:16 secara otomatis.",
    metric: "14.2s Pipeline",
    throughput: "120 Tasks/hr",
    tech: "n8n + Node.js + FFmpeg",
    status: "SYNCHRONIZED"
  },
  {
    id: "03",
    code: "VRL-03",
    title: "Kahiyang Trend Predictor",
    category: "VISION AUDIT",
    desc: "Classifier performa konten berbasis visual audit. Membaca drop rate retensi 3 detik pertama, kepadatan teks cover, dan kecocokan algoritma FYP.",
    metric: "94.6% Confidence",
    throughput: "Real-time Stream",
    tech: "Gemini Vision + PyTorch",
    status: "EVALUATING"
  },
  {
    id: "04",
    code: "RTR-04",
    title: "Multi-Agent Gateway Nexus",
    category: "INFRASTRUCTURE",
    desc: "High-concurrency proxy dan load distributor yang mengelola kuota token, healthcheck session hermes, dan isolasi profile runtime secara atomic.",
    metric: "12ms Mean Latency",
    throughput: "Mesh Network",
    tech: "9Router + Nginx Reverse",
    status: "ONLINE"
  },
  {
    id: "05",
    code: "MEM-05",
    title: "Mnemosyne Agentic Memory",
    category: "ZERO-DEP VAULT",
    desc: "Penyimpanan memori terdistribusi berbasis SQLite FTS5 WAL mode, menjaga context knowledge, rule komunitas, dan hasil audit lintas agen.",
    metric: "0kb Extra Dep",
    throughput: "Instant SQLite Query",
    tech: "SQLite FTS5 + WAL",
    status: "LOCKED"
  }
]

export default function ObysHero() {
  const [selectedNode, setSelectedNode] = useState<NodeSpec | null>(NODES[0])
  const trackRef = useRef<HTMLDivElement>(null)
  const isDown = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  // Drag-to-slide physics for track
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
    const walk = (x - startX.current) * 1.5
    trackRef.current.scrollLeft = scrollLeft.current - walk
  }

  return (
    <section className="relative w-full bg-[#0e0e0e] text-[#f4f4f4] pt-28 pb-20 border-b border-[#222222] overflow-hidden selection:bg-white selection:text-black">
      
      {/* Obys Tactile Noise Filter */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.035] z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-20 max-w-[1580px] mx-auto px-6 sm:px-10">
        
        {/* Editorial Subheader Meta */}
        <div className="flex flex-wrap justify-between items-center text-xs font-mono uppercase tracking-[0.2em] text-[#777777] pb-6 border-b border-[#222222] mb-12">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white font-bold">KAHIYANG RESEARCH & LABS</span>
            <span className="text-[#444444]">/</span>
            <span>EDITION 2026</span>
          </div>
          <div className="hidden md:flex gap-8">
            <span>[ SYSTEM: AUTONOMOUS ]</span>
            <span>[ DISCIPLINE: VIRAL AFFILIATE ]</span>
          </div>
        </div>

        {/* Huge Swiss Editorial Title Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-14 border-b border-[#222222]">
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.04] text-white uppercase">
              Beyond Static Media. <br />
              <span className="text-[#888888]">Architected For Dominance.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-between">
            <p className="text-sm sm:text-base text-[#aaaaaa] leading-relaxed font-light mb-6">
              Koleksi arsitektur otomatisasi, neural pipeline, dan analisis konten TikTok Shop. Dirancang presisi untuk mengonversi views menjadi volume transaksi nyata.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-[#666666]">
              <span>[ SLIDE HORIZONTAL ↔ KLIK KARTU UNTUK AUDIT ]</span>
            </div>
          </div>
        </div>

        {/* Drag-to-Slide Infinite Obys Carousel */}
        <div className="mt-12">
          <div className="flex justify-between items-center mb-4 text-xs font-mono text-[#777777]">
            <span className="uppercase tracking-widest">Active Specimen Nodes ({NODES.length})</span>
            <span className="hidden sm:inline">SWIPE / DRAG TO INSPECT</span>
          </div>

          <div
            ref={trackRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="w-full overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing pb-4 select-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 w-max py-2">
              {NODES.map((node) => {
                const isSelected = selectedNode?.id === node.id
                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className="w-[280px] sm:w-[340px] group transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className={`relative aspect-[3/4] bg-[#141414] border p-6 flex flex-col justify-between transition-all duration-300 ${
                      isSelected ? "border-white bg-[#1a1a1a]" : "border-[#242424] group-hover:border-[#666666]"
                    }`}>
                      <div className="flex justify-between items-start text-xs font-mono">
                        <span className={isSelected ? "text-white font-bold" : "text-[#666666]"}>{node.id}</span>
                        <span className="text-[#888888] tracking-widest text-[11px]">{node.category}</span>
                      </div>

                      <div className="my-auto text-center py-8">
                        <span className={`text-5xl font-mono font-bold tracking-tighter transition-colors duration-300 ${
                          isSelected ? "text-white" : "text-[#333333] group-hover:text-[#888888]"
                        }`}>
                          {node.code}
                        </span>
                      </div>

                      <div className="border-t border-[#222222] pt-4">
                        <div className="flex items-center justify-between text-[11px] font-mono text-[#777777] mb-1">
                          <span>STATUS</span>
                          <span className={node.status === "ACTIVE" ? "text-emerald-400" : "text-white"}>
                            ● {node.status}
                          </span>
                        </div>
                        <h3 className="text-sm font-semibold text-white tracking-wide truncate">
                          {node.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Dynamic Context Detail Panel (Obys Library Drawer) */}
        {selectedNode && (
          <div className="mt-8 border border-[#2e2e2e] bg-[#121212] p-8 sm:p-10 relative animate-in fade-in duration-300">
            <button
              onClick={() => setSelectedNode(null)}
              className="absolute top-6 right-6 text-xs font-mono uppercase tracking-widest text-[#777777] hover:text-white border border-[#333333] px-3 py-1 transition-colors"
            >
              [ TUTUP ✕ ]
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#222222] pb-6 lg:pb-0 lg:pr-8">
                <span className="text-xs font-mono text-[#666666] tracking-widest block mb-2">
                  INSPECTION NODE // {selectedNode.id}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white mb-3">
                  {selectedNode.title}
                </h2>
                <div className="inline-block border border-[#333333] px-3 py-1 text-xs font-mono text-[#aaaaaa]">
                  {selectedNode.category}
                </div>
              </div>

              <div className="lg:col-span-8">
                <p className="text-sm sm:text-base text-[#cccccc] leading-relaxed font-light mb-8">
                  {selectedNode.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#222222] pt-6 font-mono text-xs">
                  <div>
                    <span className="text-[#666666] block uppercase mb-1">AUDIT METRIC</span>
                    <span className="text-white font-semibold text-sm">{selectedNode.metric}</span>
                  </div>
                  <div>
                    <span className="text-[#666666] block uppercase mb-1">THROUGHPUT RATE</span>
                    <span className="text-white font-semibold text-sm">{selectedNode.throughput}</span>
                  </div>
                  <div>
                    <span className="text-[#666666] block uppercase mb-1">CORE TECH STACK</span>
                    <span className="text-white font-semibold text-sm">{selectedNode.tech}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}
