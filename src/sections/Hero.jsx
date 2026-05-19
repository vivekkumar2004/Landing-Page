import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-zinc-950 text-white min-h-[90vh] flex items-center justify-center py-20 px-4 md:px-8 overflow-hidden">
      {/* BACKGROUND VISUAL: Grand University Hall - Opacity improved for better visibility */}
      <div className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden bg-zinc-950">
        <img
          src="https://images.unsplash.com/photo-1758413352731-d6f9ce3b59d9?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Grand University Hall"
          className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-[0.4] select-none"
        />
        {/* Restructured mask: via-transparent kiya h taaki pillars aur roof ki lighting proper chamke */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#09090b_85%)] opacity-75"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fadeIn">
        {/* PREMIUM TAG */}
        <span className="inline-block text-[10px] md:text-xs tracking-[0.22em] uppercase text-amber-500 font-bold bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20">
          Exclusive Legacy Consultancy
        </span>

        {/* HEADLINE (H1) */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight max-w-4xl mx-auto leading-[1.12] text-zinc-100">
          Your Life's Work Deserves a Title That{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 italic font-serif">
            Matches It.
          </span>
        </h1>

        {/* SUBHEADLINE */}
        <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          For{" "}
          <span className="text-zinc-200 font-medium">
            Founders, CEOs, Doctors, Authors & Social Leaders
          </span>{" "}
          who have shaped their industry and earned global respect.
        </p>

        {/* CTA BUTTON: Polished Text Design (Cleaner, bolder, more professional) */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto text-center bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 px-10 py-4 rounded-lg font-sans text-sm font-semibold tracking-wide hover:from-amber-400 hover:to-amber-500 transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl shadow-amber-500/10"
          >
            Begin Your Recognition Journey →
          </a>
        </div>
      </div>
    </section>
  );
}
