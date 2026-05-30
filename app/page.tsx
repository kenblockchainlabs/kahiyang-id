import Navbar from "@/components/navbar"
import Hero from "@/components/sections/hero"
import Layanan from "@/components/sections/layanan"
import Tentang from "@/components/sections/tentang"
import CTA from "@/components/sections/cta"

export default function Page() {
  return (
    <main className="bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <div className="relative z-10">
        <Layanan />
        <Tentang />
        <CTA />
      </div>
    </main>
  )
}
