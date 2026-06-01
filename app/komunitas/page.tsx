"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Placeholder data — ganti dengan konten asli
const activities = [
  {
    id: 1,
    title: "Workshop Digital Marketing",
    date: "Mei 2026",
    image: "/images/komunitas/workshop-1.jpg",
    description: "Workshop intensif 3 hari bersama 50+ peserta dari seluruh Indonesia.",
  },
  {
    id: 2,
    title: "Community Meetup Jakarta",
    date: "April 2026",
    image: "/images/komunitas/meetup-1.jpg",
    description: "Networking session dan sharing session bareng anggota komunitas.",
  },
  {
    id: 3,
    title: "Kelas Affiliate Batch 3",
    date: "Maret 2026",
    image: "/images/komunitas/kelas-1.jpg",
    description: "Kelas perdana dengan 100+ pendaftar dan 95% completion rate.",
  },
  {
    id: 4,
    title: "Collaboration with Binar Pagi",
    date: "Februari 2026",
    image: "/images/komunitas/collab-1.jpg",
    description: "Program edukasi di SMK dan SMP bersama Binar Pagi Foundation.",
  },
];

const socials = [
  {
    name: "TikTok",
    handle: "@kahiyang.id",
    url: "https://tiktok.com/@kahiyang.id",
    color: "from-pink-500 to-violet-500",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.27 8.27 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.16z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "@kahiyang.id",
    url: "https://instagram.com/kahiyang.id",
    color: "from-pink-500 via-red-500 to-yellow-500",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    handle: "Kahiyang.id",
    url: "https://facebook.com/kahiyang.id",
    color: "from-blue-600 to-blue-400",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function KomunitasPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % activities.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + activities.length) % activities.length);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="/" className="text-cyan-400 text-sm hover:underline mb-8 inline-block">
              ← Kembali
            </a>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Komunitas</span>{" "}
              <span style={{ color: "#00e5ff" }}>Kahiyang</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Bersama tumbuh, bersama berkembang. Komunitas kami adalah ruang untuk
              belajar, berbagi, dan berkembang tanpa batas.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12"
          >
            {[
              { value: "500+", label: "Anggota" },
              { value: "50+", label: "Kegiatan" },
              { value: "10+", label: "Kota" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400">{stat.value}</div>
                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Carousel — Dokumentasi Kegiatan */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold mb-10 text-center"
          >
            Dokumentasi <span className="text-cyan-400">Kegiatan</span>
          </motion.h2>

          {/* Main Slide */}
          <div className="relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.06]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col md:flex-row"
              >
                {/* Image */}
                <div className="relative w-full md:w-1/2 aspect-[4/3] bg-white/[0.02]">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📸</div>
                      <p className="text-sm">Foto: {activities[activeSlide].title}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-cyan-400 text-sm font-medium mb-2">
                    {activities[activeSlide].date}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {activities[activeSlide].title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {activities[activeSlide].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500/30 transition-all duration-300 text-gray-400 hover:text-white"
              >
←
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center hover:bg-cyan-500/20 hover:border-cyan-500/30 transition-all duration-300 text-gray-400 hover:text-white"
              >
                →
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {activities.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeSlide
                    ? "w-8 bg-cyan-400"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
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
            Gabung di <span className="text-cyan-400">Sosmed</span> Kami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-center mb-12"
          >
            Follow, subscribe, dan jadi bagian dari komunitas yang terus berkembang.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socials.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative rounded-2xl p-6 bg-white/[0.03] border border-white/[0.06] hover:border-cyan-500/30 transition-all duration-500 overflow-hidden"
              >
                {/* Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
                />

                <div className="relative flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
                    {social.icon}
                  </div>
                  <div>
                    <div className="text-white font-medium text-lg">{social.name}</div>
                    <div className="text-gray-500 text-sm">{social.handle}</div>
                  </div>
                </div>

                <div className="relative mt-4 text-sm text-gray-500 group-hover:text-cyan-400 transition-colors duration-300">
                  Follow →
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Join */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Siap <span className="text-cyan-400">Bergabung</span>?
          </h2>
          <p className="text-gray-400 mb-8">
            Daftar sekarang dan mulai perjalananmu bersama komunitas Kahiyang.
          </p>
          <a
href="#"
            className="inline-block px-8 py-3 rounded-full bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition-colors duration-300"
          >
            Gabung Komunitas
          </a>
        </motion.div>
      </section>
    </main>
  );
}
