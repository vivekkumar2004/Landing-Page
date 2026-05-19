import React from 'react';
import Card from '../components/UI/Card'; 
import Button from '../components/UI/Button'; // Button component import kiya

export default function WhoThisIsFor() {
  const audiences = [
    { role: "Founders", text: "You've built an empire from the ground up. An academic title is the final seal on your creation." },
    { role: "CEOs", text: "You command industries. An honorary doctorate adds a layer of intellectual authority that no MBA can replicate." },
    { role: "Doctors", text: "Clinical excellence saves lives; academic recognition secures your legacy for generations to come." },
    { role: "Authors", text: "Your words have shaped thought. Placing 'Dr.' before your name ensures they carry even more weight." },
    { role: "Social Leaders", text: "Change-makers deserve institutional backing. Global recognition amplifies your voice on the world stage." },
    { role: "Educators", text: "A life dedicated to knowledge deserves the ultimate peer-acknowledgement. Academia recognizing its own." }
  ];

  return (
    <section id='who' className="bg-zinc-950 text-zinc-100 py-20 px-4 md:px-8 relative overflow-hidden border-t border-zinc-900">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#27272a_0%,transparent_70%)] opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative">
        <div className="text-center space-y-4">
          <span className="text-[10px] tracking-[0.3em] uppercase text-amber-500/80 font-mono">Personalized Recognition</span>
          <h2 className="text-4xl md:text-6xl font-serif font-light text-zinc-100">Designed for the Accomplished</h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-base font-light italic">
            "We do not award credentials to those who seek them — we recognize leaders who have already earned them."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((aud, index) => (
            <Card key={index} className="group relative overflow-hidden p-10 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <h3 className="text-2xl font-serif font-medium text-zinc-100 mb-5 group-hover:text-amber-500 transition-colors duration-300">
                {aud.role}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed font-light tracking-wide">
                {aud.text}
              </p>
            </Card>
          ))}
        </div>

        {/* REFACTORED: Ab yahan hamara custom Button component use ho raha hai */}
        <div className="text-center pt-2">
          <a href="#contact">
            <Button variant="secondary">
              Secure Your Dossier Consultation
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}