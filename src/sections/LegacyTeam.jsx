import React from "react";
import Card from "../components/UI/Card";
import img1 from "../assets/Image/img1.avif";
import img2 from "../assets/Image/img2.avif";
import img3 from "../assets/Image/img3.avif";
import img4 from "../assets/Image/img4.avif";
import img5 from "../assets/Image/img5.avif";

export default function LegacyTeam() {
  const team = [
    {
      name: "Dr. Priya Nair",
      role: "Academic Relations",
      exp: "14 years connecting professionals with global universities.",
      img: img1,
    },
    {
      name: "Marcus Vance",
      role: "Global Profile Evaluator",
      exp: "Ex-admissions director mapping cross-border credentials.",
      img: img2,
    },
    {
      name: "Dr. Arvinder Singh",
      role: "Documentation Counsel",
      exp: "Ensuring regulatory and dossier structural perfection.",
      img: img3,
    },
  ];

  return (
    <section className="bg-[#EEF4FF] text-[#132238] py-12 md:py-14 px-4 md:px-8 lg:px-12 border-t border-[#1A2B42]/10">
      {/* Container */}
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
        {/* VIDEO SECTION */}
        <div className="space-y-8 md:space-y-10">
          <div className="text-center space-y-4">
            <span className="inline-block text-[10px] uppercase tracking-[0.28em] text-[#C89B2C] font-semibold">
              Proof of Impact
            </span>

            <h2 className="font-serif text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-[#132238]">
              Interviews With Conferred Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[1, 2].map((video) => (
              <div
                key={video}
                className="relative aspect-video rounded-2xl bg-white border border-[#1A2B42]/10 flex items-center justify-center overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-all duration-500"
              >
                <img
                  src={video === 1 ? img4 : img5}
                  alt="Leadership interview thumbnail"
                  loading="lazy"
                  decoding="async"
                  width="1280"
                  height="720"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-700"
                />

                <div className="relative z-10 w-14 h-14 bg-[#C89B2C] text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ADVISORY COUNCIL */}
        <div className="border-t border-[#1A2B42]/10 pt-12 md:pt-14 space-y-8 md:space-y-10">
          <div className="text-center space-y-4">
            <span className="inline-block text-[10px] uppercase tracking-[0.28em] text-[#C89B2C] font-semibold">
              Advisory Council
            </span>

            <h3 className="font-serif text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-[#132238]">
              The Advisory Council
            </h3>

            <p className="max-w-2xl mx-auto text-[#132238]/70 text-sm md:text-base leading-relaxed font-normal">
              Meet the veteran consultants who bridge elite industry impact with
              international academia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {team.map((member, i) => (
              <Card
                key={i}
                className="group rounded-2xl p-6 md:p-8 border border-[#1A2B42]/10 bg-white/70 backdrop-blur-md shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-500"
                style ={{willChange: "transform"}}
              >
                <div className="aspect-[4/5] overflow-hidden rounded-xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img
                    src={member.img}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    width="480"
                    height="640"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-2">
                  <h4 className="font-serif text-xl md:text-2xl font-medium leading-tight text-[#132238]">
                    {member.name}
                  </h4>

                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#C89B2C] font-semibold">
                    {member.role}
                  </p>

                  <p className="pt-2 text-sm md:text-[15px] text-[#132238]/70 leading-relaxed font-normal">
                    {member.exp}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}