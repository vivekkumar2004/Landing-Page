import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import TestimonialCard from '../components/UI/TestimonialCard';
import testimonials1 from "../assets/Testimonials/testimonials1.jpeg"
import testimonials2 from "../assets/Testimonials/testimonials2.jpeg"
import testimonials3 from "../assets/Testimonials/testimonials3.jpeg"
import testimonials4 from "../assets/Testimonials/testimonials4.jpeg"

const testimonials = [
  {
    name: "Dr. John Carter",
    role: "Chief Strategy Officer",
    text: "The path to my doctorate was surprisingly streamlined. It allowed me to formalize my decades of corporate strategy experience into a recognized academic achievement without forcing me to take a career break.",
    linkedin: "https://linkedin.com",
    pfp: testimonials1
  },
  {
    name: "Dr. Emma Wilson",
    role: "Managing Director, FinTech",
    text: "I needed a program that respected my time as a busy executive. The faculty here doesn't just teach theory; they provide actionable insights that I started applying to our board meetings immediately.",
    linkedin: "https://linkedin.com",
    pfp: testimonials2
  },
  {
    name: "Dr. Sophia Laurent",
    role: "Founder, GreenEnergy",
    text: "Getting my honorary doctorate felt like the final piece of the puzzle for my career. The entire process was handled with such professionalism and discretion that I felt completely supported throughout.",
    linkedin: "https://linkedin.com",
    pfp: testimonials3
  },
  {
    name: "Dr. Arjun Mehta",
    role: "Director of Operations",
    text: "What stood out most was the quality of peer interaction. Being part of a cohort of high-level professionals made the learning experience incredibly rich and practically relevant to my daily challenges.",
    linkedin: "https://linkedin.com",
    pfp: testimonials4
  }
];

export default function Testimonial() {
  const controls = useAnimation();

  useEffect(() => {
    startAnimation();
  }, [controls]);

  const startAnimation = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: 25,
        ease: "linear"
      }
    });
  };

  return (
    <section className="py-10 md:py-14 bg-[#EEF4FF] overflow-hidden border-y border-[#1A2B42]/10">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-10 md:mb-12 px-4">
        <span className="inline-block text-[10px] uppercase tracking-[0.28em] text-[#C89B2C] font-semibold mb-4">
          Testimonials
        </span>

        <h2 className="font-serif text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-[#132238]">
          Trusted by Industry Leaders
        </h2>

        <p className="max-w-2xl mx-auto mt-5 text-[#132238]/70 text-sm md:text-base leading-relaxed font-normal">
          Hear from accomplished executives and founders who transformed their
          professional legacy into globally recognized academic distinction.
        </p>
      </div>

      {/* Scrolling Testimonials */}
      <motion.div
        className="flex gap-6 px-4 cursor-grab"
        animate={controls}
        onHoverStart={() => controls.stop()}
        onHoverEnd={startAnimation}
      >
        {[...testimonials, ...testimonials].map((testimonial, idx) => (
          <TestimonialCard key={idx} {...testimonial} />
        ))}
      </motion.div>
    </section>
  );
}