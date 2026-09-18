"use client"

export default function Tentang() {
  return (
    <section className="w-full bg-[#0e0e0e] text-[#f4f4f4] py-20 border-b border-[#222222] font-sans select-none">
      
      {/* Editorial Top Head */}
      <div className="flex flex-wrap justify-between items-center text-xs font-mono uppercase tracking-[0.2em] text-[#777777] pb-6 border-b border-[#222222] mb-12">
        <div className="flex items-center gap-3">
          <span>[ PERS & PUBLISHING MANIFESTO ]</span>
          <span className="text-[#444444]">&bull;</span>
          <span>VOLUME XXIV</span>
        </div>
        <div>
          <span>MALANG &bull; INDONESIA &bull; 2026</span>
        </div>
      </div>

      {/* Hero Headline Manifesto */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-14 border-b border-[#222222]">
        <div className="lg:col-span-8">
          <span className="text-xs font-mono text-[#888888] uppercase tracking-widest block mb-4">
            BINAR PAGI NUSANTARA &bull; PERS AUDIT
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase leading-[1.08] text-white">
            Kedaulatan Konten Kreator. Advokasi Ekonomi Kerakyatan.
          </h2>
        </div>
        <div className="lg:col-span-4">
          <p className="text-sm text-[#aaaaaa] font-light leading-relaxed mb-6">
            Binar Pagi berdiri sebagai garda literasi dan jurnalisme sains digital. Kami menolak hegemoni algoritma tertutup yang merugikan UMKM dan talenta kreator lokal di ekosistem platform global.
          </p>
          <div className="flex items-center gap-4 text-xs font-mono text-[#666666]">
            <span>STATUS: INDEPENDENT PERS &bull; DIGITAL REPO</span>
          </div>
        </div>
      </div>

      {/* Two Column Brutalist Editorial Blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        
        {/* Block 1 */}
        <div className="p-8 border border-[#222222] bg-[#141414] flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center text-xs font-mono text-[#666666] pb-4 border-b border-[#222222] mb-6">
              <span>MANIFESTO // 01</span>
              <span>LITERASI ALGORITMA</span>
            </div>
            <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-4">
              Transparansi Algoritma TikTok Shop
            </h3>
            <p className="text-sm text-[#aaaaaa] font-light leading-relaxed">
              Algoritma bukan takdir acak, melainkan persamaan matematis terukur. Kami menyediakan audit performa berbasis data nyata agar kreator dan UMKM tidak terjebak tebak-tebakan konten atau tren fana yang membakar modal tanpa konversi.
            </p>
          </div>
          <div className="pt-6 border-t border-[#222222] mt-8 flex justify-between items-center text-xs font-mono">
            <span className="text-[#666666]">PILLAR: DATA-DRIVEN</span>
            <span className="text-white font-medium">98.4% AUDIT ACCURACY</span>
          </div>
        </div>

        {/* Block 2 */}
        <div className="p-8 border border-[#222222] bg-[#141414] flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center text-xs font-mono text-[#666666] pb-4 border-b border-[#222222] mb-6">
              <span>MANIFESTO // 02</span>
              <span>PROTEKSI UMKM</span>
            </div>
            <h3 className="text-xl font-bold text-white uppercase tracking-wide mb-4">
              Sinergi Komunitas & Direct Brand
            </h3>
            <p className="text-sm text-[#aaaaaa] font-light leading-relaxed">
              Memangkas perantara predatory yang mengeksploitasi margin kreator pemula. Melalui sistem split transparan dan akses inventori langsung ke brand, setiap anggota ekosistem mendapatkan hak ekonomi yang proporsional dan adil.
            </p>
          </div>
          <div className="pt-6 border-t border-[#222222] mt-8 flex justify-between items-center text-xs font-mono">
            <span className="text-[#666666]">PILLAR: DIRECT SYNDICATE</span>
            <span className="text-white font-medium">70/30 REVENUE SPLIT</span>
          </div>
        </div>

      </div>

    </section>
  )
}
