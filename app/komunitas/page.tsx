"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);

  // Touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const x = e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollLeft - walk;
  };

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

      {/* Aktivitas — Horizontal Swipe */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold mb-3 text-center"
          >
            Yang <span className="text-[#0dffd4]">Kamu Dapat</span>
          </motion.h2>
          <p className="text-gray-600 text-center mb-10 text-sm">← geser →</p>

          {/* Horizontal scroll cards */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>
            {activities.map((act, i) => (
              <motion.div
                key={act.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex-shrink-0 w-[280px] md:w-[340px] snap-center bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:border-[#0dffd4]/30 transition-all duration-300"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-[#0dffd4]/10 border border-[#0dffd4]/20 text-[#0dffd4] text-[10px] font-semibold tracking-[0.1em] uppercase mb-4">{act.tag}</span>
                <h3 className="text-lg font-bold text-white mb-3">{act.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{act.desc}</p>
              </motion.div>
            ))}
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

      {/* Sosmed */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold mb-4 text-center"
          >
            Gabung di <span className="text-[#0dffd4]">Sosmed</span> Kami
          </motion.h2>
          <p className="text-gray-600 text-center mb-12 text-sm">Follow, subscribe, dan jadi bagian dari komunitas.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "TikTok", handle: "@alaherbalasli", url: "https://tiktok.com/@alaherbalasli", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.27 8.27 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.16z" /></svg> },
              { name: "Telegram", handle: "Grup Komunitas", url: "https://t.me/+FarOaL4D-HFlMGM1", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.28-.02-.12.03-2.02 1.28-5.69 3.77-.54.37-1.03.55-1.47.54-.48-.01-1.4-.27-2.09-.49-.84-.28-1.51-.42-1.45-.89.03-.25.38-.51 1.04-.78 4.07-1.77 6.79-2.94 8.15-3.5 3.88-1.63 4.69-1.91 5.21-1.92.12 0 .37.03.54.17.14.12.18.28.2.47-.01.06.01.24 0 .36z" /></svg> },
              { name: "Instagram", handle: "@kahiyang.id", url: "https://instagram.com/kahiyang.id", icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg> },
            ].map((social, i) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group flex items-center gap-4 p-5 bg-white/[0.03] border border-white/[0.06] rounded-2xl hover:border-[#0dffd4]/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-gray-400 group-hover:text-[#0dffd4] transition-colors">{social.icon}</div>
                <div>
                  <div className="text-white font-medium">{social.name}</div>
                  <div className="text-gray-600 text-sm">{social.handle}</div>
                </div>
              </motion.a>
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
            Gratis <span className="text-[#0dffd4]">Analisa Akun</span>
          </h2>
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Kirim username TikTok lo. Gue bedah — kasih tau kenapa stuck dan gimana fix-nya.
          </p>
          <a
            href="https://wa.me/6285135787489?text=Halo,%20saya%20mau%20analisa%20akun%20TikTok%20gratis"
            className="inline-block px-8 py-4 rounded-full bg-[#0dffd4] text-black font-bold text-sm tracking-[0.1em] uppercase hover:opacity-90 transition-opacity"
          >
            Bedah Akun Gue →
          </a>
        </motion.div>
      </section>
    </main>
  );
}
