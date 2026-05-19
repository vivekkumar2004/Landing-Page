import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* BRAND COLUMN */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="text-2xl font-serif font-bold text-white tracking-tight">Techversity.ai</div>
            <p className="text-zinc-500 text-xs font-light leading-relaxed max-w-sm">
              The definitive authority in executive recognition. We specialize in mapping corporate achievement to institutional validation, ensuring your legacy is recognized on the global stage.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="space-y-4">
            <h4 className="text-white text-[10px] uppercase tracking-widest font-bold">Platform</h4>
            <ul className="space-y-3 text-zinc-500 text-xs">
              <li className="hover:text-amber-500 cursor-pointer transition-colors">Institutional Audit</li>
              <li className="hover:text-amber-500 cursor-pointer transition-colors">Credential Validation</li>
              <li className="hover:text-amber-500 cursor-pointer transition-colors">Dossier Access</li>
            </ul>
          </div>

          {/* LEGAL & CONTACT */}
          <div className="space-y-4">
            <h4 className="text-white text-[10px] uppercase tracking-widest font-bold">Governance</h4>
            <ul className="space-y-3 text-zinc-500 text-xs">
              <li className="hover:text-amber-500 cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-amber-500 cursor-pointer transition-colors">Terms of Service</li>
              <li className="hover:text-amber-500 cursor-pointer transition-colors">Verify Credential</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-zinc-700 text-[10px] font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} Techversity.ai — Global Academic Recognition
          </div>
          <div className="flex items-center gap-4 text-zinc-600">
            {/* Simple Security Badge Indicator */}
            <div className="flex items-center gap-1.5 px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-[9px] uppercase tracking-wider font-bold">Encrypted Dossier Flow</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}