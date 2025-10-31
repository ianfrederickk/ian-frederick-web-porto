"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Download, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [showBlur, setShowBlur] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Handler runs on every mouse move. We keep the cursor coords
    // and decide whether to show the blur based on distance to the hero rect.
    function handleMove(e: MouseEvent) {
      setCursor({ x: e.clientX, y: e.clientY });

      const el = sectionRef.current;
      if (!el) {
        setShowBlur(false);
        return;
      }

      const rect = el.getBoundingClientRect();

      // margin in px around the hero where the blur still remains visible
      const margin = 80;

      const insideX = e.clientX >= rect.left - margin && e.clientX <= rect.right + margin;
      const insideY = e.clientY >= rect.top - margin && e.clientY <= rect.bottom + margin;

      setShowBlur(insideX && insideY);
    }

    // Add listener on document so it captures when mouse goes over navbar etc.
    document.addEventListener("mousemove", handleMove);
    return () => document.removeEventListener("mousemove", handleMove);
  }, []);

  const handleGithubClick = () => {
    window.open("https://github.com/ianganteng", "_blank");
  };

  const handleResumeClick = () => {
    const resumeUrl = "/CV_2025_Ian_Frederick.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Ian_Frederick_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="h-screen w-full flex items-center justify-center relative bg-white overflow-visible"
      style={{ marginBottom: 0, paddingBottom: 0 }}
    >
      {/* BLUR: pointer-events-none so it never blocks clicks */}
      {showBlur && (
        <motion.div
          key="hero-blur"
          className="absolute inset-0 pointer-events-none z-[5]"
          style={{
            background: `radial-gradient(600px at ${cursor.x}px ${cursor.y}px, rgba(192, 64, 255, 0.25) 0%, rgba(192, 64, 255, 0.10) 70%, transparent 100%)`,
          }}
          animate={{
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Content (above blur) */}
      <div className="container mx-auto text-center max-w-4xl relative z-10 px-6">
        {/* ... your existing motion blocks unchanged ... */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-8xl font-bold font-space leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-gray-900 leading-tight font-sans font-thin drop-shadow-lg">
              Ian Frederick
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-900 md:text-xl max-w-2xl mx-auto leading-tight font-sans font-thin drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Computer Science Student (AI Major) <br />
            Open for Data Science and Computer Science Internships
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              onClick={handleResumeClick}
              className="bg-foreground text-background hover:bg-gray-200 font-medium px-8 py-3 text-base rounded-none"
            >
              <Download className="mr-2 h-4 w-4" />
              View CV
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-foreground/20 text-foreground hover:bg-foreground/20 hover:text-black backdrop-blur-sm px-8 py-3 text-base rounded-none"
              onClick={handleGithubClick}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-sm text-gray-900 font-sans font-thin leading-tight">
              Scroll to explore
            </span>
            <ChevronDown className="h-4 w-4 text-gray-800" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}