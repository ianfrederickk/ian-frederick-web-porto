"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated function signature to receive the event (e)
  const scrollToSection = (e, href) => {
    // 1. Prevent default anchor link behavior immediately.
    // This is crucial to stop the browser from instantly jumping/reloading.
    e.preventDefault(); 
    
    // 2. Close the menu right away.
    setIsMobileMenuOpen(false);

    // 3. Execute scroll without brittle setTimeout. 
    // The scroll will start immediately after the state change, allowing the 
    // Framer Motion exit animation to play simultaneously for a smoother visual transition.
    const element = document.querySelector(href === '#' ? 'body' : href);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    // If element is not found (e.g., initial load race condition), the browser will use the # anchor fallback.
  };

  const menuVariants = {
    open: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 18,
        staggerChildren: 0.05,
        delayChildren: 0.1
      } 
    },
    closed: { 
      y: '-100%', 
      opacity: 0,
      transition: { 
        type: "tween", 
        ease: "easeInOut",
        duration: 0.3 // Faster exit for better feel
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };


  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Changed to motion.a */}
            <motion.a
              href="#" // Added href for semantic correctness
              onClick={(e) => scrollToSection(e, '#')}
              className={`text-2xl font-sans font-thin leading-tight cursor-pointer transition-colors ${
              isScrolled 
                ? 'text-gray-900 hover:text-blue-500' 
                : 'text-gray-900 hover:text-blue-500' 
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ian's
            </motion.a>

            {/* Desktop Navigation - Dihapus/Disembunyikan */}
            <div className="hidden">
              {navItems.map((item, index) => (
                <motion.a // Changed to motion.a
                  key={item.href}
                  href={item.href} // Added href
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`hover:text-blue-500 transition-colors relative group font-extralight ${
                  isScrolled 
                    ? 'text-gray-700' 
                    : 'text-gray-700'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-1/12 transition-all duration-300"></span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button - ALWAYS VISIBLE */}
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
        </div>
      </motion.nav>

      {/* Mobile Menu (Layar Penuh) */}
      <AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate="open"
      exit="closed"
      className="fixed inset-0 z-40 flex flex-col"
    >
      {/* Bagian atas: Menu, hanya setengah layar */}
      <div className="h-2/3 bg-white overflow-y-auto pt-20 shadow-lg">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col space-y-6">
            {navItems.map((item, index) => (
              <motion.a // Changed to motion.a
                key={item.href}
                href={item.href} // Added href
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
      </div>

      {/* Bagian bawah: blur background */}
      <div className="h-1/2" onClick={() => setIsMobileMenuOpen(false)} />
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}
