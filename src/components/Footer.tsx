import { motion } from 'framer-motion';
import { Heart, Code, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pt-8 mb-4 space-y-4 px-6 bg-white">
      <p className="text-left text-md text-muted-foreground">
        © 2025 Portfolio by Ian Frederick. Built with React, Three.js, Framer Motion, and passion for AI.
      </p>
    </footer>
  );
}