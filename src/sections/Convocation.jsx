import React, { useState, useEffect } from "react";
// import convocation1 from "../assets/Convocation/convocation1.jpg";
// import convocation2 from "../assets/Convocation/convocation2.jpg";
// import convocation3 from "../assets/Convocation/convocation3.avif";
// import convocation4 from "../assets/Convocation/convocation4.avif";

import conv1 from "../assets/Convocation/conv1.avif"
import conv2 from "../assets/Convocation/conv2.avif"
import conv5 from "../assets/Convocation/conv3.avif"
import conv4 from "../assets/Convocation/conv4.avif"

const images = [conv1, conv2, conv5, conv4];

export default function Convocation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState([false, false, false, false]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleLoad = (idx) => {
    setLoaded((prev) => {
      const next = [...prev];
      next[idx] = true;
      return next;
    });
  };

  return (
    <section className="relative bg-[#EEF4FF] py-24 overflow-hidden border-y border-[#1A2B42]/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C89B2C]/30 bg-[#C89B2C]/5 text-[#C89B2C] text-[10px] uppercase tracking-[0.2em] font-medium">
            Moments of Achievement
          </div>

          <h2
            className="text-4xl md:text-6xl text-[#132238] tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Global{" "}
            <span className="text-[#C89B2C] italic font-normal">
              Convocations
            </span>
          </h2>
        </div>

        {/* Main Image Slider — fixed height to prevent CLS */}
        <div className="relative h-[50vh] md:h-[70vh] w-full rounded-3xl overflow-hidden border border-[#C89B2C]/20 shadow-xl bg-[#132238]">
          
          {/* All images preloaded, only current visible — no layout shift */}
          {images.map((src, idx) => (
            <div
              key={idx}
              className="absolute inset-0 w-full h-full"
              style={{ opacity: idx === currentIndex ? 1 : 0, transition: "opacity 0.8s ease-in-out" }}
            >
              <img
                src={src}
                alt="Convocation ceremony highlight"
                loading={idx === 0 || idx === currentIndex ? "eager" : "lazy"}
                decoding="async"
                width="1600"
                height="900"
                sizes="(max-width: 768px) 100vw, 1200px"
                onLoad={() => handleLoad(idx)}
                className="w-full h-full object-cover"
                style={{ opacity: loaded[idx] ? 1 : 0, transition: "opacity 0.3s" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#132238]/80 via-transparent to-transparent" />
            </div>
          ))}

          {/* Progress Indicators — same as before */}
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