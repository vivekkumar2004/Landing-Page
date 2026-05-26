import React from "react";
import CourseCard from "../components/UI/CourseCard";
import courses1 from "../assets/Courses/courses1.jpg"
import courses2 from "../assets/Courses/courses2.jpg"
import courses3 from "../assets/Courses/courses3.jpg"
import courses4 from "../assets/Courses/courses4.jpg"

export default function CoursesPage() {
  const programmes = [
    {
      title: "Doctor of Business Administration (DBA)",
      subtitle: "Professional Doctorate",
      description:
        "An executive program designed for senior leaders to master applied research, strategic decision-making, and organizational transformation.",
      image_url:
        courses1,
    },
    {
      title: "Executive MBA (EMBA)",
      subtitle: "Executive Management",
      description:
        "Fast-track your path to the boardroom. This program focuses on global leadership, venture strategy, and high-stakes executive management.",
      image_url:
        courses2,
    },
    {
      title: "Master of Business Administration (MBA)",
      subtitle: "General Management",
      description:
        "A comprehensive journey into modern business theory, perfect for ambitious professionals ready to scale their impact across industries.",
      image_url:
        courses1,
    },
    {
      title: "Honorary Doctorate",
      subtitle: "Academic Recognition",
      description:
        "A prestigious recognition for individuals who have demonstrated exceptional leadership and contribution to their respective fields.",
      image_url:
        courses3,
    },
    {
      title: "Doctor of Philosophy (PhD)",
      subtitle: "Research Doctorate",
      description:
        "A rigorous research-based program for scholars seeking to contribute original knowledge and expertise to the global business landscape.",
      image_url:
        courses4,
    },
  ];

  const specializations = [
    "Strategy",
    "AI in Business",
    "Finance",
    "Entrepreneurship",
  ];

  return (
    <section className="bg-[#EEF4FF] text-[#132238] min-h-screen py-16 md:py-20 px-4 md:px-8 lg:px-12 border-t border-[#1A2B42]/10">
      {/* Container */}
      <div className="max-w-6xl mx-auto space-y-16 md:space-y-20">
        {/* Header Section */}
        <div className="text-center space-y-5 md:space-y-6">
          <span className="inline-block text-[10px] uppercase tracking-[0.28em] text-[#C89B2C] font-semibold">
            Academic Programmes
          </span>

          <h1 className="font-serif text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-[#132238]">
            Explore{" "}
            <span className="italic font-normal text-[#2563EB]">
              Programmes
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-[#334155]/80 text-sm md:text-base leading-relaxed font-normal">
            Select from globally accredited leadership pathways designed for
            executives, entrepreneurs, and professionals seeking advanced
            academic distinction.
          </p>
        </div>

        {/* Programmes Section */}
        <div className="space-y-8 md:space-y-10">
          <div className="text-center">
            <span className="inline-block text-[10px] uppercase tracking-[0.28em] text-[#2563EB] font-semibold">
              Available Pathways
            </span>
          </div>

          {/* Increased spacing between cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {programmes.map((prog, idx) => (
              <CourseCard key={idx} {...prog} />
            ))}
          </div>
        </div>

        {/* Specialisations Section */}
        <div className="space-y-8 md:space-y-10">
          <div className="text-center space-y-4">
            <span className="inline-block text-[10px] uppercase tracking-[0.28em] text-[#C89B2C] font-semibold">
              Specialisations
            </span>

            <p className="max-w-2xl mx-auto text-[#132238]/70 text-sm md:text-base leading-relaxed font-normal">
              Focus your academic journey on the disciplines shaping modern
              business and executive leadership.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {specializations.map((spec, idx) => (
              <div
                key={idx}
                className="px-5 md:px-6 py-3 rounded-full border border-[#C89B2C]/20 bg-white/70 backdrop-blur-sm text-[#132238] text-[11px] md:text-xs uppercase tracking-[0.22em] font-semibold shadow-sm hover:border-[#C89B2C]/40 hover:bg-white transition-all duration-300"
              >
                {spec}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}