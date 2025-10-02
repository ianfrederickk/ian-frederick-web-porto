"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Definisikan item yang akan di-loop
const LOGO_ITEMS = [
    "AI / ML",
    "Data Science",
    "Blockchain / Web 3.0",
    "Dogs 🐶",
    "Smart Systems",
    "Big Data",
];

// Gabungkan konten dua kali untuk loop yang mulus
const LOOP_CONTENT = [...LOGO_ITEMS, ...LOGO_ITEMS];

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

  // Animasi logo terkait scroll
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
            Interested at
          </motion.h2>

          {/* Logo row - KONTENER MARQUEE */}
          <motion.div
            style={{ color: textColor, opacity: logoOpacity, y: logoY }}
            // Tambahkan overflow-hidden pada container luar
            className="w-full overflow-hidden whitespace-nowrap" 
          >
            <motion.div
              // Inisialisasi dan Animasi Loop Horizontal
              animate={{ 
                x: ['0%', '-50%'] // Animasi dari 0% ke -50% (Karena konten diduplikat, -50% adalah 100% lebar set konten asli)
              }} 
              transition={{ 
                x: {
                  repeat: Infinity, 
                  repeatType: "loop",
                  duration: 25, // Sesuaikan kecepatan
                  ease: "linear",
                },
              }}
              // Kelas kunci: inline-block agar lebar ditentukan oleh isinya
              className="inline-block" 
            >
              {/* Gunakan LOOP_CONTENT yang sudah diduplikasi */}
              {LOOP_CONTENT.map((item, index) => (
                <span key={index} className="inline-block px-8 text-xl font-light">
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}