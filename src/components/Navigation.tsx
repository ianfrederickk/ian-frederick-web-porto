"use client";

import React from "react";
import StaggeredMenu from "./StaggeredMenu"; // adjust the import path if needed

const Navigation: React.FC = () => {
  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "Projects", ariaLabel: "View projects", link: "#projects" },
    { label: "About", ariaLabel: "Learn about me", link: "#about" },
    { label: "Skills", ariaLabel: "View skills", link: "#skills" },
  ];

  const socialItems = [
    { label: "Twitter", link: "https://twitter.com" },
    { label: "GitHub", link: "https://github.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full h-[80px] z-[1000] flex items-center justify-between px-6 py-4 bg-transparent"                                                                                    
      style={{
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >

      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#000000ff"
        openMenuButtonColor="#000000ff"
        changeMenuColorOnOpen={true}
        colors={["#B19EEF", "#5227FF"]}
        logoUrl="text-ians" 
        accentColor="#000000ff"
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
        isFixed={true}
      />
    </nav>
  );
};

export default Navigation;


// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function Navigation() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const navItems = [
//     { label: "Projects", href: "#projects" },
//     { label: "Skills", href: "#skills" },
//     { label: "About", href: "#about" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Disable body scroll when menu is open (Safari fix)
//   useEffect(() => {
//     document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
//   }, [isMobileMenuOpen]);

//   const scrollToSection = (e, href) => {
//     e.preventDefault();
//     setIsMobileMenuOpen(false);

//     const element = document.querySelector(href === "#" ? "body" : href);
//     if (element) {
//       // Safari-compatible smooth scroll
//       element.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   const menuVariants = {
//     open: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 90,
//         damping: 18,
//         duration: 0.5,
//       },
//     },
//     closed: {
//       opacity: 0,
//       y: "-100%",
//       transition: {
//         type: "tween",
//         ease: "easeInOut",
//         duration: 0.4,
//       },
//     },
//   };

//   const itemVariants = {
//     closed: { opacity: 0, y: 30 },
//     open: { opacity: 1, y: 0 },
//   };

//   return (
//     <>
//       <motion.nav
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           isScrolled ? "bg-white/90 backdrop-blur-md" : "bg-transparent"
//         }`}
//       >
//         <div className="container mx-auto px-6 py-4 flex items-center justify-between">
//           {/* Logo */}
//           <motion.a
//             href="#"
//             onClick={(e) => scrollToSection(e, "#")}
//             className={`text-2xl font-sans font-thin leading-tight cursor-pointer transition-colors ${
//               isScrolled
//                 ? "text-gray-900 hover:text-blue-500"
//                 : "text-gray-900 hover:text-blue-500"
//             }`}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Ian's
//           </motion.a>

//           {/* Mobile Menu Button */}
//           <Button
//             variant="ghost"
//             className="text-gray-900 bg-transparent hover:text-gray-500 hover:bg-transparent p-0 h-auto w-auto"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? (
//               <X className="!h-8 !w-8" />
//             ) : (
//               <Menu className="!h-8 !w-8" />
//             )}
//           </Button>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu Overlay + Drawer */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <>
//             {/* Backdrop (adds depth & Safari smoothness perception) */}
//             <motion.div
//               key="backdrop"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.4 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="fixed inset-0 bg-black z-40"
//               onClick={() => setIsMobileMenuOpen(false)}
//             />

//             {/* Menu */}
//             <motion.div
//               key="menu"
//               variants={menuVariants}
//               initial="closed"
//               animate="open"
//               exit="closed"
//               className="fixed inset-x-0 top-0 z-50 h-2/3 bg-white shadow-lg overflow-y-auto pt-20"
//             >
//               <div className="container mx-auto px-6 py-8">
//                 <div className="flex flex-col space-y-6">
//                   {navItems.map((item, index) => (
//                     <motion.a
//                       key={item.href}
//                       href={item.href}
//                       onClick={(e) => scrollToSection(e, item.href)}
//                       variants={itemVariants}
//                       className="text-left text-5xl font-sans font-thin leading-tight text-gray-900 py-3 relative group transition-colors hover:text-gray-600"
//                     >
//                       {item.label}
//                       <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-1/4 transition-all duration-300"></span>
//                     </motion.a>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
