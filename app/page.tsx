import ObysHero from "@/components/sections/obys-hero"
import Layanan from "@/components/sections/layanan"
import Tentang from "@/components/sections/tentang"
import CTA from "@/components/sections/cta"
import Footer from "@/components/sections/footer"

export default function Page() {
  return (
    <main className="bg-[#050505] text-[#f4f4f4] min-h-screen relative overflow-x-clip selection:bg-[#d25933] selection:text-white font-sans">

      {/* SECTION 01: HERO SECTION (CINEMATIC 3-PANE ARCHITECTURE) */}
      <ObysHero />

      {/* Editorial Transition Divider */}
      <div className="w-full py-4">
        <div className="max-w-[1580px] mx-auto px-5 sm:px-10">
          <div className="divider-editorial" />
        </div>
      </div>

      {/* SECTION 02: ECOSYSTEM MATRIX & SERVICES */}
      <div className="max-w-[1580px] mx-auto px-5 sm:px-10">
        <Layanan />
      </div>

      {/* Editorial Transition Divider */}
      <div className="w-full py-4">
        <div className="max-w-[1580px] mx-auto px-5 sm:px-10">
          <div className="divider-editorial" />
        </div>
      </div>

      {/* SECTION 03: PERS MANIFESTO (BINAR PAGI NUSANTARA) */}
      <div className="max-w-[1580px] mx-auto px-5 sm:px-10">
        <Tentang />
      </div>

      {/* Editorial Transition Divider */}
      <div className="w-full py-4">
        <div className="max-w-[1580px] mx-auto px-5 sm:px-10">
          <div className="divider-editorial" />
        </div>
      </div>

      {/* SECTION 04: ONBOARDING & CTA GATEWAY */}
      <div className="max-w-[1580px] mx-auto px-5 sm:px-10">
        <CTA />
      </div>

      {/* SECTION 05: EDITORIAL FOOTER */}
      <Footer />

    </main>
  )
}
