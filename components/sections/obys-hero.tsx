"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { ArrowUpRight, X } from "lucide-react"

interface WorkItem {
  id: string
  title: string
  category: string
  subCategory: string
  year: string
  aspect: string
  widthClass: string
  image: string
  desc: string
  metric: string
  client: string
  href: string
}

const WORKS: WorkItem[] = [
  {
    id: "01",
    title: "TikTok Shop Stream Pipeline",
    category: "Architecture, Furniture",
    subCategory: "Creative Direction, Web Design/Dev",
    year: "2026",
    aspect: "aspect-[1/1]",
    widthClass: "w-[170px] sm:w-[220px] md:w-[260px]",
    image: "https://cms.obys.agency/uploads/Makhno_Thumbnail_e6008952f7.webp",
    desc: "Autonomous stream engine yang menganalisis pergeseran GMV ribuan produk TikTok Shop secara real-time, mendeteksi lonjakan penjualan, dan mengirim sampel produk otomatis ke affiliator.",
    metric: "99.9% Uptime &bull; 2,400 ev/s",
    client: "Kahiyang Automation Labs",
    href: "https://agency.kahiyang.id"
  },
  {
    id: "02",
    title: "Autonomous Content Synthesizer",
    category: "Fashion",
    subCategory: "Web Design/Dev",
    year: "2026",
    aspect: "aspect-[0.8]",
    widthClass: "w-[190px] sm:w-[240px] md:w-[290px]",
    image: "https://cms.obys.agency/uploads/Source_Unknown_Thumbnail_7e7a08561b.webp",
    desc: "Pipeline end-to-end n8n yang menyatukan AI vision, hook copywriting berdaya konversi tinggi, komposisi visual produk, dan audio trending menjadi format konten 9:16 instan.",
    metric: "14.2s Pipeline &bull; 120 Clip/hr",
    client: "AI Production Network",
    href: "https://studio.kahiyang.id"
  },
  {
    id: "03",
    title: "Viral Retention Analyzer",
    category: "Architecture",
    subCategory: "Web Design",
    year: "2026",
    aspect: "aspect-[1/1]",
    widthClass: "w-[200px] sm:w-[260px] md:w-[310px]",
    image: "https://cms.obys.agency/uploads/1_fae12fb704.webp",
    desc: "Engine forensik video TikTok yang membedah kurva retensi audiens, membaca second-drop rate 3 detik pertama, dan memberi skor kesehatan akun berbasis algoritma FYP aktual.",
    metric: "98.4% Accuracy &bull; Real-time Map",
    client: "Algorithmic Audit Unit",
    href: "https://analyzer.kahiyang.id"
  },
  {
    id: "04",
    title: "Talent & Creator Network",
    category: "Fashion, Photography",
    subCategory: "Creative Direction, Web Design/Dev",
    year: "2026",
    aspect: "aspect-[0.67]",
    widthClass: "w-[160px] sm:w-[210px] md:w-[250px]",
    image: "https://cms.obys.agency/uploads/Odin_s_Crow_Thumbnail_4dc8764e8a.webp",
    desc: "Akselerasi talenta kreator dan affiliator TikTok Shop nasional. Menghubungkan akun bertalenta langsung dengan brand principal tanpa komisi perantara predatory.",
    metric: "500+ Creators &bull; 70/30 Split",
    client: "Kahiyang Agency Network",
    href: "https://agency.kahiyang.id"
  },
  {
    id: "05",
    title: "Multi-Agent Gateway Nexus",
    category: "Photography, Fashion",
    subCategory: "Web Design/Dev, Identity",
    year: "2026",
    aspect: "aspect-[1.5]",
    widthClass: "w-[240px] sm:w-[320px] md:w-[380px]",
    image: "https://cms.obys.agency/uploads/Olga_Prudka_Thumbnail_73c88a2131.webp",
    desc: "Distributed reverse proxy yang mengelola kuota token LLM dan beban otomasi lintas node VPS dengan session persistence penuh dan proteksi rate-limit.",
    metric: "12ms Mean Latency &bull; 0 Downtime",
    client: "Systems Infrastructure",
    href: "https://t.me/kahiyang_partnership"
  },
  {
    id: "06",
    title: "Binar Pagi Jurnalistik Sains",
    category: "Fashion",
    subCategory: "Web Design/Dev, Identity",
    year: "2026",
    aspect: "aspect-[1/1]",
    widthClass: "w-[170px] sm:w-[220px] md:w-[260px]",
    image: "https://cms.obys.agency/uploads/Yulia_Thumbnail_3226edc489.webp",
    desc: "Portal pers dan warkah sains nasional. Mengadvokasi kedaulatan ekonomi talenta lokal dan transparansi algoritma digital bagi kemakmuran kerakyatan.",
    metric: "Dewan Pers Verified &bull; Vol. XXIV",
    client: "Binar Pagi Nusantara",
    href: "https://binarpagi.co.id"
  }
]

