"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative h-screen w-full bg-white text-black py-20 px-4 md:px-8 lg:px-16 flex items-center justify-center overflow-hidden scroll-mt-20 snap-start"
    >
      <div className="w-[90%]">
        <div className="relative z-10 container mx-auto max-w-7xl">
          <div className="w-full flex flex-row justify-between items-start relative px-4 mb-12 -mt-10 md:-mt-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
              }}
              viewport={{ once: true }}
              className="flex flex-col justify-start"
              style={{ flex: 1 }}
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans font-thin leading-tight mb-4 text-black drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                Let's Connect!
              </h2>
              <p className="text-xl text-neutral-400 leading-relaxed max-w-xl font-sans">
                I'm currently seeking data science and AI internship positions. Feel
                free to reach out directly.
              </p>
            </motion.div>

            {/* RIGHT SIDE (Navigation Links) */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 ml-8 mt-2">
              {[
                { label: "Home", link: "#home" },
                { label: "Projects", link: "#projects" },
                { label: "Skills", link: "#skills" },
                { label: "About", link: "#about" },
                { label: "Linkedin", link: "https://www.linkedin.com/in/ian-frederick-801347346/" },
                { label: "GitHub", link: "https://github.com/ianganteng" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
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

          {/* EMAIL BUTTON */}
          <div className="w-full flex flex-col items-start px-4 md:items-start">
            <motion.a
              href="mailto:ian.hartanto@binus.ac.id?subject=Hi Ian! Are you interested to[Your Topic]"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center 
                px-8 py-4 border-2 border-purple-600 text-purple-600 
                font-medium text-lg overflow-hidden group mt-6 max-w-xs"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <span
                className="absolute inset-0 bg-fuchsia-500 translate-x-[-100%] 
                  group-hover:translate-x-0 transition-transform duration-500 ease-out"
              />
              <span
                className="relative flex items-center gap-2 
                  transition-all duration-500 ease-out 
                  group-hover:text-white group-hover:scale-110"
              >
                Start Conversation
                <ArrowRight
                  className="w-5 h-5 transform -translate-x-3 opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100"
                />
              </span>
            </motion.a>
          </div>

          <div className="flex justify-between items-center px-4 mt-10 pb-6">
            <p className="text-left text-md text-neutral-500 font-sans">
              © 2025 Portfolio by Ian Frederick. Built with React, Three.js, Framer Motion, and passion for AI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
