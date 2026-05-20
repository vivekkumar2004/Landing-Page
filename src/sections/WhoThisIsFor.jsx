import React from "react";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";

export default function WhoThisIsFor() {
  const audiences = [
    {
      role: "Founders",
      text: "You've built an empire from the ground up. An academic title is the final seal on your creation."
    },
    {
      role: "CEOs",
      text: "You command industries. An honorary doctorate adds a layer of intellectual authority that no MBA can replicate."
    },
    {
      role: "Doctors",
      text: "Clinical excellence saves lives; academic recognition secures your legacy for generations to come."
    },
    {
      role: "Authors",
      text: "Your words have shaped thought. Placing 'Dr.' before your name ensures they carry even more weight."
    },
    {
      role: "Social Leaders",
      text: "Change-makers deserve institutional backing. Global recognition amplifies your voice on the world stage."
    },
    {
      role: "Educators",
      text: "A life dedicated to knowledge deserves the ultimate peer-acknowledgement. Academia recognizing its own."
    }
  ];

  return (
    <section
      id="who"
      className="bg-[#EEF4FF] text-[#132238] py-12 md:py-14 px-4 md:px-8 lg:px-12 relative overflow-hidden border-t border-[#1A2B42]/10"
    >
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4F8CFF]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#C89B2C]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Container */}
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-10 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block text-[10px] uppercase tracking-[0.28em] text-[#C89B2C] font-semibold font-sans">
            Personalized Recognition
          </span>

          {/* Same font style as Navbar logo */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-semibold tracking-[0.08em] uppercase text-[#132238] leading-tight">
            Designed for the Accomplished
          </h2>

          <p className="max-w-2xl mx-auto text-[#132238]/70 text-sm md:text-base italic leading-relaxed font-normal">
            "We do not award credentials to those who seek them — we recognize
            leaders who have already earned them."
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {audiences.map((aud, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-2xl p-6 md:p-8 bg-white/70 backdrop-blur-md border border-[#1A2B42]/10 hover:border-[#C89B2C]/30 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#C89B2C]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Card Title - slightly lighter than before */}
              <h3 className="relative z-10 font-serif text-2xl md:text-[28px] font-medium tracking-[0.04em] uppercase text-[#132238]/85 mb-4 md:mb-5 group-hover:text-[#C89B2C] transition-colors duration-300">
                {aud.role}
              </h3>

              {/* Card Description - noticeably lighter for better contrast */}
              <p className="relative z-10 text-[#132238]/60 text-sm md:text-[15px] leading-relaxed font-normal">
                {aud.text}
              </p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center pt-1 md:pt-2">
          <a href="#contact">
            <Button
              variant="secondary"
              className="text-[#2563EB] hover:text-[#1D4ED8] font-semibold tracking-[0.18em] uppercase text-[10px]"
            >
              Secure Your Dossier Consultation
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}