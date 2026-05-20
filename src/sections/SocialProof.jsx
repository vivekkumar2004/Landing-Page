import React from 'react';

export default function SocialProof() {
  const stats = [
    { value: "400+", label: "University Partnerships" },
    { value: "12+", label: "Countries Served" },
    { value: "2,000+", label: "Profiles Recognised" },
    { value: "8+", label: "Years of Experience" }
  ];

  return (
    <section className="bg-[#EEF4FF] border-y border-[#1A2B42]/10 py-16 px-4 relative z-20">
      
      {/* max-w-7xl karne se content screen par aur zyada fail jayega (corners ka space kam hoga) */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 text-center">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            className={`flex flex-col items-center justify-center space-y-3 ${
              // Border ko last element pe hata diya hai
              idx !== stats.length - 1 ? 'lg:border-r lg:border-[#1A2B42]/10' : ''
            }`}
          >
            <div className="text-4xl lg:text-5xl font-serif font-bold text-[#C89B2C] tracking-tighter">
              {stat.value}
            </div>
            
            <div className="text-[10px] lg:text-[11px] text-[#132238]/70 tracking-[0.25em] uppercase font-bold leading-relaxed max-w-[160px]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}