import React, { useState } from "react";

export default function Navbar() {
  // Mobile menu ko open/close karne ke liye state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-zinc-950 border-b border-zinc-900 sticky top-0 z-50 px-4 md:px-8 py-4">
      {/* Main Bar */}
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* TECHVERSITY.AI BRANDING LOGO */}
        <div className="flex items-center gap-2.5 group cursor-pointer shrink-0">
          {/* Logo Icon Box - Restructured rounding and ambient glow */}
          <div className="w-6 h-6 md:w-6.5 md:h-6.5 bg-gradient-to-br from-amber-400 to-amber-600 rounded flex items-center justify-center shadow-md shadow-amber-500/5 transition-transform duration-500 group-hover:rotate-12">
            <span className="text-zinc-950 text-[10px] font-serif font-black tracking-tighter">
              T
            </span>
          </div>

          {/* FIXED BRAND TEXT: Capitalized & letter-spaced for executive authority */}
          <div className="flex items-center text-sm md:text-base font-serif font-bold tracking-[0.12em] uppercase text-zinc-100">
            <span>Techversity</span>
            {/* .ai Tag: Clean and perfectly aligned */}
            <span className="text-amber-500 font-sans text-[9px] font-bold bg-amber-500/10 px-1 py-0.5 rounded border border-amber-500/20 ml-1.5 lowercase tracking-normal">
              .ai
            </span>
          </div>
        </div>

        {/* DESKTOP NAV LINKS (md:flex par dikhenge, mobile par hidden) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 text-[11px] font-sans font-medium tracking-[0.18em] uppercase text-zinc-400">
          <a
            href="#who"
            className="relative py-1 hover:text-amber-400 transition-colors duration-300 group"
          >
            Eligibility
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#process"
            className="relative py-1 hover:text-amber-400 transition-colors duration-300 group"
          >
            The Process
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#universities"
            className="relative py-1 hover:text-amber-400 transition-colors duration-300 group"
          >
            Network
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#faq"
            className="relative py-1 hover:text-amber-400 transition-colors duration-300 group"
          >
            Institutional FAQ
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* RIGHT SIDE: CTA Button + Hamburger Menu for Mobile */}
        <div className="flex items-center gap-3 shrink-0">
          {/* CTA Button */}
          <a
            href="#contact"
            className="bg-zinc-900 text-amber-500 border border-amber-500/30 hover:bg-amber-500 hover:text-zinc-950 px-3 md:px-5 py-2 rounded-md text-[10px] md:text-xs font-medium tracking-wider uppercase transition-all duration-300 text-center"
          >
            <span className="sm:hidden">Eligibility</span>
            <span className="hidden sm:inline">Check Eligibility</span>
          </a>

          {/* HAMBURGER BUTTON (Sirf mobile/tablet par dikhega: md:hidden) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 rounded border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-amber-400 transition-colors"
            aria-label="Toggle Menu"
          >
            {/* Dynamic Icon toggling between ☰ and ✕ */}
            {isMenuOpen ? (
              <span className="text-xl font-light">✕</span>
            ) : (
              <div className="space-y-1.5">
                <span className="block w-4 h-0.5 bg-current"></span>
                <span className="block w-4 h-0.5 bg-current"></span>
                <span className="block w-4 h-0.5 bg-current"></span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN LINKS (Sirf tab khulega jab state true hogi aur screen choti hogi) */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-zinc-900 flex flex-col gap-4 text-xs font-sans font-medium tracking-widest uppercase text-zinc-400 animate-fadeIn">
          <a
            href="#who"
            onClick={() => setIsMenuOpen(false)} // Click hote hi menu close ho jaye
            className="hover:text-amber-400 py-1 transition-colors"
          >
            Eligibility
          </a>
          <a
            href="#process"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-amber-400 py-1 transition-colors"
          >
            The Process
          </a>
          <a
            href="#universities"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-amber-400 py-1 transition-colors"
          >
            Network
          </a>
          <a
            href="#faq"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-amber-400 py-1 transition-colors"
          >
            Institutional FAQ
          </a>
        </div>
      )}
    </nav>
  );
}
