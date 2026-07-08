"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Kreator Aktif", note: "yang rutin upload & diskusi" },
  { value: "5", label: "Akun Dikelola", note: "praktisi langsung" },
  { value: "7-14", label: "Hari ke Komisi", note: "rata-rata murid baru" },
];

const activities = [
  { id: 1, title: "Bedah Akun Live", desc: "Setiap minggu, akun murid dibedah langsung — hook, timing, konten. Semua transparan.", tag: "Mingguan" },
  { id: 2, title: "Sharing Strategi", desc: "Affiliator yang udah pecah telur share cara mereka — produk apa, konten gimana.", tag: "Real Case" },
  { id: 3, title: "Update Algoritma", desc: "TikTok ganti algoritma? Komunitas langsung tau. Strategi diupdate bareng.", tag: "Real-Time" },
  { id: 4, title: "Template & Tools", desc: "Template hook, script konten, tools analisa — semua dibagi gratis.", tag: "Resource" },
];

const results = [
  { num: "500rb-5jt", desc: "Range komisi harian aktif komunitas — tergantung niche & konsistensi", color: "#0dffd4" },
  { num: "7-14", desc: "Rata-rata hari ke komisi pertama — dari akun baru sampai pecah telur", color: "#ff6b35" },
];

export default function KomunitasPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#0a0a0a", color: "#e8edf2", fontFamily: "'Inter', -apple-system, sans-serif", overflowX: "hidden" }}>

      {/* ═══ HERO ═══ */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "120px 24px 80px", overflow: "hidden" }}>
        {/* Grid pattern */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(13,255,212,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(13,255,212,0.03) 1px, transparent 1px)", backgroundSize: "50px 50px", pointerEvents: "none" }} />
        {/* Glow */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 500, height: 500, background: "radial-gradient(circle, rgba(13,255,212,0.1) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: 600 }}>

          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 20px", borderRadius: 100, background: "rgba(13,255,212,0.08)", border: "1px solid rgba(13,255,212,0.2)", marginBottom: 32 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#0dffd4", animation: "blink 1.5s ease infinite" }} />
            <span style={{ fontSize: 11, color: "#0dffd4", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>Komunitas TikTok Affiliate</span>
          </motion.div>

          {/* Main text */}
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} style={{ fontSize: "clamp(48px, 10vw, 80px)", fontWeight: 900, lineHeight: 0.95, letterSpacing: "-0.04em", marginBottom: 24 }}>
            <span style={{ display: "block", color: "#fff" }}>Komunitas</span>
            <span style={{ display: "block", color: "#0dffd4" }}>Kahiyang</span>
          </motion.h1>

          {/* Sub */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} style={{ fontSize: 16, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, maxWidth: 420, margin: "0 auto 48px" }}>
            Bukan grup chat biasa. Ini ruang belajar bareng — bedah akun, sharing strategi, sampai pecah telur.
          </motion.p>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, maxWidth: 400, margin: "0 auto" }}>
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 1 + i * 0.15 }} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "20px 12px", textAlign: "center" }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: "#0dffd4", letterSpacing: "-0.02em" }}>{s.value}</div>
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.15em", marginTop: 4 }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ YANG KAMU DAPAT — Animated cards ═══ */}
      <section style={{ padding: "100px 24px", position: "relative" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.3em", fontWeight: 600 }}>Yang Kamu Dapat</span>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, letterSpacing: "-0.03em", marginTop: 12 }}>
              <span style={{ color: "#fff" }}>Bukan </span>
              <span style={{ color: "#0dffd4" }}>Kelas Teori</span>
            </h2>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {activities.map((act, i) => (
              <motion.div key={act.id} initial={{ opacity: 0, y: 30, scale: 0.97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 20, padding: 28, display: "flex", gap: 20, alignItems: "flex-start", cursor: "default", transition: "border-color 0.3s, transform 0.3s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(13,255,212,0.3)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: 12, background: "rgba(13,255,212,0.08)", border: "1px solid rgba(13,255,212,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#0dffd4", fontWeight: 700 }}>{String(act.id).padStart(2, "0")}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <span style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>{act.title}</span>
                    <span style={{ fontSize: 9, color: "#0dffd4", padding: "3px 10px", borderRadius: 100, background: "rgba(13,255,212,0.08)", border: "1px solid rgba(13,255,212,0.15)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>{act.tag}</span>
                  </div>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>{act.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HASIL NYATA ═══ */}
      <section style={{ padding: "100px 24px", background: "rgba(255,255,255,0.015)" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.3em", fontWeight: 600 }}>Hasil Nyata</span>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, letterSpacing: "-0.03em", marginTop: 12 }}>
              <span style={{ color: "#fff" }}>Bukan </span>
              <span style={{ color: "#0dffd4" }}>Janji</span>
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {results.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.15 }} style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 20, padding: 28, textAlign: "left" }}>
                <div style={{ fontSize: 32, fontWeight: 900, color: r.color, letterSpacing: "-0.03em", marginBottom: 8 }}>{r.num}</div>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ padding: "100px 24px" }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ maxWidth: 480, margin: "0 auto", textAlign: "center", background: "linear-gradient(180deg, rgba(13,255,212,0.04) 0%, transparent 100%)", border: "1px solid rgba(13,255,212,0.15)", borderRadius: 24, padding: "48px 32px" }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, color: "#fff", marginBottom: 8 }}>Masuk <span style={{ color: "#0dffd4" }}>Gratis</span></h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", marginBottom: 32, lineHeight: 1.6 }}>Gabung grup Telegram komunitas. Tanpa syarat.</p>
          <a href="https://t.me/+FarOaL4D-HFlMGM1" style={{ display: "inline-block", padding: "14px 36px", borderRadius: 100, background: "#0dffd4", color: "#0a0a0a", fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", transition: "opacity 0.2s" }}>Gabung Grup Telegram →</a>
        </motion.div>
      </section>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
      `}</style>
    </main>
  );
}
