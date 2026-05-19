import React from 'react';
import Card from '../components/UI/Card'; // UI component import

export default function UniversityNetwork() {
  const universityLogos = [
    { name: "EUROPEAN INTL UNIV", city: "PARIS", crest: "🏛️" },
    { name: "AZTECA UNIVERSITY", city: "MEXICO", crest: "🛡️" },
    { name: "COMMONWEALTH UNIV", city: "LONDON", crest: "👑" },
    { name: "GENEVA INST MANAGEMENT", city: "SWITZERLAND", crest: "🎓" },
    { name: "OXFORD ACADEMIC NETWORK", city: "UK", crest: "📜" },
    { name: "GLOBAL BUSINESS SCHOOL", city: "AMERICAS", crest: "🌐" },
  ];

  return (
    <section id="universities" className="bg-zinc-950 py-20 border-y border-zinc-900 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-16 px-4">
        <span className="text-[10px] tracking-[0.3em] uppercase text-amber-500/80 font-mono">Institutional Network</span>
        <h3 className="text-xl font-serif mt-3 text-zinc-100">Global Validation Partners</h3>
      </div>

      <div className="space-y-6 relative z-10">
        {/* ROW 1: Slide Left */}
        <div className="flex w-[200%] animate-slideLeft gap-8 whitespace-nowrap">
          {[...universityLogos, ...universityLogos].map((logo, i) => (
            <Card key={i} className="h-20 px-6 flex items-center gap-4 min-w-[280px] max-w-[320px] bg-zinc-900/30 grayscale hover:grayscale-0 cursor-default">
              <div className="text-xl opacity-60 group-hover:opacity-100 transition-opacity shrink-0">{logo.crest}</div>
              <div className="flex flex-col text-left whitespace-normal max-w-[200px]">
                <span className="text-xs font-serif font-bold tracking-wide text-zinc-400 group-hover:text-zinc-200 transition-colors leading-tight">{logo.name}</span>
                <span className="text-[9px] uppercase tracking-widest text-zinc-600 group-hover:text-amber-500/80 transition-colors mt-0.5">{logo.city}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* ROW 2: Slide Right */}
        <div className="flex w-[200%] animate-slideRight gap-8 whitespace-nowrap">
          {[...universityLogos, ...universityLogos].reverse().map((logo, i) => (
            <Card key={i} className="h-20 px-6 flex items-center gap-4 min-w-[280px] max-w-[320px] bg-zinc-900/30 grayscale hover:grayscale-0 cursor-default">
              <div className="text-xl opacity-60 group-hover:opacity-100 transition-opacity shrink-0">{logo.crest}</div>
              <div className="flex flex-col text-left whitespace-normal max-w-[200px]">
                <span className="text-xs font-serif font-bold tracking-wide text-zinc-400 group-hover:text-zinc-200 transition-colors leading-tight">{logo.name}</span>
                <span className="text-[9px] uppercase tracking-widest text-zinc-600 group-hover:text-amber-500/80 transition-colors mt-0.5">{logo.city}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none z-20"></div>
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none z-20"></div>
    </section>
  );
}