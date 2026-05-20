import React from "react";

// Star Icon component
const StarIcon = () => (
  <svg className="w-3 h-3 text-[#F0B90B] fill-current" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function TestimonialCard({ name, role, text, linkedin, pfp }) {
  return (
    <div className="bg-white/90 p-6 rounded-2xl border border-[#2563EB]/10 hover:border-[#2563EB]/30 hover:scale-[1.02] transition-all duration-300 min-w-[300px] max-w-[300px] flex flex-col flex-shrink-0 cursor-pointer shadow-sm">
      <div className="text-[#2563EB] text-3xl mb-4 font-serif opacity-60">
        "
      </div>

      {/* Shortened Medium Length Message */}
      <p className="text-[#334155] text-sm italic mb-6 leading-relaxed flex-grow">
        "{text}"
      </p>

      <div className="flex items-center gap-4 mt-auto mb-6">
        <img
          src={pfp}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border border-[#2563EB]/10"
        />
        <div className="flex-grow">
          <h4 className="text-[#132238] font-medium text-sm">{name}</h4>
          <p className="text-[#2563EB] text-[10px] uppercase tracking-wider mb-1">
            {role}
          </p>
          {/* Star Rating */}
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
        </div>
      </div>

      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full py-2.5 bg-[#2563EB] border border-transparent text-white text-[10px] uppercase tracking-widest font-bold rounded-lg text-center hover:bg-[#1D4ED8] transition-all"
      >
        Connect
      </a>
    </div>
  );
}
