import React from 'react';

export default function SocialProof() {
  const stats = [
    { value: "400+", label: "University Partnerships" },
    { value: "12+", label: "Countries Served" },
    { value: "2,000+", label: "Profiles Recognised" },
    { value: "8+", label: "Years of Experience" }
  ];

  return (
    /* TWEAKED: Changed bg to zinc-900 with clear top/bottom borders to break the continuity from Hero */
    <section className="bg-zinc-900 border-y border-zinc-800/80 py-10 px-4 md:px-8 relative z-20 shadow-xl">
      {/* Container with premium inner spacing */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 text-center">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            /* TWEAKED: Changed divider border color to match the new zinc-900 background seamlessly */
            className={`space-y-1.5 md:px-4 ${
              idx !== stats.length - 1 ? 'md:border-r md:border-zinc-800/50' : ''
            }`}
          >
            {/* The Earned Number: Crisp serif style matching elite credentials */}
            <div className="text-3xl md:text-4xl font-serif font-medium text-amber-500 tracking-tight">
              {stat.value}
            </div>
            
            {/* The Specific Label: Transformed into micro-tracking caps */}
            <div className="text-[10px] md:text-xs text-zinc-400 tracking-[0.15em] uppercase font-medium max-w-[180px] mx-auto leading-relaxed">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}