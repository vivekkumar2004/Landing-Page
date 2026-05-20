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
      color: "text-red-600 bg-red-50 border-red-200",
    },
    {
      univ: "Commonwealth University",
      location: "London, United Kingdom",
      scope: "Elite Corporate Validation",
      window: "Late Autumn Convocation Batch",
      status: "Dossiers Active",
      color: "text-emerald-700 bg-emerald-50 border-emerald-200",
    },
    {
      univ: "Azteca University",
      location: "Chalco, Mexico",
      scope: "Dual-Degree Global Laurels",
      window: "Pre-Screening Verification",
      status: "Under Review",
      color: "text-[#C89B2C] bg-[#C89B2C]/5 border-[#C89B2C]/20",
    },
  ];

  return (
    <section className="relative bg-[#EEF4FF] text-[#132238] py-12 md:py-16 px-4 md:px-8 lg:px-12 border-b border-[#1A2B42]/10 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025] bg-[linear-gradient(to_right,#132238_1px,transparent_1px),linear-gradient(to_bottom,#132238_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Soft Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C89B2C]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Registry Intel Ticker */}
      <div className="max-w-6xl mx-auto mb-8 md:mb-10 relative z-10">
        <div className="relative overflow-hidden rounded-2xl border border-[#1A2B42]/10 bg-white/75 backdrop-blur-md shadow-sm">
          {/* Label */}
          <div className="absolute left-0 top-0 bottom-0 bg-[#132238] px-4 md:px-5 flex items-center gap-2 text-[9px] uppercase tracking-[0.22em] font-semibold text-white z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            Registry Intel
          </div>

          {/* Marquee */}
          <div className="whitespace-nowrap animate-marquee flex gap-20 text-[10px] md:text-[11px] text-[#132238]/65 uppercase tracking-[0.08em] font-medium py-3 pl-36 md:pl-40">
            <span>
              • Cross-border credential mapping updated for 2026 international
              frameworks
            </span>
            <span>
              • Academic Council limits annual elite nominations to 150 profiles
            </span>
            <span>
              • Technology founders now represent the fastest-growing applicant
              segment
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto relative z-10 space-y-8 md:space-y-10">
        {/* Header */}
        <div className="text-center space-y-4 md:space-y-5">
          <span className="inline-block text-[10px] uppercase tracking-[0.28em] text-[#C89B2C] font-semibold">
            Institutional Registry
          </span>

          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-[#132238] max-w-4xl mx-auto">
            Active Academic & Legacy{" "}
            <span className="italic font-normal text-[#132238]/60">
              Validation Tracks
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-[#132238]/70 text-sm md:text-base leading-relaxed font-normal">
            Real-time visibility into current university nomination cycles,
            review windows, and institutional quota availability.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {tracks.map((track, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-3xl p-6 md:p-8 bg-white/80 backdrop-blur-md border border-[#1A2B42]/10 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-[#C89B2C]/30 transition-all duration-500"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C89B2C]/5 via-transparent to-[#2563EB]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Top Section */}
              <div className="relative z-10 space-y-5">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[9px] uppercase tracking-[0.18em] font-semibold text-[#132238]/45">
                    {track.location}
                  </span>

                  <span
                    className={`px-2.5 py-1 rounded-full border text-[8px] uppercase tracking-[0.18em] font-semibold whitespace-nowrap ${track.color}`}
                  >
                    {track.status}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif text-2xl md:text-[28px] font-medium leading-snug text-[#132238] group-hover:text-[#C89B2C] transition-colors duration-300">
                    {track.univ}
                  </h3>

                  <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#132238]/55">
                    {track.scope}
                  </p>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="relative z-10 mt-8 pt-6 border-t border-[#1A2B42]/6">
                <span className="block text-[8px] uppercase tracking-[0.22em] font-semibold text-[#132238]/30 mb-2">
                  Current Session
                </span>

                <p className="text-sm md:text-[15px] text-[#132238]/85 leading-relaxed font-normal">
                  {track.window}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Footer Note */}
        <div className="pt-2">
          <p className="text-center text-[9px] md:text-[10px] uppercase tracking-[0.28em] font-semibold text-[#132238]/30 leading-relaxed">
            * Admission windows adjust dynamically based on institutional board
            quotas and annual nomination limits.
          </p>
        </div>
      </div>
    </section>
  );
}