"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // 1. Add ref to measure the navigation bar's height
  const navRef = useRef(null);

  const navItems = [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scroll when menu is open
  useEffect(() => {
    // This is crucial for preventing body scroll when the menu is open, 
    // especially on iOS/Safari.
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
        // Cleanup function ensures scroll is restored when component unmounts
        document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

const [isTransitioning, setIsTransitioning] = useState(false);

const scrollToSection = (e, href) => {
  e.preventDefault();
  const target = document.querySelector(href === "#" ? "body" : href);
  if (!target) return;

  // Close mobile menu
  setIsMobileMenuOpen(false);

  // Start transition overlay
  setIsTransitioning(true);

  // Small delay to allow overlay to fade in before scroll starts
  setTimeout(() => {
    const navHeight = navRef.current ? navRef.current.offsetHeight : 0;
    const start = window.scrollY;
    const targetY =
      target === document.body
        ? 0
        : target.getBoundingClientRect().top + window.pageYOffset - navHeight;

    const distance = targetY - start;
    const duration = 1000; // slower = smoother
    const startTime = performance.now();

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const scrollStep = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);
      window.scrollTo(0, start + distance * eased);
      if (elapsed < duration) requestAnimationFrame(scrollStep);
      else {
        // Fade out overlay after scroll completes
        setTimeout(() => setIsTransitioning(false), 300);
      }
    };

    requestAnimationFrame(scrollStep);
  }, 150);
};

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 18,
        duration: 0.5,
      },
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.4,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 30 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.nav
        // 2. Attach the ref to the navigation element
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => scrollToSection(e, "#")}
            className={`text-2xl font-sans font-thin leading-tight cursor-pointer transition-colors ${
              isScrolled
                ? "text-gray-900 hover:text-blue-500"
                : "text-gray-900 hover:text-blue-500"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ian's
          </motion.a>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="text-gray-900 bg-transparent hover:text-gray-500 hover:bg-transparent p-0 h-auto w-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="!h-8 !w-8" />
            ) : (
              <Menu className="!h-8 !w-8" />
            )}
          </Button>
        </div>
      </motion.nav>
      
      <AnimatePresence>
            {isTransitioning && (
              <motion.div
                key="transition-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="
                  fixed inset-0 bg-white z-[999]
                  will-change-[opacity,transform]
                  transform-gpu
                  pointer-events-none
                "
                style={{
                  WebkitTransform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                }}
              />
            )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop (adds depth & Safari smoothness perception) */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu */}
            <motion.div
              key="menu"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-x-0 top-0 z-50 h-2/3 bg-white shadow-lg overflow-y-auto pt-20"
            >
              <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col space-y-6">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      variants={itemVariants}
                      className="text-left text-5xl font-sans font-thin leading-tight text-gray-900 py-3 relative group transition-colors hover:text-gray-600"
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-1/4 transition-all duration-300"></span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
