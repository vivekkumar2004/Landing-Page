import React, { lazy, Suspense } from "react";

import Hero from "../sections/Hero";
import SocialProof from "../sections/SocialProof";
import AdmissionsNews from "../sections/AdmissionsNews";
import WhoThisIsFor from "../sections/WhoThisIsFor";
import Process from "../sections/Process";
import UniversityNetwork from "../sections/UniversityNetwork";
import LegacyTeam from "../sections/LegacyTeam";

// 🔥 heavy below-the-fold
const Testimonial = lazy(() => import("../sections/Testimonial"));
const Convocation = lazy(() => import("../sections/Convocation"));
const FAQ = lazy(() => import("../sections/FAQ"));
const Blog = lazy(() => import("../sections/Blog"));
const ContactForm = lazy(() => import("../sections/ContactForm"));

export default function Home() {
  return (
    <>
      {/* ✅ ABOVE THE FOLD (instant load) */}
      <Hero />
      <SocialProof />
      <AdmissionsNews />
      <WhoThisIsFor />
      <Process />
      <UniversityNetwork />
      <LegacyTeam />

      {/* 🔥 BELOW THE FOLD (lazy load) */}
      <Suspense
        fallback={
          <div className="py-10 text-center text-sm text-gray-400">
            Loading more sections...
          </div>
        }
      >
        <Testimonial />
        <Convocation />
        <FAQ />
        <Blog />
        <ContactForm />
      </Suspense>
    </>
  );
}