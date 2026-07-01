"use client"

import { useState, useEffect } from "react"

export default function SplashLoader() {
  const [show, setShow] = useState(true)
  const [fade, setFade] = useState(false)

  useEffect(() => {
    // Start fade out after 1.5s
    const timer1 = setTimeout(() => setFade(true), 1500)
    // Hide completely after 2s
    const timer2 = setTimeout(() => setShow(false), 2200)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  if (!show) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a]"
      style={{
        opacity: fade ? 0 : 1,
        transition: "opacity 0.6s ease-out",
        pointerEvents: fade ? "none" : "auto",
      }}
    >
      {/* Logo */}
      <div className="relative">
        <img
          src="/logo-sm.png"
          alt="Kahiyang"
          className="w-20 h-20 rounded-full"
          style={{
            animation: "splashPulse 1.5s ease-in-out infinite",
          }}
        />
        {/* Glow ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            animation: "splashRing 1.5s ease-out infinite",
          }}
        />
      </div>

      {/* Brand name */}
      <h1
        className="mt-6 text-2xl font-light tracking-[0.2em] text-white/80"
        style={{
          animation: "splashText 1s ease-out 0.3s both",
        }}
      >
        KAHIYANG
      </h1>

      {/* Loading dots */}
      <div className="flex gap-1.5 mt-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-lime-400"
            style={{
              animation: `splashDot 1s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes splashPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        @keyframes splashRing {
          0% { box-shadow: 0 0 0 0 rgba(200, 255, 0, 0.3); }
          100% { box-shadow: 0 0 0 30px rgba(200, 255, 0, 0); }
        }
        @keyframes splashText {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes splashDot {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </div>
  )
}
