import React from "react";
import CourseCard from "../components/UI/CourseCard";

export default function CoursesPage() {
  const programmes = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Placeholder.png",
      title: "Doctor of Business Administration (DBA)",
      subtitle: "Professional Doctorate",
      description:
        "An executive program designed for senior leaders to master applied research, strategic decision-making, and organizational transformation.",
      image_url:
        "https://images.pexels.com/photos/7972741/pexels-photo-7972741.jpeg",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Placeholder.png",
      title: "Executive MBA (EMBA)",
      subtitle: "Executive Management",
      description:
        "Fast-track your path to the boardroom. This program focuses on global leadership, venture strategy, and high-stakes executive management.",
      image_url:
        "https://images.pexels.com/photos/7942550/pexels-photo-7942550.jpeg",
    },
    {
      logo: "https://images.pexels.com/photos/8106691/pexels-photo-8106691.jpeg",
      title: "Master of Business Administration (MBA)",
      subtitle: "General Management",
      description:
        "A comprehensive journey into modern business theory, perfect for ambitious professionals ready to scale their impact across industries.",
      image_url:
        "https://images.pexels.com/photos/7972741/pexels-photo-7972741.jpeg",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Placeholder.png",
      title: "Honorary Doctorate",
      subtitle: "Academic Recognition",
      description:
        "A prestigious recognition for individuals who have demonstrated exceptional leadership and contribution to their respective fields.",
      image_url:
        "https://images.pexels.com/photos/7973213/pexels-photo-7973213.jpeg",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Placeholder.png",
      title: "Doctor of Philosophy (PhD)",
      subtitle: "Research Doctorate",
      description:
        "A rigorous research-based program for scholars seeking to contribute original knowledge and expertise to the global business landscape.",
      image_url:
        "https://images.pexels.com/photos/7942493/pexels-photo-7942493.jpeg",
    },
  ];

  const specializations = [
    "Strategy",
    "AI in Business",
    "Finance",
    "Entrepreneurship",
  ];

  return (
    <div className="bg-[#EEF4FF] min-h-screen text-[#132238] py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Header Section */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-serif text-[#132238] tracking-tight">
            Explore <span className="text-[#2563EB] italic">Programmes</span>
          </h1>
          <p className="text-[#334155] max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Select from our globally accredited leadership pathways designed for
            the modern executive.
          </p>
        </div>

        {/* Programmes Grid */}
        <div className="space-y-10">
          <h2 className="text-sm uppercase tracking-[0.3em] text-[#2563EB] font-mono text-center">
            Available Pathways
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programmes.map((prog, idx) => (
              <CourseCard key={idx} {...prog} />
            ))}
          </div>
        </div>

        {/* Specialisations Section */}
        <div className="space-y-10">
          <h2 className="text-sm uppercase tracking-[0.3em] text-[#C89B2C] font-mono text-center">
            Specialisations
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {specializations.map((spec, idx) => (
              <div
                key={idx}
                className="px-6 py-3 border border-[#C89B2C]/20 bg-white/50 text-[#132238] text-sm tracking-wider uppercase backdrop-blur-sm"
              >
                {spec}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
