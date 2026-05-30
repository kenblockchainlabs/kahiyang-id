
**3. Edit file app/page.tsx:**
- Klik kiri di Explorer → app → page.tsx`
- *Ctrl+A* (select all) → *Delete*
- Paste ini:

tsx
import Navbar from "@/components/navbar"
import Hero from "@/components/sections/hero"

export default function Page() {
  return (
    <main className="bg-[#0a0a0a]">
      <Navbar />
      <Hero />
    </main>
  )
}
