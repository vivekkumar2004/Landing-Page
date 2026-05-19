import React from 'react';

export default function Process() {
  const steps = [
    { title: "Profile Evaluation", desc: "We review your professional journey—your impact, leadership, and contributions. This isn't a test; it's a conversation." },
    { title: "Academic Review", desc: "Our team matches your profile against 400+ partner universities to find the perfect institutional fit. Our network is a curated community." },
    { title: "Eligibility Consultation", desc: "A senior consultant walks you through your options and answers every question. One-to-one. No bots. No forms." },
    { title: "Documentation & Presentment", desc: "We handle the heavy lifting. You provide your professional history; we structure, format, and present it to the highest academic standards." },
    { title: "Recognition Pathway", desc: "Your profile is formally submitted for independent review. Upon approval, you are conferred your official Honorary Doctorate." }
  ];

  return (
    <section id='process' className="bg-zinc-950 text-zinc-100 py-24 px-4 md:px-8 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* HEADER: With consistency label */}
        <div className="text-center space-y-4">
          <span className="text-[10px] tracking-[0.3em] uppercase text-amber-500/80 font-mono">The Protocol</span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-zinc-100">The Recognition Path</h2>
          <p className="text-zinc-500 text-sm md:text-base font-light italic">
            A clear, transparent, and dignified journey from initial evaluation to final conferment.
          </p>
        </div>

        {/* Timeline Component */}
        <div className="relative border-l border-zinc-800 ml-4 md:ml-32 space-y-16">
          {steps.map((step, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              {/* Counter Indicator Dot */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-zinc-950 border border-zinc-700 text-[10px] flex items-center justify-center text-amber-500 font-mono group-hover:border-amber-500 transition-all duration-300">
                0{idx + 1}
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-serif font-medium text-zinc-100 group-hover:text-amber-500 transition-colors">
                  {step.title}
                </h3>
                <p className="text-zinc-400 font-light text-sm leading-relaxed max-w-2xl">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}