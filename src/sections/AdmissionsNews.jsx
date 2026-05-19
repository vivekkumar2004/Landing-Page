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
      color: "text-red-400 bg-red-500/5 border-red-500/10" 
    },
    { 
      univ: "Commonwealth University", 
      location: "London, United Kingdom", 
      scope: "Elite Corporate Validation",
      window: "Late Autumn Convocation Batch", 
      status: "Dossiers Active", 
      color: "text-emerald-400 bg-emerald-500/5 border-emerald-500/10" 
    },
    { 
      univ: "Azteca University", 
      location: "Chalco, Mexico", 
      scope: "Dual-Degree Global Laurels",
      window: "Pre-Screening Verification", 
      status: "Under Review", 
      color: "text-amber-400 bg-amber-500/5 border-amber-500/10" 
    }
  ];

  return (
    <section className="bg-zinc-950 text-zinc-100 py-28 px-4 md:px-8 relative z-20 border-b border-zinc-900">
      
      {/* Registry Intel Ticker */}
      <div className="max-w-6xl mx-auto mb-24">
        <div className="w-full bg-zinc-900/10 backdrop-blur-md border border-zinc-900/60 py-3.5 overflow-hidden rounded-xl flex items-center relative">
          <div className="absolute left-0 top-0 bottom-0 bg-zinc-950 px-4 flex items-center gap-2 border-r border-zinc-900 text-[10px] uppercase font-mono tracking-widest text-amber-500 z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse inline-block"></span>
            Registry Intel
          </div>
          <div className="whitespace-nowrap animate-marquee flex gap-28 text-xs text-zinc-500 font-mono uppercase tracking-wider pl-44">
            <span>• Cross-border credential mapping updated for 2026 international equivalency frameworks</span>
            <span>• Academic Council restricts annual elite corporate nominations to 150 globally</span>
            <span>• Peer-review panel logs increase in tech-founder dossier evaluations this quarter</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="text-xs tracking-[0.25em] uppercase text-amber-500/80 font-mono block">Institutional Registry</span>
          <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-zinc-100 max-w-3xl mx-auto leading-tight">
            Active Academic & Legacy <span className="italic font-serif text-zinc-400 font-normal">Validation Tracks</span>
          </h2>
        </div>

        {/* REFACTORED: Card Component used here */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <Card 
              key={index} 
              className="flex flex-col justify-between space-y-10 group relative overflow-hidden transition-all duration-500 hover:-translate-y-1.5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">{track.location}</span>
                  <span className={`text-[11px] font-mono uppercase tracking-widest font-semibold px-2.5 py-1 rounded border ${track.color}`}>
                    {track.status}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-normal text-zinc-200 group-hover:text-amber-500/90 transition-colors">
                  {track.univ}
                </h3>
                <p className="text-xs text-zinc-500 font-sans tracking-wide">{track.scope}</p>
              </div>
              
              <div className="border-t border-zinc-900/80 pt-6 flex flex-col gap-1">
                <span className="text-[9px] uppercase tracking-widest font-mono text-zinc-500">Current Session</span>
                <span className="text-sm font-sans font-light text-zinc-300 group-hover:text-zinc-100 transition-colors">
                  {track.window}
                </span>
              </div>
            </Card>
          ))}
        </div>

        <p className="text-center text-[11px] font-mono uppercase tracking-widest text-zinc-600">
          * Admission windows scale dynamically based on strict institutional quotas.
        </p>
      </div>
    </section>
  );
}