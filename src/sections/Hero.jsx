import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Popup from "../components/UI/Popup";
import hero from "../assets/Home/hero.avif";

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="relative bg-gradient-to-br from-[#EEF4FF] via-[#F5F9FF] to-[#E6F0FF] text-[#132238] min-h-[90vh] flex items-center py-20 px-4 md:px-12 lg:px-24 overflow-hidden border-b border-[#1A2B42]/10">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-120px] right-[-100px] w-[650px] h-[650px] bg-[#4F8CFF]/10 rounded-full blur-[140px] hidden sm:block"></div>
          <div className="absolute bottom-[-150px] left-[-120px] w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px] hidden sm:block"></div>
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #1A2B42 1px, transparent 1px)",
              backgroundSize: "60px 100%",
            }}
          ></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,140,255,0.08),transparent_40%)]"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-[#1A2B42]/10 px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.2em] text-[#1A2B42] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
              Globally Accredited Doctorate Pathways
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight leading-[1.05] text-[#132238]">
              <span className="whitespace-nowrap">Bridging Decades of</span>
              <br />
              <span className="text-[#C89B2C] italic">
                Professional Excellence
              </span>{" "}
              <br />
              with Academic Prestige.
            </h1>

            <p className="text-[#4A5568] text-lg max-w-xl font-light leading-relaxed pl-6 border-l-2 border-[#D4AF37]">
              We don’t sell degrees. <strong>Techversity</strong> bridges the
              gap between your life’s work and the academic recognition it
              deserves.
            </p>

            <div className="pt-4 flex flex-col md:flex-row items-center justify-start gap-4">
              <Link to="/courses" className="w-full md:w-[200px]">
                <button className="w-full cursor-pointer h-[54px] bg-white text-[#2563EB] border border-[#2563EB]/20 hover:bg-[#EFF6FF] hover:text-[#1D4ED8] transition-all duration-300 text-xs font-bold uppercase tracking-widest rounded-md shadow-xl shadow-[#2563EB]/25">
                  Explore Courses
                </button>
              </Link>
              <a href="#contact" className="w-full md:w-[200px]">
                <button className="cursor-pointer w-full h-[54px] bg-white text-[#2563EB] border border-[#2563EB]/20 hover:bg-[#EFF6FF] hover:text-[#1D4ED8] transition-all duration-300 text-xs font-bold uppercase tracking-widest rounded-md shadow-xl shadow-[#2563EB]/25">
                  Book Consultant
                </button>
              </a>
            </div>
          </div>

          <div className="flex-1 w-full h-[300px] sm:h-[400px] lg:h-[500px]">
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/40 relative backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#132238]/10 to-transparent z-10"></div>
              <img
                src={hero}
                alt="Professional academic mentor portrait"
                loading="eager"
                decoding="async"
                fetchpriority="high"
                width="1200"
                height="900"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popup Rendered here */}
      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}