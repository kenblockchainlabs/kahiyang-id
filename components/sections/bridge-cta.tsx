"use client";

import { motion } from "framer-motion";

export default function BridgeCTA() {
  return (
    <div className="relative h-40 md:h-56 overflow-hidden">
      {/* Gradient transition: white → dark */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#0a0a0a]" />

      {/* Animated line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-px bg-cyan-500/40 origin-center"
      />

      {/* Glow dot */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(0,229,255,0.5)]"
      />
    </div>
  );
}