export default function ObysHero() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [selected, setSelected] = useState<WorkItem | null>(null)
  const isDragging = useRef(false)
  const startY = useRef(0)
  const activeWork = WORKS[activeIdx]

  // Wheel scroll with inertia
  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY > 0) {
      setActiveIdx(prev => (prev + 1) % WORKS.length)
    } else if (e.deltaY < 0) {
      setActiveIdx(prev => (prev - 1 + WORKS.length) % WORKS.length)
    }
  }

  // Pointer drag on center column
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    startY.current = e.clientY
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    const diff = startY.current - e.clientY
    if (diff > 50) {
      setActiveIdx(prev => (prev + 1) % WORKS.length)
      isDragging.current = false
    } else if (diff < -50) {
      setActiveIdx(prev => (prev - 1 + WORKS.length) % WORKS.length)
      isDragging.current = false
    }
  }

  return (
    <section 
      onWheel={handleWheel}
      className="relative w-full min-h-screen bg-[#000000] text-white overflow-hidden select-none font-sans flex flex-col justify-between"
      style={{ height: "100vh" }}
    >
      
      {/* 1. TOP HEADER (Obys Logo, Time, Navigation) */}
      <header className="fixed top-0 left-0 w-full z-40 px-6 sm:px-12 py-7 flex justify-between items-center text-xs tracking-wider uppercase font-mono text-[#888888] pointer-events-auto">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-white font-bold tracking-tight text-sm uppercase">
            KAHIYANG
          </Link>
          <div className="hidden sm:flex items-center gap-6 text-[#777777]">
            <span className="text-white">WORK,</span>
            <Link href="#tentang" className="hover:text-white transition-colors">ABOUT</Link>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <span className="hidden md:inline font-mono text-[11px] text-[#666666]">
            MALANG 07:58 CEST
          </span>
          <Link 
            href="https://t.me/kahiyang_partnership"
            target="_blank"
            className="text-white border border-[#333333] px-3.5 py-1.5 hover:bg-white hover:text-black transition-all"
          >
            CONTACT
          </Link>
        </div>
      </header>

      {/* 2. THREE-PANE CINEMATIC VIEWPORT (100% Obys Agency Real Layout) */}
      <div className="w-full h-full flex items-center justify-between px-6 sm:px-12 relative z-10 pt-20 pb-16">
        
        {/* LEFT PANE: Minimalist Project List with Hover / Active Sync */}
        <div className="hidden lg:flex flex-col justify-center space-y-2.5 w-[280px] z-20">
          {WORKS.map((w, idx) => {
            const isActive = idx === activeIdx
            return (
              <button
                key={w.id}
                onClick={() => setActiveIdx(idx)}
                className={`text-left text-sm transition-all duration-300 flex items-center gap-3 ${
                  isActive 
                    ? "text-white font-semibold translate-x-2" 
                    : "text-[#444444] hover:text-[#aaaaaa]"
                }`}
              >
                <span className="font-mono text-[10px] opacity-60">{w.id}</span>
                <span className="truncate">{w.title}</span>
              </button>
            )
          })}
        </div>

        {/* CENTER PANE: The Iconic Floating Cinematic Mesh Card (Drag / Scroll) */}
        <div 
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="mx-auto flex flex-col items-center justify-center cursor-grab active:cursor-grabbing z-20"
        >
          <div 
            onClick={() => setSelected(activeWork)}
            className={`relative ${activeWork.aspect} ${activeWork.widthClass} transition-all duration-700 ease-out transform shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-hidden group border border-[#1a1a1a] hover:border-[#555555]`}
          >
            <img
              src={activeWork.image}
              alt={activeWork.title}
              draggable={false}
              className="w-full h-full object-cover grayscale brightness-95 contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 pointer-events-none"
            />
            {/* Subtle cinematic vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

            {/* Serial badge */}
            <div className="absolute top-4 left-4 font-mono text-[10px] text-white/70 bg-black/70 px-2 py-0.5 border border-white/10 backdrop-blur-md">
              {activeWork.id} / {WORKS.length}
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-xs font-mono text-white/90">
              <span className="bg-black/60 px-2 py-0.5 backdrop-blur-md border border-white/10 text-[10px]">
                CLICK TO INSPECT
              </span>
              <span className="text-[#888888]">{activeWork.year}</span>
            </div>
          </div>

          {/* Under-Card Context Indicator */}
          <div className="mt-6 text-center">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white">
              {activeWork.title}
            </h2>
            <p className="text-xs font-mono text-[#777777] mt-1">
              {activeWork.category} &bull; {activeWork.subCategory}
            </p>
          </div>
        </div>

        {/* RIGHT PANE: Obys Agency Signature Studio Statement */}
        <div className="hidden lg:block w-[300px] text-right z-20 space-y-6">
          <p className="text-xs text-[#777777] font-light leading-relaxed">
            The studio is shaped by people who care deeply about design and the autonomous process behind. Each system becomes a live case study developed with precision and empirical telemetry.
          </p>

          <div className="pt-4 border-t border-[#181818] font-mono text-xs text-[#888888]">
            <span className="block text-[#555555] mb-1">DIRECT INQUIRY</span>
            <Link 
              href="mailto:partnership@kahiyang.id" 
              className="text-white hover:underline"
            >
              partnership@kahiyang.id
            </Link>
          </div>

          {/* View mode toggle (aesthetic Obys) */}
          <div className="pt-2 font-mono text-[11px] text-[#555555]">
            <span className="text-white">Vertical,</span>
            <span className="ml-2 hover:text-white cursor-pointer transition-colors">Grid</span>
          </div>
        </div>

      </div>

      {/* 3. BOTTOM FOOTER BAR */}
      <footer className="fixed bottom-0 left-0 w-full z-30 px-6 sm:px-12 py-5 flex justify-between items-center text-xs font-mono text-[#555555] border-t border-[#141414] bg-black/80 backdrop-blur-md">
        <span>ALL RIGHTS RESERVED &copy; 2026 KAHIYANG</span>
        <div className="flex items-center gap-4">
          <span>SCROLL OR DRAG IMAGE TO BROWSE</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </div>
      </footer>

      {/* 4. ON-CLICK FULLSCREEN CONTEXT INSPECTION (Obys Work Modal) */}
      {selected && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-6 sm:p-12 animate-in fade-in duration-300">
          <div className="relative w-full max-w-4xl bg-[#0d0d0d] border border-[#222222] p-8 sm:p-12 text-white shadow-2xl">
            
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 font-mono text-xs uppercase tracking-widest text-[#777777] hover:text-white border border-[#333333] px-3 py-1.5 flex items-center gap-2 transition-colors"
            >
              <span>CLOSE</span>
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-5">
                <div className={`aspect-[4/5] w-full overflow-hidden border border-[#222222]`}>
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

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
                  <div className="border-t border-[#222222] pt-4 font-mono text-xs text-[#888888] space-y-2">
                    <div>
                      <span className="text-[#555555] block text-[10px] uppercase">TELEMETRY</span>
                      <span className="text-white font-semibold">{selected.metric}</span>
                    </div>
                    <div>
                      <span className="text-[#555555] block text-[10px] uppercase">CLIENT ENTITY</span>
                      <span className="text-white font-semibold">{selected.client}</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#222222] flex justify-between items-center">
                    <span className="text-xs font-mono text-[#555555]">
                      YEAR: {selected.year}
                    </span>
                    <Link
                      href={selected.href}
                      target={selected.href.startsWith("http") ? "_blank" : undefined}
                      className="inline-flex items-center gap-2 bg-white text-black font-mono font-bold text-xs uppercase px-5 py-2.5 hover:bg-neutral-200 transition-colors"
                    >
                      EXPLORE WORK <ArrowUpRight className="w-3.5 h-3.5" />
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
