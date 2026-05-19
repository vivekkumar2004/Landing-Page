import React from 'react';

export default function Footer() {
  const links = {
    platform: [
      { name: "Institutional Audit", path: "#" },
      { name: "Credential Validation", path: "#" },
      { name: "Dossier Access", path: "#" },
    ],
    governance: [
      { name: "Privacy Policy", path: "#" },
      { name: "Terms of Service", path: "#" },
      { name: "Verify Credential", path: "#" },
    ]
  };

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

          {/* DYNAMIC LINKS: Platform */}
          <div className="space-y-4">
            <h4 className="text-white text-[10px] uppercase tracking-widest font-bold">Platform</h4>
            <ul className="space-y-3 text-zinc-500 text-xs">
              {links.platform.map((l) => (
                <li key={l.name} className="hover:text-amber-500 cursor-pointer transition-colors">{l.name}</li>
              ))}
            </ul>
          </div>

          {/* DYNAMIC LINKS: Governance */}
          <div className="space-y-4">
            <h4 className="text-white text-[10px] uppercase tracking-widest font-bold">Governance</h4>
            <ul className="space-y-3 text-zinc-500 text-xs">
              {links.governance.map((l) => (
                <li key={l.name} className="hover:text-amber-500 cursor-pointer transition-colors">{l.name}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-zinc-700 text-[10px] font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} Techversity.ai — Global Academic Recognition
          </div>
          
          {/* SECURE BADGE: Consistent with UI design */}
          <div className="flex items-center gap-1.5 px-3 py-1 bg-zinc-900/50 rounded-full border border-zinc-800 text-zinc-400">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[9px] uppercase tracking-wider font-bold">Encrypted Dossier Flow</span>
          </div>
        </div>
      </div>
    </footer>
  );
}