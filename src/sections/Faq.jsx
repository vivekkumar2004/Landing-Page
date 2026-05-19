import React, { useState } from 'react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    { q: "Is an honorary doctorate legitimate?", a: "Yes. These are formally conferred by fully accredited, recognized global universities under international academic charters to recognize outstanding real-world leadership and lifelong impact." },
    { q: "Difference between an honorary doctorate and a PhD?", a: "A PhD is a research degree earned via academic thesis. An honorary doctorate ('Honoris Causa') is an elite honor awarded by university boards in recognition of real-world systemic impact and professional achievement." },
    { q: "Who is eligible for this recognition?", a: "Eligibility is reserved for leaders who have made demonstrable, sustained contributions in their field. It is based on your professional milestones, leadership, and impact—not on age or traditional academic qualifications." },
    { q: "Can I use 'Dr.' before my name?", a: "Yes. Once conferred, it serves as an official academic title of honor. You can legally use it across executive environments, corporate boards, letterheads, and public forums." },
    { q: "How long does the entire process take?", a: "The pathway—from profile auditing and university mapping to board review and final conferment—typically takes between 4 to 8 weeks." },
    { q: "Which universities are in your network?", a: "We work with accredited institutions across Europe, the UK, and the Americas. Detailed institutional profiles are shared during your one-to-one consultation once we verify your professional fit." },
    { q: "How much does the recognition pathway cost?", a: "The investment varies depending on your chosen university and the complexity of your dossier. Your consultation will determine the exact pathway and the transparent investment required for your profile." },
    { q: "Is this recognition valid internationally?", a: "Yes. Honorary doctorates follow international academic protocols for recognition. They are globally accepted as valid professional titles of honor across almost all jurisdictions." },
    { q: "What documents do I need to start?", a: "You will need your standard CV/resume, a brief executive summary of your impact, and any secondary evidence of your professional history. A comprehensive checklist is provided upon starting your consultation." },
    { q: "Can this be done without traveling abroad?", a: "Yes. The entire audit, documentation, and board review process is conducted remotely. You do not need to travel to receive your credentials." }
  ];

  return (
    <section id="faq" className="bg-zinc-950 text-zinc-100 py-24 px-4 md:px-8 border-t border-zinc-900 scroll-mt-20">
      <div className="max-w-3xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="text-[10px] tracking-[0.3em] uppercase text-amber-500/80 font-mono">Knowledge Base</span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-zinc-100">Answering Institutional Queries</h2>
          <p className="text-zinc-500 font-light text-sm">Transparent answers regarding global validation structures.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-zinc-800 bg-zinc-900/30 rounded-lg overflow-hidden">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between font-serif text-zinc-200 hover:text-amber-500 transition-colors"
              >
                <span className="text-base">{faq.q}</span>
                <span className="text-zinc-500 font-light text-xl ml-4">{openIdx === idx ? '−' : '+'}</span>
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-5 text-zinc-400 text-sm font-light leading-relaxed border-t border-zinc-800/40 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}