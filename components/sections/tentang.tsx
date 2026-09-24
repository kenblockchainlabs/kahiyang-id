"use client"

export default function Tentang() {
  return (
    <section id="tentang" className="w-full text-[#222222] py-16 sm:py-20 font-sans select-none">

      {/* Manifesto Container in White Textured Paper */}
      <div
        className="p-6 sm:p-8 md:p-14 border border-black/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
        style={{
          backgroundColor: "#f5f5f5",
          backgroundImage: 'url("/textures/paper-white.webp")',
          backgroundSize: "400px"
        }}
      >
        {/* Editorial Top Head */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between items-start sm:items-center text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#666666] pb-4 sm:pb-6 border-b border-[#222222]/15 mb-8 sm:mb-10 gap-2">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#d25933] flex-shrink-0" />
            <span className="font-bold text-[#111111]">BINAR PAGI NUSANTARA</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="hidden sm:inline">PERS & JURNALISME SAINS</span>
          </div>
          <div>
            <span>VOL. XXIV &bull; MALANG</span>
          </div>
        </div>

        {/* Hero Headline Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start pb-8 sm:pb-10 border-b border-[#222222]/15">
          <div className="lg:col-span-8">
            <span className="text-[10px] sm:text-xs font-mono text-[#d25933] uppercase tracking-widest block mb-2 font-bold">
              [ ADVOKASI EKONOMI & KEDAULATAN KONTEN ]
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight uppercase leading-[1.08] text-[#111111]">
              Literasi Algoritma Tanpa Kompromi. Perlindungan Hak Kreator & UMKM.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-[13px] sm:text-sm text-[#444444] font-normal leading-relaxed mb-4 sm:mb-6">
              Binar Pagi berdiri sebagai garda jurnalisme sains digital. Kami menolak hegemoni algoritma tertutup yang membakar modal UMKM dan mengeksploitasi talenta kreator pemula.
            </p>
            <div className="text-[10px] sm:text-xs font-mono text-[#777777]">
              <span>ARSIP RESMI: DITERBITKAN SECARA INDEPENDEN</span>
            </div>
          </div>
        </div>

        {/* Two Column Brutalist Editorial Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mt-8 sm:mt-10">

          {/* Block 1 */}
          <div
            className="p-6 sm:p-8 border border-black/20 text-[#222222] flex flex-col justify-between"
            style={{
              backgroundColor: "#e8e8e8",
              backgroundImage: 'url("/textures/paper-white.webp")',
              backgroundSize: "cover"
            }}
          >
            <div>
              <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono text-[#777777] pb-3 border-b border-black/15 mb-4">
                <span className="font-bold">MANIFESTO // 01</span>
                <span className="hidden sm:inline">DATA SCIENTIFIC AUDIT</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight mb-3">
                Transparansi Algoritma TikTok Shop
              </h3>
              <p className="text-[13px] sm:text-sm text-[#555555] font-normal leading-relaxed">
                Algoritma bukan takdir acak, melainkan persamaan probabilistik. Kami menyajikan audit forensik nyata agar kreator tidak terjebak trial-and-error buta yang merugikan waktu dan modal.
              </p>
            </div>
            <div className="pt-3 sm:pt-4 border-t border-black/15 mt-5 sm:mt-6 flex justify-between items-center text-[10px] sm:text-xs font-mono text-[#666666]">
              <span>METODE: EMPIRIS</span>
              <span className="font-bold text-black">98.4% CONFIDENCE</span>
            </div>
          </div>

          {/* Block 2: Terracotta Orange Accent */}
          <div
            className="p-6 sm:p-8 border border-black/20 text-white flex flex-col justify-between"
            style={{
              backgroundColor: "#d25933",
              backgroundImage: 'url("/textures/binder-orange.avif")',
              backgroundSize: "cover"
            }}
          >
            <div>
              <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono text-white/80 pb-3 border-b border-white/20 mb-4">
                <span className="font-bold">MANIFESTO // 02</span>
                <span className="hidden sm:inline">DIRECT SYNDICATE</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight mb-3">
                Kedaulatan Bagi Hasil 70/30
              </h3>
              <p className="text-[13px] sm:text-sm text-white/90 font-normal leading-relaxed">
                Memangkas agensi perantara predatory. Setiap kreator terverifikasi mendapatkan akses inventori langsung ke brand principal dengan skema margin yang adil dan transparan.
              </p>
            </div>
            <div className="pt-3 sm:pt-4 border-t border-white/20 mt-5 sm:mt-6 flex justify-between items-center text-[10px] sm:text-xs font-mono text-white/80">
              <span>PRINSIP: KEADILAN</span>
              <span className="font-bold text-white">70% NET CREATOR</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}
