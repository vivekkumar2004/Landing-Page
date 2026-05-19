import React from 'react';

export default function Blog() {
  const articles = [
    { 
      title: "What Is an Honorary Doctorate and Why Are More Executives Pursuing One?", 
      desc: "Demystifying the strategic shift where top leaders look past traditional qualifications to establish an authentic industry legacy.", 
      tag: "Insights" 
    },
    { 
      title: "The 'Dr.' Title: How One Credential Changed the Way a CEO Was Seen in Every Room", 
      desc: "A narrative deep-dive into how premium academic alignment elevates perceived enterprise valuation and executive authority.", 
      tag: "Case Study" 
    },
    { 
      title: "5 Signs You've Already Earned an Honorary Doctorate—You Just Haven't Applied Yet", 
      desc: "Evaluate your ecosystem landmarks: massive scaling benchmarks, public platforms, and systemic institutional impact metrics.", 
      tag: "Guide" 
    }
  ];

  return (
    <section className="bg-zinc-950 text-zinc-100 py-24 px-4 md:px-8 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* HEADER: Authority Focused */}
        <div className="text-center space-y-4">
          <span className="text-[10px] tracking-[0.3em] uppercase text-amber-500/80 font-mono">Academic Library</span>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-zinc-100">Insights & Legacy Voice</h2>
          <p className="text-zinc-500 text-sm font-light">Deep analysis regarding executive prestige management and institutional authority.</p>
        </div>

        {/* ARTICLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <article key={idx} className="group bg-zinc-900/20 border border-zinc-800/50 rounded-lg p-8 flex flex-col justify-between hover:border-amber-500/30 transition-all duration-500">
              <div className="space-y-6">
                <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500 font-mono group-hover:text-amber-500 transition-colors">
                  {art.tag}
                </span>
                <h3 className="text-lg font-serif font-medium text-zinc-100 leading-snug group-hover:text-amber-500 transition-colors">
                  {art.title}
                </h3>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">
                  {art.desc}
                </p>
              </div>
              
              <div className="pt-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 group-hover:text-amber-500 transition-colors flex items-center gap-2 cursor-pointer">
                  Read Article <span>→</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}