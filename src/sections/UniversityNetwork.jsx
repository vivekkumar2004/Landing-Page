import React from "react";
import Card from "../components/UI/Card";

export default function UniversityNetwork() {
  const universityLogos = [
    {
      name: "Kennedy university",
      region: "ARGENTINA | ACCREDITED",
      logoUrl:
        "https://www.qahe.org.uk/wp-content/uploads/2023/11/Kennedy-University-520-x-330.jpg",
      website: "https://www.kennedy.edu.eu/",
    },
    {
      name: "SBS Swiss Business School",
      region: "SWITZERLAND | ACCREDITED",
      logoUrl:
        "https://tse3.mm.bing.net/th/id/OIP.OJM0W18NBsTGEcyPaXCWcAHaHa?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3g",
      website: "https://www.sbs.edu/",
    },
    {
      name: "European Global Institute",
      region: "EUROPE | GLOBAL",
      logoUrl:
        "https://images.shiksha.com/mediadata/images/1760004231phpupWQ4M.jpeg",
      website: "https://www.euglobal.edu.eu/",
    },
    {
      name: "ESIDT (Exeter)",
      region: "UK | ACADEMIC",
      logoUrl:
        "https://mrgglobal.com/wp-content/uploads/2023/04/Exeter-logo.jpg",
      website: "https://www.exeter.ac.uk/",
    },
    {
      name: "Texas Global",
      region: "USA | RESEARCH",
      logoUrl:
        "https://tse2.mm.bing.net/th/id/OIP.spZXrfikLsiDJput4kiezQHaDt?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3",
      website: "https://global.utexas.edu/",
    },
    {
      name: "Dunster House (Harvard)",
      region: "USA | COMMUNITY",
      logoUrl:
        "https://dunster.harvard.edu/sites/g/files/omnuum6341/files/hwp_hyard/logo/shield.png",
      website: "https://dunster.harvard.edu/",
    },
    {
      name: "American Military University",
      region: "USA | MANAGEMENT",
      logoUrl:
        "https://cdn.freelogovectors.net/wp-content/uploads/2022/03/amu_logo_freelogovectors.net_.png",
      website: "https://www.amu.apus.edu/",
    },
    {
      name: "Central Global University",
      region: "GEORGIA | RECOGNIZED",
      logoUrl:
        "https://tse2.mm.bing.net/th/id/OIP.SOLZ8xpJsgpq3xwccwkQXQHaHa?cb=thfvnextfalcon&rs=1&pid=ImgDetMain&o=7&rm=3",
      website: "https://www.centralglobaluniversity.org/",
    },
  ];

  return (
    <section
      id="universities"
      className="bg-[#EEF4FF] py-10 md:py-14 border-y border-[#1A2B42]/10 relative overflow-hidden"
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-10 md:mb-12 px-4">
        <span className="inline-block text-[10px] uppercase tracking-[0.28em] text-[#C89B2C] font-semibold">
          Institutional Credentials
        </span>

        <h3 className="font-serif text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-[#132238] mt-4">
          Globally Recognized Academic Network
        </h3>

        <p className="max-w-2xl mx-auto mt-5 text-[#132238]/70 text-sm md:text-base leading-relaxed font-normal">
          Collaborations with internationally recognized universities and
          institutions to deliver accredited doctoral and executive education
          pathways.
        </p>
      </div>

      {/* Logo Rows */}
      <div className="space-y-8 relative z-10">
        {[1, 2].map((row) => (
          <div
            key={`row-${row}`}
            className={`flex w-[200%] ${
              row === 1 ? "animate-slideLeft" : "animate-slideRight"
            } gap-8`}
          >
            {(row === 1
              ? [...universityLogos, ...universityLogos]
              : [...universityLogos, ...universityLogos].reverse()
            ).map((uni, i) => (
              <a
                key={`${uni.name}-${i}`}
                href={uni.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${uni.name} website`}
                title={uni.name}
                className="block"
              >
                <Card className="h-28 px-6 flex items-center gap-6 min-w-[360px] bg-white/60 backdrop-blur-md border-[#1A2B42]/10 hover:border-[#C89B2C]/30 hover:bg-white/80 transition-all duration-300 shadow-sm cursor-pointer group">
                  
                  <div className="w-16 h-16 flex items-center justify-center shrink-0 bg-white rounded-xl p-2 shadow-sm border border-[#1A2B42]/5">
                    <img
                      src={uni.logoUrl}
                      alt={`${uni.name} official logo`}
                      loading="lazy"
                      decoding="async"
                      width="64"
                      height="64"
                      className="max-h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>

                  <div className="flex flex-col text-left">
                    <span className="text-[11px] md:text-xs font-semibold tracking-[0.08em] text-[#132238] uppercase leading-tight">
                      {uni.name}
                    </span>

                    <span className="text-[9px] uppercase tracking-[0.22em] text-[#C89B2C] font-semibold mt-1.5">
                      {uni.region}
                    </span>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 bottom-0 left-0 w-40 bg-gradient-to-r from-[#EEF4FF] to-transparent pointer-events-none z-20" />
      <div className="absolute top-0 bottom-0 right-0 w-40 bg-gradient-to-l from-[#EEF4FF] to-transparent pointer-events-none z-20" />

      {/* Footer Note */}
      <div className="max-w-5xl mx-auto text-center mt-12 md:mt-14 px-4 relative z-10">
        <p className="text-[#132238]/50 text-xs md:text-sm leading-relaxed font-normal">
          Partner institutions and academic affiliations are showcased to
          highlight the international ecosystem supporting doctoral and
          executive education pathways.
        </p>
      </div>
    </section>
  );
}