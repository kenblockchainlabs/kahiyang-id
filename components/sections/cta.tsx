"use client"

import Link from "next/link"
import { ArrowUpRight, MessageSquare } from "lucide-react"

export default function CTA() {
  return (
    <section className="w-full bg-[#0e0e0e] text-[#f4f4f4] py-24 border-b border-[#222222] font-sans select-none">
      
      {/* Top Protocol Header */}
      <div className="flex justify-between items-center text-xs font-mono uppercase tracking-[0.2em] text-[#777777] pb-6 border-b border-[#222222] mb-12">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>[ INITIATE CONNECTION PROTOCOL ]</span>
        </div>
        <div>
          <span>GATEWAY // DIRECT ACCESS</span>
        </div>
      </div>

      {/* Massive Callout Box */}
      <div className="border border-[#262626] bg-[#121212] p-8 sm:p-14 lg:p-16 relative overflow-hidden">
        
        {/* Editorial Frame Indicators */}
        <div className="flex justify-between items-center text-xs font-mono text-[#555555] mb-8 pb-4 border-b border-[#222222]">
          <span>SYNDICATE ONBOARDING</span>
          <span>SLOT Q3/Q4 OPEN</span>
          <span>LOC: ID-SUB / GLOBAL</span>
        </div>

        <div className="max-w-4xl">
          <span className="text-xs font-mono text-[#888888] uppercase tracking-widest block mb-4">
            MEMBERSHIP & ENTERPRISE PARTNERSHIP
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight uppercase leading-[1.04] text-white mb-8">
            Siap Dominasi Ekosistem TikTok Shop?
          </h2>
          <p className="text-base sm:text-lg text-[#aaaaaa] font-light leading-relaxed mb-10 max-w-2xl">
            Bergabunglah dengan ratusan kreator, brand partner, dan pengembang otomasi di Kahiyang Syndicate. Akses private vault materi, tools eksklusif, dan bimbingan terarah.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Link
              href="https://t.me/kahiyang_partnership"
              target="_blank"
              className="inline-flex items-center gap-3 bg-white text-black font-mono font-bold text-xs uppercase px-6 py-4 hover:bg-[#e0e0e0] transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>GABUNG PRIVATE TELEGRAM</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="mailto:partnership@kahiyang.id"
              className="inline-flex items-center gap-3 border border-[#333333] text-white font-mono text-xs uppercase px-6 py-4 hover:border-white transition-colors"
            >
              <span>PARTNERSHIP INQUIRY</span>
            </Link>
          </div>
        </div>

        {/* Footer Specimen Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-[#222222] mt-12 font-mono text-xs">
          <div>
            <span className="text-[#666666] block mb-1">ENCRYPTION</span>
            <span className="text-white">End-to-End Vault</span>
          </div>
          <div>
            <span className="text-[#666666] block mb-1">MEMBERSHIP</span>
            <span className="text-white">Verified Only</span>
          </div>
          <div>
            <span className="text-[#666666] block mb-1">INTEGRATION</span>
            <span className="text-white">Direct Agency API</span>
          </div>
          <div>
            <span className="text-[#666666] block mb-1">COMMISSION</span>
            <span className="text-emerald-400">70% Net Creator</span>
          </div>
        </div>

      </div>

    </section>
  )
}
