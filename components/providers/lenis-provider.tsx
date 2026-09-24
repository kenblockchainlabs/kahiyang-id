"use client"

import { useEffect, type ReactNode } from "react"
import Lenis from "lenis"

export default function LenisProvider({ children }: { children: ReactNode }) {

  useEffect(() => {
    const isMobile = window.innerWidth < 768

    // Instance Lenis with Obys-grade inertia easing
    const lenis = new Lenis({
      duration: isMobile ? 1.0 : 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.05,
      // Enable touch scrolling on mobile for smooth feel
      touchMultiplier: isMobile ? 1.8 : 1,
      syncTouch: isMobile,
    })

    // Expose to window for kinetic components to read velocity
    if (typeof window !== "undefined") {
      ;(window as unknown as { lenis: Lenis }).lenis = lenis
    }

    // Use proper rAF loop with cleanup
    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // Respect reduced motion preference
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handleMotionChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        lenis.stop()
      } else {
        lenis.start()
      }
    }
    handleMotionChange(mql)
    mql.addEventListener("change", handleMotionChange)

    return () => {
      cancelAnimationFrame(rafId)
      mql.removeEventListener("change", handleMotionChange)
      lenis.destroy()
      if (typeof window !== "undefined") {
        delete (window as unknown as { lenis?: Lenis }).lenis
      }
    }
  }, [])

  return <>{children}</>
}
