"use client"

import { motion } from "framer-motion"
import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout"

function WordReveal({
  text,
  delayChildren = 0,
  stagger = 0.05,
}: {
  text: string
  delayChildren?: number
  stagger?: number
}) {
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        visible: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
    >
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
            visible: {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
            },
          }}
          style={{ display: "inline-block", marginRight: "0.28em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}

const frames = [
  { id: 1, video: "https://static.cdn-luma.com/files/981e483f71aa764b/Company%20Thing%20Exported.mp4", defaultPos: { x: 0, y: 0, w: 4, h: 4 }, corner: "", edgeHorizontal: "", edgeVertical: "", mediaSize: 1, borderThickness: 0, borderSize: 80, isHovered: false },
  { id: 2, video: "https://static.cdn-luma.com/files/58ab7363888153e3/WebGL%20Exported%20(1).mp4", defaultPos: { x: 4, y: 0, w: 4, h: 4 }, corner: "", edgeHorizontal: "", edgeVertical: "", mediaSize: 1, borderThickness: 0, borderSize: 80, isHovered: false },
  { id: 3, video: "https://static.cdn-luma.com/files/58ab7363888153e3/Jitter%20Exported%20Poster.mp4", defaultPos: { x: 8, y: 0, w: 4, h: 4 }, corner: "", edgeHorizontal: "", edgeVertical: "", mediaSize: 1, borderThickness: 0, borderSize: 80, isHovered: false },
  { id: 4, video: "https://static.cdn-luma.com/files/58ab7363888153e3/Exported%20Web%20Video.mp4", defaultPos: { x: 0, y: 4, w: 4, h: 4 }, corner: "", edgeHorizontal: "", edgeVertical: "", mediaSize: 1, borderThickness: 0, borderSize: 80, isHovered: false },
  { id: 5, video: "https://static.cdn-luma.com/files/58ab7363888153e3/Logo%20Exported.mp4", defaultPos: { x: 4, y: 4, w: 4, h: 4 }, corner: "", edgeHorizontal: "", edgeVertical: "", mediaSize: 1, borderThickness: 0, borderSize: 80, isHovered: false },
  { id: 6, video: "https://static.cdn-luma.com/files/58ab7363888153e3/Animation%20Exported%20(4).mp4", defaultPos: { x: 8, y: 4, w: 4, h: 4 }, corner: "", edgeHorizontal: "", edgeVertical: "", mediaSize: 1, borderThickness: 0, borderSize: 80, isHovered: false },
  { id: 7, video: "https://static.cdn-luma.com/files/58ab7363888153e3/Illustration%20Exported%20(1).mp4", defaultPos: { x: 0, y: 8, w: 4, h: 4 }, corner: "", edgeHorizontal: "", edgeVertical: "", mediaSize: 1, borderThickness: 0, borderSize: 80, isHovered: false },
  { id: 8, video: "https://static.cdn-luma.com/files/58ab7363888153e3/Art%20Direction%20Exported.mp4", defaultPos: { x: 4, y: 8, w: 4, h: 4 }, corner: "", edgeHorizontal: "", edgeVertical: "", mediaSize: 1, borderThickness: 0, borderSize: 80, isHovered: false },
  { id: 9, video: "https://static.cdn-luma.com/files/58ab7363888153e3/Product%20Video.mp4", defaultPos: { x: 8, y: 8, w: 4, h: 4 }, corner: "", edgeHorizontal: "", edgeVertical: "", mediaSize: 1, borderThickness: 0, borderSize: 80, isHovered: false },
]

export default function Layanan() {
  return (
    <section id="layanan" className="relative bg-black py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">

          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-cyan-400 text-sm font-semibold tracking-widest uppercase"
          >
            LAYANAN KAMI
          </motion.span>

          {/* Heading — mask reveal dari bawah (preserves gradient) */}
          <div className="mt-3 overflow-hidden">
            <motion.h2
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.05 }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent"
            >
              Eksplor Layanan Kami
            </motion.h2>
          </div>

          {/* Paragraph — word stagger dengan blur */}
          <p className="mt-4 text-base md:text-lg text-white/60 max-w-2xl mx-auto">
            <WordReveal
              text="Hover ke setiap frame, eksplor setiap sisi dari Negeri Kahiyang."
              delayChildren={0.25}
              stagger={0.04}
            />
          </p>

        </div>

        {/* Video grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full h-[600px] md:h-[700px] rounded-2xl overflow-hidden border border-white/10"
        >
          <DynamicFrameLayout frames={frames} className="w-full h-full" hoverSize={6} gapSize={4} />
        </motion.div>
      </div>
    </section>
  )
}
