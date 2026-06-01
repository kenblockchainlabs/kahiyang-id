import Navbar from "@/components/navbar"
import Hero from "@/components/sections/hero"
import Layanan from "@/components/sections/layanan"
import Tentang from "@/components/sections/tentang"
import CTA from "@/components/sections/cta"
import BridgeCTA from "@/components/sections/bridge-cta"
import Footer from "@/components/sections/footer"
import ZoomSection from "@/components/ui/zoom-section"

export default function Page() {
  return (
    <main className="bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <ZoomSection id="layanan" fromScale={0.85} fromOpacity={0} className="bg-white">
        <Layanan />
      </ZoomSection>
      <ZoomSection id="tentang" fromScale={0.9} fromOpacity={0} className="bg-[#fafafa]">
        <Tentang />
      </ZoomSection>
      <ZoomSection fromScale={0.85} fromOpacity={0} className="bg-white">
        <CTA />
      </ZoomSection>
      <BridgeCTA />
      <Footer />
    </main>
  )
}
