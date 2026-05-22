import { Wave } from "@/components/ui/wave"

export default function Page() {
  return (
    <main style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "black" }}>
      <Wave speed={0.5} tiles={1.2} />
    </main>
  )
}