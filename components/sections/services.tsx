"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  CircularGallery,
  type GalleryItem,
} from "@/components/ui/circular-gallery";

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

/**
 * Catatan:
 * - Untuk nambah / ngurangin layanan, edit array ini aja.
 * - File raw di components/ui/circular-gallery.tsx jangan disentuh.
 * - Image pake Picsum (deterministic seed) — swap ke Unsplash spesifik kalau
 *   Negeri Kahiyang udah punya foto branded yang resmi.
 *
 * Mapping field ke struktur CircularGallery (yang hardcoded di raw component):
 *   common    → judul service
 *   binomial  → tagline / status (italic, di bawah judul)
 *   photo.url → cover image
 *   photo.by  → tertera sebagai "Photo by: X" — di-set ke nama brand
 *               supaya line itu tetap kontekstual.
 */
const SERVICES: GalleryItem[] = [
  {
    common: "Kelas Affiliate",
    binomial: "Basic & Pro — dari pemula sampai naik kelas",
    photo: {
      url: "https://picsum.photos/seed/kelas-affiliate-kahiyang/900/1200",
      text: "Ilustrasi belajar di depan laptop — Kelas Affiliate",
      by: "Negeri Kahiyang",
    },
  },
  {
    common: "UGC Generate AI Video",
    binomial: "Hadir segera — konten video instan tanpa syuting",
    photo: {
      url: "https://picsum.photos/seed/ugc-ai-video-kahiyang/900/1200",
      text: "Ilustrasi teknologi AI untuk produksi video UGC",
      by: "Negeri Kahiyang",
    },
  },
  {
    common: "Konsultasi Pinjol",
    binomial: "Tersedia gratis — pendampingan finansial yang menemani",
    photo: {
      url: "https://picsum.photos/seed/konsultasi-pinjol-kahiyang/900/1200",
      text: "Ilustrasi konsultasi finansial yang hangat",
      by: "Negeri Kahiyang",
    },
  },
  {
    common: "Tools Clipper",
    binomial: "Hadir segera — workflow ringkas, video panjang jadi clip viral",
    photo: {
      url: "https://picsum.photos/seed/tools-clipper-kahiyang/900/1200",
      text: "Ilustrasi proses editing video clipper",
      by: "Negeri Kahiyang",
    },
  },
];

/* -------------------------------------------------------------------------- */
/*  Section                                                                   */
/* -------------------------------------------------------------------------- */

export function ServicesSection() {
  return (
    <section
      id="layanan"
      className="relative isolate overflow-hidden bg-black py-24 sm:py-32"
    >
      {/* Ambient backdrop — konsisten sama Wave hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-violet-500/15 via-fuchsia-500/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[360px] w-[640px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.6))]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white/70 backdrop-blur">
            Layanan
          </span>
          <h2 className="mt-5 bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-4xl font-semibold leading-tight tracking-tight text-transparent sm:text-5xl">
            Berjalan lebih jauh, <br className="hidden sm:block" />
            dengan dukungan yang tepat.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/60 sm:text-lg">
            Dukungan layanan untuk membantu Anda memulai, mempertahankan
            momentum, dan naik ke level berikutnya.
          </p>
        </motion.div>

        {/* Circular Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative mt-16 h-[640px] sm:h-[720px]"
        >
          <CircularGallery
            items={SERVICES}
            radius={420}
            autoRotateSpeed={0.05}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;
