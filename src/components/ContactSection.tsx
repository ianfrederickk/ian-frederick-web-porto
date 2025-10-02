"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-40 px-6 bg-white text-neutral-900 scroll-mt-20"
    >
      <div className="container mx-auto max-w-7xl relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left pt-20 mb-12 flex flex-col gap-4"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans font-thin leading-tight text-black drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
            Let's Connect!
          </h2>
          <p className="text-xl text-neutral-400 leading-relaxed max-w-xl font-sans">
            I'm currently seeking data science and AI internship positions. Feel
            free to reach out directly.
          </p>

          {/* Start Conversation Box (replace email input) */}
          <motion.a
            href="mailto:ian.hartanto@binus.ac.id?subject=Hi Ian! Are you interested to[Your Topic]"
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative inline-flex items-center justify-center 
              px-8 py-4 border-2 border-purple-600 text-purple-600 
              font-medium text-lg overflow-hidden group mt-6 max-w-xs
            "
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Background ungu animasi */}
            <span
              className="
                absolute inset-0 bg-fuchsia-500 translate-x-[-100%] 
                group-hover:translate-x-0 transition-transform duration-500 ease-out
              "
            />

            {/* Text + Panah */}
            <span
              className="
                relative flex items-center gap-2 
                transition-all duration-500 ease-out 
                group-hover:text-white group-hover:scale-110
              "
            >
              Start Conversation
              <ArrowRight
                className="w-5 h-5 transform -translate-x-3 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100"
              />
            </span>
          </motion.a>
        </motion.div>

        {/* Text Links (GitHub & LinkedIn) */}
        <div className="flex gap-8 mb-16">
          {[
            { label: "LinkedIn", link: "https://linkedin.com" },
            { label: "GitHub", link: "https://github.com" },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-lg font-medium text-neutral-700 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
                {item.label}
              </span>
              <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-1">
                →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
    
  );
}
