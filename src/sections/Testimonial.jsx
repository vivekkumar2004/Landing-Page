import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import TestimonialCard from '../components/UI/TestimonialCard';

const testimonials = [
  { 
    name: "Dr. Ananya Sharma", 
    role: "Chief Strategy Officer", 
    text: "The path to my doctorate was surprisingly streamlined. It allowed me to formalize my decades of corporate strategy experience into a recognized academic achievement without forcing me to take a career break.", 
    linkedin: "https://linkedin.com", 
    pfp: "https://i.pravatar.cc/150?u=5" 
  },
  { 
    name: "Dr. Vikram Singh", 
    role: "Managing Director, FinTech", 
    text: "I needed a program that respected my time as a busy executive. The faculty here doesn't just teach theory; they provide actionable insights that I started applying to our board meetings immediately.", 
    linkedin: "https://linkedin.com", 
    pfp: "https://i.pravatar.cc/150?u=6" 
  },
  { 
    name: "Dr. Sophia Laurent", 
    role: "Founder, GreenEnergy", 
    text: "Getting my honorary doctorate felt like the final piece of the puzzle for my career. The entire process was handled with such professionalism and discretion that I felt completely supported throughout.", 
    linkedin: "https://linkedin.com", 
    pfp: "https://i.pravatar.cc/150?u=7" 
  },
  { 
    name: "Dr. Arjun Mehta", 
    role: "Director of Operations", 
    text: "What stood out most was the quality of peer interaction. Being part of a cohort of high-level professionals made the learning experience incredibly rich and practically relevant to my daily challenges.", 
    linkedin: "https://linkedin.com", 
    pfp: "https://i.pravatar.cc/150?u=8" 
  }
];

export default function Testimonial() {
  const controls = useAnimation();

  // Animation ko start karne ke liye useEffect
  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: { repeat: Infinity, duration: 25, ease: "linear" }
    });
  }, [controls]);

  return (
    <section className="py-24 bg-[#EEF4FF] overflow-hidden border-y border-[#1A2B42]/10">
      <div className="text-center mb-16 px-4">
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#C89B2C] font-mono mb-4 block">Testimonials</span>
        <h2 className="text-3xl md:text-4xl font-serif text-[#132238]">Trusted by Industry Leaders</h2>
      </div>

      <motion.div 
        className="flex gap-6 px-4 cursor-grab"
        animate={controls}
        onHoverStart={() => controls.stop()} 
        onHoverEnd={() => controls.start({ 
          x: ["0%", "-50%"], 
          transition: { repeat: Infinity, duration: 25, ease: "linear" } 
        })}
      >
        {[...testimonials, ...testimonials].map((t, idx) => (
          <TestimonialCard key={idx} {...t} />
        ))}
      </motion.div>
    </section>
  );
}