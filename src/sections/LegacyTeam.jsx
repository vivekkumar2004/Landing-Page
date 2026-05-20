import React from 'react';
import Card from '../components/UI/Card';

export default function LegacyTeam() {
  const team = [
    { name: "Dr. Priya Nair", role: "Academic Relations", exp: "14 years connecting professionals with global universities.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=500&q=80" },
    { name: "Marcus Vance", role: "Global Profile Evaluator", exp: "Ex-admissions director mapping cross-border credentials.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=500&q=80" },
    { name: "Dr. Arvinder Singh", role: "Documentation Counsel", exp: "Ensuring regulatory and dossier structural perfection.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=500&q=80" }
  ];

  return (
    <section className="bg-[#EEF4FF] text-[#132238] py-24 px-4 md:px-8 border-t border-[#1A2B42]/10">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* VIDEO SECTION */}
        <div className="space-y-10">
          <div className="text-center space-y-4">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C89B2C] font-mono">Proof of Impact</span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-[#132238]">Interviews With Conferred Leaders</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[1, 2].map((video) => (
              <div key={video} className="relative aspect-video rounded-xl bg-white border border-[#1A2B42]/10 flex items-center justify-center overflow-hidden group cursor-pointer shadow-sm">
                <img 
                  src={video === 1 ? "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80" : "https://images.unsplash.com/photo-1484981138541-3d074aa97716?auto=format&fit=crop&w=600&q=80"} 
                  alt="Testimonial Thumbnail" 
                  className="absolute inset-0 w-full h-full object-cover filter brightness-70 group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="relative z-10 w-14 h-14 bg-[#C89B2C] text-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#B38927] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 ml-1"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ADVISORY COUNCIL */}
        <div className="border-t border-[#1A2B42]/10 pt-16 space-y-10">
          <div className="text-center space-y-4">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C89B2C] font-mono">Advisory Council</span>
            <h3 className="text-3xl md:text-5xl font-serif font-semibold text-[#132238]">The Advisory Council</h3>
            <p className="text-[#132238]/70 max-w-xl mx-auto text-sm md:text-base font-light">Meet the veteran consultants who bridge elite industry impact with international academia.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <Card key={i} className="group border-[#1A2B42]/10 bg-white/60 backdrop-blur-md hover:-translate-y-2 transition-all duration-300">
                <div className="aspect-[4/5] overflow-hidden rounded-lg mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-serif font-medium text-[#132238]">{member.name}</h4>
                  <p className="text-xs text-[#C89B2C] font-medium tracking-wide uppercase">{member.role}</p>
                  <p className="text-sm text-[#132238]/70 font-light pt-1">{member.exp}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}