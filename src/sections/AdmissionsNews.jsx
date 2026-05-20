import React from 'react';
import Card from '../components/UI/Card'; 

export default function AdmissionsNews() {
  const tracks = [
    { 
      univ: "European International University", 
      location: "Paris, France", 
      scope: "Senior Executive Doctorate",
      window: "Q2 Board Evaluation Cycle", 
      status: "Quota Closing", 
      color: "text-red-600 bg-red-50 border-red-200" 
    },
    { 
      univ: "Commonwealth University", 
      location: "London, United Kingdom", 
      scope: "Elite Corporate Validation",
      window: "Late Autumn Convocation Batch", 
      status: "Dossiers Active", 
      color: "text-emerald-700 bg-emerald-50 border-emerald-200" 
    },
    { 
      univ: "Azteca University", 
      location: "Chalco, Mexico", 
      scope: "Dual-Degree Global Laurels",
      window: "Pre-Screening Verification", 
      status: "Under Review", 
      color: "text-[#C89B2C] bg-[#C89B2C]/5 border-[#C89B2C]/20" 
    }
  ];

  return (
    <section className="relative bg-[#EEF4FF] text-[#132238] py-28 px-4 md:px-8 z-20 border-b border-[#1A2B42]/10 overflow-hidden">
      
      {/* Background Elements (Soft Blue Theme) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#132238_1px,transparent_1px),linear-gradient(to_bottom,#132238_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,155,44,0.08),transparent_60%)]"></div>

      {/* Registry Intel Ticker */}
      <div className="max-w-6xl mx-auto mb-24 relative z-10">
        <div className="w-full bg-white/50 backdrop-blur-md border border-[#1A2B42]/10 py-3.5 overflow-hidden rounded-xl flex items-center relative shadow-sm">
          <div className="absolute left-0 top-0 bottom-0 bg-[#132238] px-4 flex items-center gap-2 border-r border-[#C89B2C] text-[10px] uppercase font-mono tracking-widest text-white z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse inline-block"></span>
            Registry Intel
          </div>
          <div className="whitespace-nowrap animate-marquee flex gap-28 text-xs text-[#132238]/60 font-mono uppercase tracking-wider pl-44">
            <span>• Cross-border credential mapping updated for 2026 international equivalency frameworks</span>
            <span>• Academic Council restricts annual elite corporate nominations to 150 globally</span>
            <span>• Peer-review panel logs increase in tech-founder dossier evaluations this quarter</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4">
          <span className="text-xs tracking-[0.25em] uppercase text-[#C89B2C] font-mono block">Institutional Registry</span>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-[#132238] max-w-3xl mx-auto leading-tight">
            Active Academic & Legacy <span className="italic font-serif text-[#132238]/60 font-normal">Validation Tracks</span>
          </h2>
        </div>

        {/* Cards section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <Card 
              key={index} 
              className="flex flex-col justify-between space-y-10 group relative overflow-hidden transition-all duration-500 hover:-translate-y-1.5 bg-white/60 backdrop-blur-md border-[#1A2B42]/10 hover:border-[#C89B2C]/30 shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#132238]/50 font-mono uppercase tracking-wider">{track.location}</span>
                  <span className={`text-[11px] font-mono uppercase tracking-widest font-semibold px-2.5 py-1 rounded border ${track.color}`}>
                    {track.status}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-[#132238] group-hover:text-[#C89B2C] transition-colors">
                  {track.univ}
                </h3>
                <p className="text-xs text-[#132238]/60 font-sans tracking-wide">{track.scope}</p>
              </div>
              
              <div className="border-t border-[#1A2B42]/10 pt-6 flex flex-col gap-1">
                <span className="text-[9px] uppercase tracking-widest font-mono text-[#132238]/40">Current Session</span>
                <span className="text-sm font-sans font-light text-[#132238]">
                  {track.window}
                </span>
              </div>
            </Card>
          ))}
        </div>

        <p className="text-center text-[11px] font-mono uppercase tracking-widest text-[#132238]/40">
          * Admission windows scale dynamically based on strict institutional quotas.
        </p>
      </div>
    </section>
  );
}