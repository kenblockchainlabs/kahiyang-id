"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import { ArrowUpRight, MessageSquare } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // CTA box dramatic reveal
      if (boxRef.current) {
        gsap.fromTo(
          boxRef.current,
          { y: 100, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "expo.out",
            scrollTrigger: {
              trigger: boxRef.current,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        )
      }

      // Headline letter-by-letter stagger
      if (headlineRef.current) {
        const text = headlineRef.current.textContent || ""
        const words = text.split(" ")
        headlineRef.current.innerHTML = words
          .map(word => `<span class="inline-block overflow-hidden"><span class="cta-word inline-block">${word}</span></span>`)
          .join(" ")

        const wordEls = headlineRef.current.querySelectorAll(".cta-word")
        gsap.fromTo(
          wordEls,
          { y: "110%", rotateX: "20deg" },
          {
            y: "0%",
            rotateX: "0deg",
            duration: 0.7,
            ease: "expo.out",
            stagger: 0.03,
            scrollTrigger: {
              trigger: headlineRef.current,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="w-full py-20 sm:py-28 font-sans select-none">

      {/* Massive Callout Box with Terracotta Binder Accent */}
      <div
        ref={boxRef}
        className="p-6 sm:p-10 md:p-14 lg:p-16 border border-black/30 shadow-[0_20px_60px_rgba(0,0,0,0.7)] text-white relative overflow-hidden"
        style={{
          backgroundColor: "#d25933",
          backgroundImage: 'url("/textures/binder-orange.avif")',
          backgroundSize: "cover"
        }}
      >
        {/* Frame Top Indicators */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-[10px] sm:text-xs font-mono text-white/70 mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-white/20 gap-1">
          <span>KAHIYANG SYNDICATE ONBOARDING</span>
          <span className="hidden sm:inline">CYCLE 2026</span>
          <span className="hidden md:inline">MALANG &bull; GLOBAL GATEWAY</span>
        </div>

        <div className="max-w-4xl">
          <span className="text-[10px] sm:text-xs font-mono text-white/80 uppercase tracking-widest block mb-3 sm:mb-4 font-bold">
            [ DIRECT ENROLLMENT & PARTNERSHIP ]
          </span>
          <h2
            ref={headlineRef}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display tracking-tight uppercase leading-[1.05] text-white mb-6 sm:mb-8"
            style={{ perspective: "800px" }}
          >
            Kuasai Algoritma. Bangun Imperium TikTok Shop Anda.
          </h2>
          <p className="text-[14px] sm:text-base md:text-lg text-white/90 font-normal leading-relaxed mb-8 sm:mb-10 max-w-2xl">
            Akses taktis ke private vault playbook, sistem otomasi n8n, dan bimbingan langsung talent manager Kahiyang. Kuota terbatas per siklus onboarding.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
            <Link
              href="https://t.me/kahiyang_partnership"
              target="_blank"
              className="inline-flex items-center justify-center gap-3 bg-black text-white font-mono font-bold text-[11px] sm:text-xs uppercase px-6 sm:px-7 py-3.5 sm:py-4 hover:bg-white hover:text-black transition-all duration-300 shadow-lg group"
            >
              <MessageSquare className="w-4 h-4 flex-shrink-0" />
              <span>GABUNG PRIVATE TELEGRAM</span>
              <ArrowUpRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              href="mailto:partnership@kahiyang.id"
              className="inline-flex items-center justify-center gap-3 border border-white text-white font-mono text-[11px] sm:text-xs uppercase px-6 sm:px-7 py-3.5 sm:py-4 hover:bg-white hover:text-black transition-all duration-300"
            >
              <span>PARTNERSHIP INQUIRY</span>
            </Link>
          </div>
        </div>

        {/* Footer Specimen Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 sm:pt-10 border-t border-white/20 mt-10 sm:mt-12 font-mono text-[10px] sm:text-xs text-white/80">
          <div>
            <span className="text-white/60 block mb-1 uppercase">ACCESS LEVEL</span>
            <span className="font-bold text-white text-[11px] sm:text-xs">Private Vault</span>
          </div>
          <div>
            <span className="text-white/60 block mb-1 uppercase">STATUS</span>
            <span className="font-bold text-white text-[11px] sm:text-xs">Verified Talent Only</span>
          </div>
          <div>
            <span className="text-white/60 block mb-1 uppercase">INTEGRATION</span>
            <span className="font-bold text-white text-[11px] sm:text-xs">Direct Brand API</span>
          </div>
          <div>
            <span className="text-white/60 block mb-1 uppercase">CREATOR SPLIT</span>
            <span className="font-bold text-white text-[11px] sm:text-xs">70% Net Revenue</span>
          </div>
        </div>

      </div>

    </section>
  )
}
