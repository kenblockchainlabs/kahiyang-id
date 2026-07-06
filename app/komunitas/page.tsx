"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Kreator Aktif", note: "yang rutin upload & diskusi" },
  { value: "5", label: "Akun Dikelola", note: "praktisi langsung" },
  { value: "7-14", label: "Hari ke Komisi", note: "rata-rata murid baru" },
];

const activities = [
  {
    id: 1,
    title: "Bedah Akun Live",
    desc: "Setiap minggu, akun murid dibedah langsung — hook, timing, konten. Semua transparan, semua data.",
    tag: "Mingguan",
  },
  {
    id: 2,
    title: "Sharing Strategi",
    desc: "Affiliator yang udah pecah telur share cara mereka — produk apa, konten gimana, timing kapan.",
    tag: "Real Case",
  },
  {
    id: 3,
    title: "Update Algoritma",
    desc: "TikTok ganti algoritma? Komunitas langsung tau. Strategi diupdate bareng-bareng.",
    tag: "Real-Time",
  },
  {
    id: 4,
    title: "Template & Tools",
    desc: "Template hook, script konten, dan tools analisa — semua dibagi gratis di komunitas.",
    tag: "Resource",
  },
];

export default function KomunitasPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <a href="/" className="text-white/30 text-sm hover:text-white/60 mb-8 inline-block tracking-[0.1em] uppercase">← Kembali</a>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Komunitas</span>{" "}
              <span className="text-[#0dffd4]">Kahiyang</span>
            </h1>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Bukan grup chat biasa. Ini ruang belajar bareng — bedah akun, sharing strategi, dan saling support sampai pecah telur.
            </p>
          </motion.div>

          {/* Stats — real data */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="grid grid-cols-3 gap-4 md:gap-8 mt-12 max-w-2xl mx-auto"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4 md:p-6">
                <div className="text-2xl md:text-4xl font-bold text-[#0dffd4]">{stat.value}</div>
                <div className="text-gray-400 text-xs md:text-sm mt-1 font-medium">{stat.label}</div>
                <div className="text-gray-600 text-[10px] md:text-xs mt-1">{stat.note}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Aktivitas — Auto Carousel */}
      <section className="py-16 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold mb-3 text-center"
          >
            Yang <span className="text-[#0dffd4]">Kamu Dapat</span>
          </motion.h2>

          {/* Infinite scroll carousel */}
          <div className="relative mt-10">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

            <div className="flex gap-4 animate-scroll" style={{ width: "max-content" }}>
              {/* Double the items for infinite loop */}
              {[...activities, ...activities].map((act, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[280px] md:w-[340px] bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-[#0dffd4]/30 transition-all duration-300"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-[#0dffd4]/10 border border-[#0dffd4]/20 text-[#0dffd4] text-[10px] font-semibold tracking-[0.1em] uppercase mb-4">{act.tag}</span>
                  <h3 className="text-lg font-bold text-white mb-3">{act.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{act.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bukti — Screenshot placeholder */}
      <section className="py-16 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold mb-3"
          >
            Hasil <span className="text-[#0dffd4]">Nyata</span>
          </motion.h2>
          <p className="text-gray-600 mb-10 text-sm">Bukan janji — bukti dari komunitas</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num: "Rp 24jt", desc: "Komisi 1 hari — affiliator herbal, 3 bulan di komunitas", color: "text-[#0dffd4]" },
              { num: "Rp 2,4jt", desc: "ATH komisi harian — fashion pria, tanpa iklan", color: "text-[#ff6b35]" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-[#0a0a0a] border border-white/[0.06] rounded-2xl p-8 text-left"
              >
                <div className={`text-3xl md:text-4xl font-bold ${item.color} mb-3`}>{item.num}</div>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.06] rounded-3xl p-10 md:p-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Masuk <span className="text-[#0dffd4]">Gratis</span>
          </h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Gabung grup Telegram komunitas. Gratis, tanpa syarat.
          </p>
          <a
            href="https://t.me/+FarOaL4D-HFlMGM1"
            className="inline-block px-8 py-4 rounded-full bg-[#0dffd4] text-black font-bold text-sm tracking-[0.1em] uppercase hover:opacity-90 transition-opacity"
          >
            Gabung Grup Telegram →
          </a>
        </motion.div>
      </section>
    </main>
  );
}
