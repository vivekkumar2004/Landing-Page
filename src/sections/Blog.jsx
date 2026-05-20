import React from 'react';
import Card from '../components/UI/Card'; 

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
    <section className="bg-[#EEF4FF] text-[#132238] py-24 px-4 md:px-8 border-t border-[#1A2B42]/10">
      <div className="max-w-6xl mx-auto space-y-16">
        
        <div className="text-center space-y-4">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#C89B2C] font-mono">Academic Library</span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#132238]">Insights & Legacy Voice</h2>
          <p className="text-[#132238]/70 text-sm font-light">Deep analysis regarding executive prestige management and institutional authority.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <Card key={idx} className="group flex flex-col justify-between bg-white/60 backdrop-blur-md border-[#1A2B42]/10 hover:border-[#C89B2C]/30 hover:bg-white/80 transition-all duration-300">
              <div className="space-y-6">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#132238]/50 font-mono group-hover:text-[#C89B2C] transition-colors">
                  {art.tag}
                </span>
                <h3 className="text-lg font-serif font-medium text-[#132238] leading-snug group-hover:text-[#C89B2C] transition-colors">
                  {art.title}
                </h3>
                <p className="text-[#132238]/70 text-xs font-light leading-relaxed">
                  {art.desc}
                </p>
              </div>
              
              <div className="pt-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C89B2C] transition-colors flex items-center gap-2 cursor-pointer">
                  Read Article <span>→</span>
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}