import Navbar from "@/components/navbar"
import Hero from "@/components/sections/hero"
import Layanan from "@/components/sections/layanan"
import Tentang from "@/components/sections/tentang"

export default function Page() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Layanan />
      <Tentang />
    </main>
  )
}
