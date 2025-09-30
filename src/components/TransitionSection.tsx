"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TransitionSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Background transisi: awal putih → hitam
  const background = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 1],
    ["#ffffff", "#ffffff", "#000000", "#000000"]
  );

  // Warna teks kebalikannya
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 1],
    ["#000000", "#000000", "#ffffff", "#ffffff"]
  );

  // Animasi fade-in untuk teks & logo
  const textOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const textY = useTransform(scrollYProgress, [0, 0.15], [40, 0]);

  const logoOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const logoY = useTransform(scrollYProgress, [0.1, 0.3], [40, 0]);

  return (
<motion.section
  ref={ref}
  style={{ background }}
  className="h-64 flex items-center transition-colors duration-700"
>
  <div className="container mx-auto max-w-7xl w-full">
    <div className="px-4 md:px-8 lg:px-16">
      {/* Title */}
      <motion.h2
        style={{ color: textColor, opacity: textOpacity, y: textY }}
        className="text-2xl md:text-3xl font-sans font-thin mb-6"
      >
        Backed by
      </motion.h2>

      {/* Logo row */}
      <motion.div
        style={{ color: textColor, opacity: logoOpacity, y: logoY }}
        className="flex items-center gap-8 flex-wrap justify-start text-lg font-sans"
      >
        <span>Bitfinex</span>
        <span>Founders Fund</span>
        <span>Framework</span>
        <span>Flow Traders</span>
        <span>DRW</span>
        <span>USDT</span>
      </motion.div>
    </div>
  </div>
</motion.section>



  );
}
