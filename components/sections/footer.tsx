"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/[0.06]">
      <div className="max-w-[1580px] mx-auto px-6 sm:px-10 py-10 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-5 sm:gap-6"
        >
          {/* Logo / Brand */}
          <a href="#" className="text-white/90 text-lg font-medium tracking-wide">
            Kahiyang<span className="text-[#d25933]">.id</span>
          </a>

          {/* Tagline */}
          <p className="text-gray-500 text-[13px] sm:text-sm text-center max-w-md">
            Mulai, Tumbuh, dan Berkembang — Tanpa Batas.
          </p>

          {/* Divider */}
          <div className="w-12 h-px bg-white/[0.08]" />

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[12px] sm:text-sm text-gray-400">
            <a
              href="https://t.me/+FarOaL4D-HFlMGM1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-300"
            >
              Telegram
            </a>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <a
              href="/privacy-policy"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <a
              href="/terms"
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-600 text-[10px] sm:text-xs font-mono">
            © 2026 Kahiyang.id — Binar Pagi. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
