import React from "react";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";

export default function WhoThisIsFor() {
  const audiences = [
    {
      role: "Founders",
      text: "You've built an empire from the ground up. An academic title is the final seal on your creation.",
    },
    {
      role: "CEOs",
      text: "You command industries. An honorary doctorate adds a layer of intellectual authority that no MBA can replicate.",
    },
    {
      role: "Doctors",
      text: "Clinical excellence saves lives; academic recognition secures your legacy for generations to come.",
    },
    {
      role: "Authors",
      text: "Your words have shaped thought. Placing 'Dr.' before your name ensures they carry even more weight.",
    },
    {
      role: "Social Leaders",
      text: "Change-makers deserve institutional backing. Global recognition amplifies your voice on the world stage.",
    },
    {
      role: "Educators",
      text: "A life dedicated to knowledge deserves the ultimate peer-acknowledgement. Academia recognizing its own.",
    },
  ];

  return (
    <section
      id="who"
      className="bg-[#EEF4FF] text-[#132238] py-20 px-4 md:px-8 relative overflow-hidden border-t border-[#1A2B42]/10"
    >
      {/* Background Glows (Matching Hero Theme) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4F8CFF]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C89B2C]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        <div className="text-center space-y-4">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#C89B2C] font-mono">
            Personalized Recognition
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#132238]">
            Designed for the Accomplished
          </h2>
          <p className="text-[#132238]/70 max-w-xl mx-auto text-base font-light italic">
            "We do not award credentials to those who seek them — we recognize
            leaders who have already earned them."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((aud, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden p-10 hover:-translate-y-2 bg-white/60 backdrop-blur-md border-[#1A2B42]/10 hover:border-[#C89B2C]/30 shadow-sm transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#C89B2C]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <h3 className="text-2xl font-serif font-medium text-[#132238] mb-5 group-hover:text-[#C89B2C] transition-colors duration-300">
                {aud.role}
              </h3>
              <p className="text-[#132238]/70 text-sm leading-relaxed font-light tracking-wide">
                {aud.text}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center pt-2">
          <a href="#contact">
            <Button
              variant="secondary"
              className="text-[#2563EB] hover:text-[#1D4ED8]"
            >
              Secure Your Dossier Consultation
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
