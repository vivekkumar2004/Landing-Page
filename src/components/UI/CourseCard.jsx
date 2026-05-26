import React from "react";
import { HashLink } from "react-router-hash-link";

export default function CourseCard({
  title,
  subtitle,
  description,
  image_url,
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.5)] min-h-[380px]">
      
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image_url}
          alt="Course background"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent"></div>
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-8">
        <div>
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.32em] text-[#C89B2C] font-semibold backdrop-blur-sm">
            Accredited Programme
          </span>

          <p className="mt-6 text-sm uppercase tracking-[0.28em] text-slate-400 font-medium">
            {subtitle}
          </p>

          <h2 className="mt-3 text-2xl md:text-3xl font-serif font-semibold text-white leading-tight">
            {title}
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-slate-300 max-w-xl font-light">
            {description}
          </p>
        </div>

        {/* ✅ Fixed — dono buttons same height aur alignment */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <button className="cursor-pointer w-full h-[42px] rounded-lg border border-white/10 bg-white/5 px-3 text-[11px] uppercase tracking-[0.28em] font-semibold text-white transition-all duration-300 hover:bg-white/10">
            View Details
          </button>
          
          <HashLink
            to="/#contact"
            className="w-full h-[42px] flex items-center justify-center rounded-lg bg-[#C89B2C] px-3 text-[11px] uppercase tracking-[0.28em] font-semibold text-slate-950 text-center transition-all duration-300 hover:bg-[#B88D28]"
          >
            Enroll Now
          </HashLink>
        </div>
      </div>
    </div>
  );
}