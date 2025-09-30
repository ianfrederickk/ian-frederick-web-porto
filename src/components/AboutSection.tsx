"use client";
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Img1 from '../assets/IMG_5605.png';
import Img2 from '../assets/IMG_5679.png';

// Example profile data. You can expand this with more profiles.
const profiles = [
  {
    quote: "We're talking about a market that could be trillions of dollars—stablecoins could fundamentally change how we think about money movement globally.",
    author: "Ian Frederick, Computer Science Student",
    image: Img1
  },
  
  {
    quote: "Through hands-on projects in machine learning and intelligent systems, I've developed a strong foundation in both the technical and analytical aspects of AI development.",
    author: "Ian Frederick, Computer Science Student",
    image: Img2
  }
];

export default function AboutSection() {
  const [currentProfile, setCurrentProfile] = useState(0);
  const controls = useAnimation();

  // Handle automatic page progression
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 20000); // Reveals next page automatically every 10 seconds

    return () => clearInterval(timer);
  }, [currentProfile]);

  // Animate the duration line
  useEffect(() => {
    controls.start({
      width: '100%',
      transition: { duration: 10, ease: 'linear' },
    });
  }, [currentProfile, controls]);

  const handleNext = () => {
    setCurrentProfile((prev) => (prev + 1) % profiles.length);
    controls.set({ width: '0%' }); // Reset duration line
  };

  const handlePrev = () => {
    setCurrentProfile((prev) => (prev - 1 + profiles.length) % profiles.length);
    controls.set({ width: '0%' }); // Reset duration line
  };

  const profile = profiles[currentProfile];

  return (
    <section className="min-h-screen w-full flex items-center justify-center relative p-0 overflow-hidden bg-neutral-900 font-sans">
      {/* Background Image with animation */}
      <motion.img
        key={currentProfile}
        src={profile.image}
        alt={profile.author}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      
      {/* Overlay to darken the background image */}
      <div className="absolute inset-0 z-10 bg-black opacity-50"></div>

      {/* Main content container with backdrop blur */}
      <div className="relative z-20 flex flex-col md:flex-row w-full max-w-7xl h-full md:h-[60vh] text-white p-8 md:p-16 overflow-hidden ">
        {/* Left column (empty for image space) */}
        <div className="relative w-full md:w-1/2 hidden md:block"></div>

        {/* Right column: Quote and Controls */}
        <div className="flex flex-col w-full md:w-1/2 p-4 md:p-8 rounded-lg bg-black bg-opacity-30">
          <motion.div
            key={currentProfile}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-grow flex flex-col justify-center space-y-8"
          >
            <p className="text-3xl md:text-4xl leading-snug font-semibold">
              "{profile.quote}"
            </p>
            <p className="text-xl md:text-2xl font-medium text-neutral-300">
              - {profile.author}
            </p>
          </motion.div>

          {/* Pagination and Duration Line */}
          <div className="mt-8">
            <div className="w-full h-1 bg-neutral-600 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white"
                initial={{ width: '0%' }}
                animate={controls}
              />
            </div>
            <div className="flex justify-between items-center mt-4 text-neutral-300">
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full border border-neutral-500 hover:bg-neutral-700 transition-colors"
                  aria-label="Previous quote"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full border border-neutral-500 hover:bg-neutral-700 transition-colors"
                  aria-label="Next quote"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <p className="text-sm">
                {currentProfile + 1} / {profiles.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
