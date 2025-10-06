"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useCursorPosition } from "@/hooks/useCursorPosition";

export default function AboutSection() {
  const cursor = useCursorPosition();
  const [showBlur, setShowBlur] = useState(false);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.5 1", "0.5 0.3"],
  });

  const logoBlocks = [
    { id: 1, color: "bg-emerald-500", content: "Py" },
    { id: 2, color: "bg-emerald-500", content: "ML" },
    { id: 3, color: "bg-gray-800", content: "NLP" },
    { id: 4, color: "bg-green-500", content: "CV" },
    { id: 5, color: "bg-blue-600", content: "JS" },
    { id: 6, color: "bg-gray-800", content: "RE" },
    { id: 7, color: "bg-gray-800", content: "TW" },
    { id: 8, color: "bg-yellow-700", content: "Git" },
    { id: 9, color: "bg-gray-800", content: "Research" },
    { id: 10, color: "bg-gradient-to-br from-orange-400 to-red-500", content: "SQL" },
  ];

  const textTransitionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      ref={ref}
      id="skills"
      className="relative min-h-screen w-full bg-white text-black py-20 px-4 md:px-8 lg:px-16 flex items-center justify-center overflow-hidden scroll-mt-20 snap-start"
      onMouseEnter={() => setShowBlur(true)}
      onMouseLeave={() => setShowBlur(false)}
    >
      <div className="w-[90%]">
        <div className="relative z-10 container mx-auto max-w-7xl">
          {/* HEADER */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={textTransitionVariants}
            viewport={{ once: true }}
            className="w-full flex flex-col justify-start relative px-2 mb-12 -mt-10 md:-mt-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-thin leading-tight mb-4 text-black">
              Technical Skills.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-400 leading-relaxed max-w-xl font-sans">
              Skilled in a variety of technical tools and platforms, with a
              commitment to continuously learning and applying new technologies
              to solve problems.
            </p>
          </motion.div>

          {/* GRID SKILLS */}
          <div className="w-full flex flex-col items-start px-2 md:items-start">
            <div
              className="
                grid 
                grid-cols-3 sm:grid-cols-4 md:grid-cols-6 
                gap-0 sm:gap-2 md:gap-0 
                w-full md:max-w-none
              "
            >
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
                      ${block.id >= 6 && block.id <= 9 ? 'text-white' : 'text-neutral-100'}
                    `}
                  >
                    <div
                      className={`
                        flex items-center justify-center aspect-square w-full h-full 
                        ${block.color} 
                        p-1 sm:p-2
                      `}
                    >
                      {/* RESPONSIVE TEXT SIZE */}
                      <span
                        className={`
                          text-sm sm:text-lg md:text-2xl font-sans font-light 
                          break-words text-center
                        `}
                      >
                        {block.content}
                      </span>
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
}
