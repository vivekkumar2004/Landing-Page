import React from 'react';
import Card from '../components/UI/Card'; 

export default function Process() {
  const steps = [
    { title: "Profile Evaluation", desc: "We review your professional journey—your impact, leadership, and contributions. This isn't a test; it's a conversation." },
    { title: "Academic Review", desc: "Our team matches your profile against 400+ partner universities to find the perfect institutional fit. Our network is a curated community." },
    { title: "Eligibility Consultation", desc: "A senior consultant walks you through your options and answers every question. One-to-one. No bots. No forms." },
    { title: "Documentation & Presentment", desc: "We handle the heavy lifting. You provide your professional history; we structure, format, and present it to the highest academic standards." },
    { title: "Recognition Pathway", desc: "Your profile is formally submitted for independent review. Upon approval, you are conferred your official Honorary Doctorate." }
  ];

  return (
    <section id='process' className="bg-[#EEF4FF] text-[#132238] py-24 px-4 md:px-8 border-t border-[#1A2B42]/10">
      <div className="max-w-4xl mx-auto space-y-16">
        
        <div className="text-center space-y-4">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#C89B2C] font-mono">The Protocol</span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#132238]">The Recognition Path</h2>
          <p className="text-[#132238]/70 text-sm md:text-base font-light italic">
            A clear, transparent, and dignified journey from initial evaluation to final conferment.
          </p>
        </div>

        {/* Timeline with Card integration */}
        <div className="relative border-l border-[#1A2B42]/20 ml-4 md:ml-32 space-y-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              {/* Counter Indicator Dot */}
              <div className="absolute -left-[17px] top-4 w-8 h-8 rounded-full bg-white border border-[#C89B2C] text-[10px] flex items-center justify-center text-[#C89B2C] font-mono group-hover:bg-[#C89B2C] group-hover:text-white transition-all duration-300">
                0{idx + 1}
              </div>
              
              {/* Step content inside glassmorphism Card */}
              <Card className="p-6 md:p-8 bg-white/60 backdrop-blur-md border-[#1A2B42]/10 hover:border-[#C89B2C]/30 transition-all duration-500">
                <h3 className="text-xl font-serif font-medium text-[#132238] mb-3 group-hover:text-[#C89B2C] transition-colors">
                  {step.title}
                </h3>
                <p className="text-[#132238]/70 font-light text-sm leading-relaxed">
                  {step.desc}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}