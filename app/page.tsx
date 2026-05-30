import Navbar from "@/components/navbar"
import Hero from "@/components/sections/hero"
import Layanan from "@/components/sections/layanan"
import Tentang from "@/components/sections/tentang"
import CTA from "@/components/sections/cta"

export default function Page() {
  return (
    <main className="bg-[#f5f0e8]">
      <Navbar />
      <Hero />
      {/* Section di atas hero (z-10) — scroll over the zoom */}
      <div className="relative z-10">
        <Layanan />
        <Tentang />
        <CTA />
      </div>
    </main>
  )
}
