import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import LogoIcon from "../assets/Logo/Logo.png";
// import logo from "../assets/Logo/logo.svg"
import bird from "../assets/Logo/bird.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 border-b border-[#1A2B42]/10 sticky top-0 z-50 px-4 md:px-8 py-4 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3 group cursor-pointer shrink-0"
        >
          <div className="flex items-center justify-center sm:gap-3">
            <img
              src={bird}
              alt="Techversity bird logo"
              className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 object-contain transition-transform duration-200 ease-out active:scale-95"
            />
            <div className="flex items-center text-sm md:text-base font-serif font-semibold tracking-[0.16em] uppercase text-[#132238]">
              <span>Techversity</span>
              <span className="text-[#2563EB] lowercase ml-2 font-sans font-semibold tracking-[0.1em]">
                .ai
              </span>
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden md:flex items-center gap-8 lg:gap-10 text-sm font-sans font-medium tracking-[0.02em] text-[#132238]">
            <HashLink
              to="/#who"
              className="relative py-1 hover:text-[#2563EB] transition-colors duration-300 group"
            >
              Eligibility
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#2563EB] transition-all duration-300 group-hover:w-full"></span>
            </HashLink>
            <HashLink
              to="/#process"
              className="relative py-1 hover:text-[#2563EB] transition-colors duration-300 group"
            >
              The Process
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#2563EB] transition-all duration-300 group-hover:w-full"></span>
            </HashLink>
            <HashLink
              to="/#universities"
              className="relative py-1 hover:text-[#2563EB] transition-colors duration-300 group"
            >
              Network
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#2563EB] transition-all duration-300 group-hover:w-full"></span>
            </HashLink>
            <HashLink
              to="/#faq"
              className="relative py-1 hover:text-[#2563EB] transition-colors duration-300 group"
            >
              Institutional FAQ
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#2563EB] transition-all duration-300 group-hover:w-full"></span>
            </HashLink>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-md border border-[#2563EB]/20 bg-white text-[#334155] hover:text-[#2563EB] transition-all duration-300"
          >
            {isMenuOpen ? (
              <span className="text-lg">✕</span>
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-[#2563EB]/10 flex flex-col gap-4 text-sm font-sans font-medium tracking-[0.02em] text-[#334155]">
          <HashLink
            to="/#who"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-[#2563EB]"
          >
            Eligibility
          </HashLink>
          <HashLink
            to="/#process"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-[#2563EB]"
          >
            The Process
          </HashLink>
          <HashLink
            to="/#universities"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-[#2563EB]"
          >
            Network
          </HashLink>
          <HashLink
            to="/#faq"
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-[#2563EB]"
          >
            Institutional FAQ
          </HashLink>
        </div>
      )}
    </nav>
  );
}
