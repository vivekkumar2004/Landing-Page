import React from 'react';

export default function SocialProof() {
  const stats = [
    { value: "400+", label: "University Partnerships" },
    { value: "12+", label: "Countries Served" },
    { value: "2,000+", label: "Profiles Recognised" },
    { value: "8+", label: "Years of Experience" }
  ];

  return (
    <section className="bg-[#EEF4FF] border-y border-[#1A2B42]/10 py-16 px-4 md:px-8 relative z-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 text-center">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            className={`space-y-2 md:px-4 ${
              idx !== stats.length - 1 ? 'md:border-r md:border-[#1A2B42]/10' : ''
            }`}
          >
            {/* Number color set to Gold (#C89B2C) */}
            <div className="text-3xl md:text-4xl font-serif font-medium text-[#C89B2C] tracking-tight">
              {stat.value}
            </div>
            
            {/* Label style tailored for the Soft Blue theme */}
            <div className="text-[10px] md:text-xs text-[#132238]/60 tracking-[0.2em] uppercase font-medium max-w-[150px] mx-auto leading-relaxed">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}