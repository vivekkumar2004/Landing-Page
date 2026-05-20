import React, { useState } from "react";
import Card from "../components/UI/Card";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "Is an honorary doctorate legitimate?",
      a: "Yes. These are formally conferred by fully accredited, recognized global universities under international academic charters to recognize outstanding real-world leadership and lifelong impact."
    },
    {
      q: "Difference between an honorary doctorate and a PhD?",
      a: "A PhD is a research degree earned via academic thesis. An honorary doctorate ('Honoris Causa') is an elite honor awarded by university boards in recognition of real-world systemic impact and professional achievement."
    },
    {
      q: "Who is eligible for this recognition?",
      a: "Eligibility is reserved for leaders who have made demonstrable, sustained contributions in their field. It is based on your professional milestones, leadership, and impact — not on age or traditional academic qualifications."
    },
    {
      q: "Can I use 'Dr.' before my name?",
      a: "Yes. Once conferred, it serves as an official academic title of honor. You can legally use it across executive environments, corporate boards, letterheads, and public forums."
    },
    {
      q: "How long does the entire process take?",
      a: "The pathway — from profile auditing and university mapping to board review and final conferment — typically takes between 4 to 8 weeks."
    },
    {
      q: "Which universities are in your network?",
      a: "We work with accredited institutions across Europe, the UK, and the Americas. Detailed institutional profiles are shared during your one-to-one consultation once we verify your professional fit."
    },
    {
      q: "How much does the recognition pathway cost?",
      a: "The investment varies depending on your chosen university and the complexity of your dossier. Your consultation will determine the exact pathway and transparent investment required for your profile."
    },
    {
      q: "Is this recognition valid internationally?",
      a: "Yes. Honorary doctorates follow international academic protocols for recognition. They are globally accepted as valid professional titles of honor across almost all jurisdictions."
    },
    {
      q: "What documents do I need to start?",
      a: "You will need your standard CV/resume, a brief executive summary of your impact, and any secondary evidence of your professional history. A comprehensive checklist is provided upon starting your consultation."
    },
    {
      q: "Can this be done without traveling abroad?",
      a: "Yes. The entire audit, documentation, and board review process is conducted remotely. You do not need to travel to receive your credentials."
    }
  ];

  return (
    <section
      id="faq"
      className="bg-[#EEF4FF] text-[#132238] py-10 md:py-14 px-4 md:px-8 lg:px-12 border-t border-[#1A2B42]/10 scroll-mt-20"
    >
      {/* Container */}
      <div className="max-w-4xl mx-auto space-y-10 md:space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 md:space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1A2B42]/10 bg-white/80 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#132238] font-semibold">
              Knowledge Base
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-[#132238]">
            Answering Executive
            <br />
            <span className="italic font-normal text-[#132238]/60">
              Institutional Queries
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-[#334155]/80 text-sm md:text-base leading-relaxed font-normal">
            Every distinction pathway raises important questions. Here are the
            most common clarifications sought by founders, executives, and global
            professionals.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, idx) => (
            <Card
              key={idx}
              className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                openIdx === idx
                  ? "bg-white/95 border-[#1A2B42]/20 shadow-sm"
                  : "bg-white/70 border-[#1A2B42]/10 hover:border-[#2563EB]/20"
              }`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between px-5 md:px-6 py-4 md:py-5 text-left"
              >
                <span className="text-[#132238] text-sm md:text-base font-medium leading-relaxed pr-4 md:pr-6">
                  {faq.q}
                </span>

                <div
                  className={`min-w-[32px] h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    openIdx === idx
                      ? "bg-[#2563EB] border-[#2563EB] text-white"
                      : "border-[#1A2B42]/10 text-[#2563EB]"
                  }`}
                >
                  <span className="text-lg leading-none">
                    {openIdx === idx ? "−" : "+"}
                  </span>
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIdx === idx
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-[#1A2B42]/5">
                    <p className="mt-4 text-[#334155]/80 text-sm md:text-[15px] leading-relaxed font-normal">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}