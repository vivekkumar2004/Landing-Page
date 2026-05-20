import React, { useState } from "react";
import Card from "../components/UI/Card";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "Is an honorary doctorate legitimate?",
      a: "Yes. These are formally conferred by fully accredited, recognized global universities under international academic charters to recognize outstanding real-world leadership and lifelong impact.",
    },
    {
      q: "Difference between an honorary doctorate and a PhD?",
      a: "A PhD is a research degree earned via academic thesis. An honorary doctorate ('Honoris Causa') is an elite honor awarded by university boards in recognition of real-world systemic impact and professional achievement.",
    },
    {
      q: "Who is eligible for this recognition?",
      a: "Eligibility is reserved for leaders who have made demonstrable, sustained contributions in their field. It is based on your professional milestones, leadership, and impact — not on age or traditional academic qualifications.",
    },
    {
      q: "Can I use 'Dr.' before my name?",
      a: "Yes. Once conferred, it serves as an official academic title of honor. You can legally use it across executive environments, corporate boards, letterheads, and public forums.",
    },
    {
      q: "How long does the entire process take?",
      a: "The pathway — from profile auditing and university mapping to board review and final conferment — typically takes between 4 to 8 weeks.",
    },
    {
      q: "Which universities are in your network?",
      a: "We work with accredited institutions across Europe, the UK, and the Americas. Detailed institutional profiles are shared during your one-to-one consultation once we verify your professional fit.",
    },
    {
      q: "How much does the recognition pathway cost?",
      a: "The investment varies depending on your chosen university and the complexity of your dossier. Your consultation will determine the exact pathway and transparent investment required for your profile.",
    },
    {
      q: "Is this recognition valid internationally?",
      a: "Yes. Honorary doctorates follow international academic protocols for recognition. They are globally accepted as valid professional titles of honor across almost all jurisdictions.",
    },
    {
      q: "What documents do I need to start?",
      a: "You will need your standard CV/resume, a brief executive summary of your impact, and any secondary evidence of your professional history. A comprehensive checklist is provided upon starting your consultation.",
    },
    {
      q: "Can this be done without traveling abroad?",
      a: "Yes. The entire audit, documentation, and board review process is conducted remotely. You do not need to travel to receive your credentials.",
    },
  ];

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#EEF4FF] text-[#132238] py-24 px-4 md:px-8 border-t border-[#1A2B42]/10 scroll-mt-20"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {/* Blue Glow */}
        <div className="absolute top-[-180px] right-[-120px] w-[600px] h-[600px] bg-[#2563EB]/10 rounded-full blur-[160px]" />

        {/* Gold Glow */}
        <div className="absolute bottom-[-180px] left-[-120px] w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[160px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(18, 34, 56, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(18, 34, 56, 0.06) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* TOP CONTENT */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#1A2B42]/10 bg-white/80 backdrop-blur-xl mb-6">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-[#132238] font-medium">
              Knowledge Base
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl leading-tight font-serif text-[#132238]">
            Answering Executive
            <br />
            <span className="bg-gradient-to-r from-[#2563EB] via-[#4F8CFF] to-[#2563EB] bg-clip-text text-transparent italic">
              Institutional Queries
            </span>
          </h2>

          {/* Paragraph */}
          <p className="mt-6 max-w-2xl mx-auto text-[#334155] text-[15px] md:text-[16px] leading-relaxed">
            Every distinction pathway raises important questions. Here are the
            most common clarifications sought by founders, executives, and
            global professionals.
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-5">
          {faqs.map((faq, idx) => (
            <Card
              key={idx}
              className={`
                group overflow-hidden
                border
                backdrop-blur-2xl
                transition-all duration-500
                ${
                  openIdx === idx
                    ? "bg-white/90 border-[#1A2B42]/20 shadow-[0_0_35px_rgba(18,34,56,0.08)]"
                    : "bg-white/70 border-[#1A2B42]/10 hover:bg-white/90 hover:border-[#2563EB]/30"
                }
              `}
            >
              {/* QUESTION */}
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between px-7 py-6 text-left"
              >
                <span className="text-[#132238] text-[15px] md:text-[17px] leading-relaxed font-medium pr-5">
                  {faq.q}
                </span>

                {/* ICON */}
                <div
                  className={`
                    min-w-[36px]
                    min-h-[36px]
                    rounded-full
                    flex items-center justify-center
                    border
                    transition-all duration-300
                    ${
                      openIdx === idx
                        ? "bg-[#2563EB] border-[#2563EB] text-white"
                        : "border-[#1A2B42]/20 text-[#2563EB] group-hover:border-[#2563EB]/40"
                    }
                  `}
                >
                  <span className="text-lg leading-none">
                    {openIdx === idx ? "−" : "+"}
                  </span>
                </div>
              </button>

              {/* ANSWER */}
              <div
                className={`
                  grid transition-all duration-500 ease-in-out
                  ${
                    openIdx === idx
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }
                `}
              >
                <div className="overflow-hidden">
                  <div className="px-7 pb-7 pt-5 border-t border-[#1A2B42]/10">
                    <p className="text-[#334155] text-[15px] leading-relaxed font-light">
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
