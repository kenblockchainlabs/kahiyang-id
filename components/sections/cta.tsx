"use client"

import Link from "next/link"
import { ArrowUpRight, MessageSquare } from "lucide-react"

export default function CTA() {
  return (
    <section className="w-full text-[#222222] py-24 font-sans select-none">
      
      {/* Massive Callout Box with Terracotta Binder Accent (#d25933) */}
      <div 
        className="p-8 sm:p-14 lg:p-16 border border-black/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-white relative overflow-hidden"
        style={{
          backgroundColor: "#d25933",
          backgroundImage: 'url("/textures/binder-orange.avif")',
          backgroundSize: "cover"
        }}
      >
        {/* Frame Top Indicators */}
        <div className="flex justify-between items-center text-xs font-mono text-white/70 mb-8 pb-4 border-b border-white/20">
          <span>KAHIYANG SYNDICATE ONBOARDING</span>
          <span>CYCLE 2026</span>
          <span>MALANG &bull; GLOBAL GATEWAY</span>
        </div>

        <div className="max-w-4xl">
          <span className="text-xs font-mono text-white/80 uppercase tracking-widest block mb-4 font-bold">
            [ DIRECT ENROLLMENT & PARTNERSHIP ]
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-[1.02] text-white mb-8">
            Kuasai Algoritma. Bangun Imperium TikTok Shop Anda.
          </h2>
          <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed mb-10 max-w-2xl">
            Akses taktis ke private vault playbook, sistem otomasi n8n, dan bimbingan langsung talent manager Kahiyang. Kuota terbatas per siklus onboarding.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link
              href="https://t.me/kahiyang_partnership"
              target="_blank"
              className="inline-flex items-center gap-3 bg-black text-white font-mono font-bold text-xs uppercase px-7 py-4 hover:bg-white hover:text-black transition-all shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>GABUNG PRIVATE TELEGRAM</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="mailto:partnership@kahiyang.id"
              className="inline-flex items-center gap-3 border border-white text-white font-mono text-xs uppercase px-7 py-4 hover:bg-white hover:text-black transition-all"
            >
              <span>PARTNERSHIP INQUIRY</span>
            </Link>
          </div>
        </div>

        {/* Footer Specimen Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-white/20 mt-12 font-mono text-xs text-white/80">
          <div>
            <span className="text-white/60 block mb-1 uppercase">ACCESS LEVEL</span>
            <span className="font-bold text-white">Private Vault</span>
          </div>
          <div>
            <span className="text-white/60 block mb-1 uppercase">STATUS</span>
            <span className="font-bold text-white">Verified Talent Only</span>
          </div>
          <div>
            <span className="text-white/60 block mb-1 uppercase">INTEGRATION</span>
            <span className="font-bold text-white">Direct Brand API</span>
          </div>
          <div>
            <span className="text-white/60 block mb-1 uppercase">CREATOR SPLIT</span>
            <span className="font-bold text-white">70% Net Revenue</span>
          </div>
        </div>

      </div>

    </section>
  )
}
