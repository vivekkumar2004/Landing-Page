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
    <section className="bg-[#EEF4FF] text-[#132238] py-14 md:py-16 px-4 md:px-8 lg:px-12 border-t border-[#1A2B42]/10">
      {/* Container */}
      <div className="max-w-6xl mx-auto space-y-10 md:space-y-12">

        {/* Header */}
        <div className="text-center space-y-4 md:space-y-5">
          <span className="inline-block text-[10px] uppercase tracking-[0.28em] text-[#C89B2C] font-semibold">
            Academic Library
          </span>

          <h2 className="font-serif text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-[#132238]">
            Insights & Legacy Voice
          </h2>

          <p className="max-w-2xl mx-auto text-[#132238]/70 text-sm md:text-base italic leading-relaxed font-normal">
            Deep analysis regarding executive prestige management and
            institutional authority.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {articles.map((art, idx) => (
            <Card
              key={idx}
              className="group flex flex-col justify-between rounded-2xl p-6 md:p-7 bg-white/70 backdrop-blur-md border border-[#1A2B42]/10 hover:border-[#C89B2C]/30 hover:bg-white/80 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 min-h-[340px]"
            >
              <div className="space-y-4">
                <span className="inline-block text-[9px] uppercase tracking-[0.22em] text-[#132238]/40 font-semibold group-hover:text-[#C89B2C] transition-colors duration-300">
                  {art.tag}
                </span>

                <h3 className="font-serif text-lg md:text-xl font-medium leading-snug text-[#132238] group-hover:text-[#C89B2C] transition-colors duration-300">
                  {art.title}
                </h3>

                <p className="text-[#132238]/70 text-sm leading-relaxed font-normal">
                  {art.desc}
                </p>
              </div>

              <div className="pt-8">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#C89B2C] font-semibold flex items-center gap-2 cursor-pointer">
                  Read Article →
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}