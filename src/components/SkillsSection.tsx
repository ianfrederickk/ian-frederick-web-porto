"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);

  // Scroll progress hanya untuk section ini (0 -> 1)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.5 1", "0.5 0.2"], // mulai saat masuk viewport, selesai saat keluar
  });

  const logoBlocks = [
    { id: 1, color: "bg-emerald-500", content: "T" },
    { id: 2, color: "bg-emerald-500", content: "T" },
    { id: 3, color: "bg-gray-800", content: "Ᵽ" },
    { id: 4, color: "bg-green-500", content: "Ⓟ" },
    { id: 5, color: "bg-blue-600", content: "♭" },
    { id: 6, color: "bg-gray-800", content: "$" },
    { id: 7, color: "bg-gray-800", content: "▧" },
    { id: 8, color: "bg-yellow-700", content: "🌾" },
    { id: 9, color: "bg-gray-800", content: "💧" },
    { id: 10, color: "bg-gradient-to-br from-orange-400 to-red-500", content: "S" },

  ];

  // Variabel animasi untuk teks
  // const textOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  // const textX = useTransform(scrollYProgress, [0, 0.4], [50, 0]);

return (
    <section 
      ref={ref}
      id="skills"
      className="relative min-h-screen bg-white text-black py-20 px-4 md:px-8 lg:px-16 flex items-center justify-center overflow-hidden scroll-mt-20"
    >
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500 rounded-full mix-blend-multiply blur-2xl animate-pulse-slow delay-1000"></div>
      </div>
      
      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-col gap-12 lg:gap-0">
          {/* Teks di atas blok, mengisi lebar penuh */}
          <motion.div
            // style={{ opacity: textOpacity }}
            className="w-full flex flex-col justify-start relative px-4 md:pt-20"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans leading-tight mb-8 text-black drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              Technical Skills.
            </h2>
            <p className="text-xl text-neutral-400 leading-relaxed max-w-xl font-sans">
              Designed for stablecoins from the ground up, Plasma powers near instant, fee-free payments with institutional-grade security.
            </p>
          </motion.div>
          
          {/* Blok Logo di bawah teks, mengisi lebar penuh */}
          <div className="w-full flex flex-col items-start px-4 md:items-start">
            <motion.p
              // style={{ opacity: textOpacity }}
              className="text-lg text-neutral-400 mb-8 font-inter"
            >
            </motion.p>
            <div className="grid grid-cols-6 gap-0 w-full md:max-w-none">
              {logoBlocks.map((block, i) => {
                const opacity = useTransform(scrollYProgress, [i * 0.05, 0.15 + i * 0.05], [0, 1]);
                const scale = useTransform(scrollYProgress, [i * 0.05, 0.15 + i * 0.05], [0.5, 1]);
                const x = useTransform(scrollYProgress, [i * 0.05, 0.15 + i * 0.05], [i % 2 === 0 ? -30 : 30, 0]);

                return (
                  <motion.div
                    key={block.id}
                    style={{ opacity, scale, x }}
                    className={`
                      relative group
                      ${block.id === 1 ? 'col-span-2 row-span-2 text-5xl' : ''}
                      ${block.id >= 6 && block.id <= 9 ? 'text-black' : 'text-neutral-100'}
                      
                    `}
                  >
                    <div className={`flex items-center justify-center aspect-square w-full h-full ${block.color}`}>
                      <span className="text-2xl">{block.content}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
    
  );
  <div className="h-[50vh] bg-black"></div>
}
