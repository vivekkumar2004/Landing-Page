import React from 'react';
import Card from '../components/UI/Card';

export default function Process() {
  const steps = [
    {
      title: "Profile Evaluation",
      desc: "We review your professional journey—your impact, leadership, and contributions. This isn't a test; it's a conversation."
    },
    {
      title: "Academic Review",
      desc: "Our team matches your profile against 400+ partner universities to find the perfect institutional fit. Our network is a curated community."
    },
    {
      title: "Eligibility Consultation",
      desc: "A senior consultant walks you through your options and answers every question. One-to-one. No bots. No forms."
    },
    {
      title: "Documentation & Presentment",
      desc: "We handle the heavy lifting. You provide your professional history; we structure, format, and present it to the highest academic standards."
    },
    {
      title: "Recognition Pathway",
      desc: "Your profile is formally submitted for independent review. Upon approval, you are conferred your official Honorary Doctorate."
    }
  ];

  return (
    <section
      id="process"
      className="bg-[#EEF4FF] text-[#132238] py-12 md:py-14 px-4 md:px-8 lg:px-12 border-t border-[#1A2B42]/10"
    >
      {/* Container */}
      <div className="max-w-4xl mx-auto space-y-10 md:space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="inline-block text-[10px] uppercase tracking-[0.28em] text-[#C89B2C] font-semibold">
            The Protocol
          </span>

          <h2 className="font-serif text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-[#132238]">
            The Recognition Path
          </h2>

          <p className="max-w-2xl mx-auto text-[#132238]/70 text-sm md:text-base italic leading-relaxed font-normal">
            A clear, transparent, and dignified journey from initial evaluation
            to final conferment.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-[#1A2B42]/15 ml-4 md:ml-10 space-y-6 md:space-y-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Step Number */}
              <div className="absolute -left-[18px] top-2 w-9 h-9 rounded-full bg-white border border-[#C89B2C] text-[10px] flex items-center justify-center text-[#C89B2C] font-semibold tracking-[0.05em] group-hover:bg-[#C89B2C] group-hover:text-white transition-all duration-300">
                0{idx + 1}
              </div>

              {/* Card */}
              <Card className="rounded-2xl p-6 md:p-8 bg-white/70 backdrop-blur-md border border-[#1A2B42]/10 hover:border-[#C89B2C]/30 shadow-sm hover:shadow-md transition-all duration-500">
                <h3 className="font-serif text-2xl md:text-3xl font-medium leading-tight text-[#132238] mb-4 group-hover:text-[#C89B2C] transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-[#132238]/70 text-sm md:text-[15px] leading-relaxed font-normal">
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