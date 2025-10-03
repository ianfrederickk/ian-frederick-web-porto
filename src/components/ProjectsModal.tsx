import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ProjectsModal({ open, onClose, children, bgClass = "bg-white" }) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Fullscreen blur overlay */}
          <motion.div
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ pointerEvents: 'none' }}
          />
          <motion.div
            className={`
              relative rounded-none shadow-xl 
              w-11/12
              max-w-7xl 
              p-4 sm:p-8 
              min-h-[300px] overflow-y-auto 
              max-h-[95vh]
              ${bgClass} 
            `}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{ zIndex: 10 }}
          >
            <button
              className="absolute top-2 right-2 text-white hover:text-black z-20" // <-- Tambah z-20 agar tombol selalu di atas konten
              onClick={onClose}
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}