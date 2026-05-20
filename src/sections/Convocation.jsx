import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "https://images.pexels.com/photos/35486988/pexels-photo-35486988.jpeg",
  "https://images.pexels.com/photos/35264578/pexels-photo-35264578.jpeg",
  "https://images.unsplash.com/photo-1758270703761-9943411ec6d7?w=1200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&auto=format&fit=crop&q=80"
];

export default function Convocation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-[#EEF4FF] py-24 overflow-hidden border-y border-[#1A2B42]/10">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C89B2C]/30 bg-[#C89B2C]/5 text-[#C89B2C] text-[10px] uppercase tracking-[0.2em] font-medium">
            Moments of Achievement
          </div>
          
          {/* Apply Playfair Display exactly like the reference image */}
          <h2 
            className="text-4xl md:text-6xl text-[#132238] tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Global <span className="text-[#C89B2C] italic font-normal">Convocations</span>
          </h2>
        </div>

        {/* Main Image Slider Area */}
        <div className="relative h-[50vh] md:h-[70vh] w-full rounded-3xl overflow-hidden border border-[#C89B2C]/20 shadow-xl bg-white">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={images[currentIndex]}
                alt="Convocation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#132238]/80 via-transparent to-transparent"></div>
            </motion.div>
          </AnimatePresence>

          {/* Progress Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`h-1 transition-all duration-500 rounded-full ${
                  idx === currentIndex ? "w-12 bg-[#C89B2C]" : "w-4 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}