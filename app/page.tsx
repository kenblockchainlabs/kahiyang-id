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
      {/* Sections DI DALAM lubang — tanpa z-index, muncul pas hero scroll habis */}
      <Layanan />
      <Tentang />
      <CTA />
    </main>
  )
}
