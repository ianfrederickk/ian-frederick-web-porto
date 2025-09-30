import { motion } from 'framer-motion';
import { Heart, Code, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          {/* Logo and tagline */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold font-space text-plasma">
              CS Portfolio
            </h3>
            <p className="text-muted-foreground">
              Building the future with AI & Data Science
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4 text-plasma-blue" />
              <span>Computer Science Student</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-plasma-purple" />
              <span>AI Major @ BINUS</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-plasma-pink" />
              <span>Class B27</span>
            </div>
          </div>

          {/* Bottom section */}
          <div className="pt-8 border-t border-border/30 space-y-4">
            <p className="text-xs text-muted-foreground">
              © 2024 CS Portfolio. Built with React, Three.js, Framer Motion, and passion for AI.
            </p>
            <p className="text-xs text-muted-foreground">
              Open for data science internships and AI collaboration opportunities.
            </p>
          </div>

          {/* Animated gradient line */}
          <motion.div 
            className="w-32 h-1 bg-gradient-plasma-primary mx-auto rounded-full"
            animate={{
              background: [
                'linear-gradient(90deg, hsl(195, 100%, 50%), hsl(270, 100%, 70%))',
                'linear-gradient(90deg, hsl(270, 100%, 70%), hsl(320, 100%, 70%))',
                'linear-gradient(90deg, hsl(320, 100%, 70%), hsl(185, 100%, 50%))',
                'linear-gradient(90deg, hsl(185, 100%, 50%), hsl(195, 100%, 50%))'
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      </div>
    </footer>
  );
}