import ObysHero from "@/components/sections/obys-hero"
import Layanan from "@/components/sections/layanan"
import Tentang from "@/components/sections/tentang"
import CTA from "@/components/sections/cta"
import Footer from "@/components/sections/footer"

export default function Page() {
  return (
    <main className="bg-[#000000] text-[#f4f4f4] min-h-screen relative overflow-x-clip selection:bg-white selection:text-black font-sans">
      
      {/* SECTION 01: HERO SECTION (100% PURE OBYS.AGENCY 3-PANE ARCHITECTURE) */}
      <ObysHero />

      {/* SECTION 02: ECOSYSTEM MATRIX & SERVICES */}
      <div className="max-w-[1580px] mx-auto px-6 sm:px-10">
        <Layanan />
      </div>

      {/* SECTION 03: PERS MANIFESTO (BINAR PAGI NUSANTARA) */}
      <div className="max-w-[1580px] mx-auto px-6 sm:px-10">
        <Tentang />
      </div>

      {/* SECTION 04: ONBOARDING & CTA GATEWAY */}
      <div className="max-w-[1580px] mx-auto px-6 sm:px-10">
        <CTA />
      </div>

      {/* SECTION 05: EDITORIAL FOOTER */}
      <Footer />

    </main>
  )
}
