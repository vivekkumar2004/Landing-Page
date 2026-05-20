import { Routes, Route } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Courses from "./Pages/Courses";

export default function App() {
  return (
    <div className="bg-zinc-950 min-h-screen selection:bg-amber-500/20 selection:text-amber-400 antialiased font-sans">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
      <Footer />

      <HashLink
        smooth
        to="/#contact"
        className="md:hidden fixed inset-x-4 bottom-4 z-50 mx-auto flex items-center justify-center rounded-full bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-slate-950/20 ring-1 ring-white/10 transition hover:bg-[#1D4ED8]"
        aria-label="Open contact form"
      >
        Book Consultant
      </HashLink>

      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noreferrer"
        className="hidden md:flex items-center justify-center fixed bottom-8 right-8 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-2xl shadow-slate-950/25 ring-1 ring-white/10 transition hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-7 w-7"
        >
          <path d="M20.52 3.48A11.8 11.8 0 0 0 12 .25C5.6.25.75 5.1.75 11.5c0 2.03.53 4.03 1.53 5.78L.25 23.25l5.09-1.66a11.46 11.46 0 0 0 6.16 1.68h.06c6.4 0 11.25-4.85 11.25-11.25 0-2.95-1.16-5.73-3.24-7.79Zm-8.5 16.4a9.25 9.25 0 0 1-4.76-1.31l-.34-.2-3.03.99.91-2.96-.22-.34A9.04 9.04 0 0 1 4.25 11.5 8.75 8.75 0 0 1 12 2.75c4.83 0 8.75 3.92 8.75 8.75S16.83 20.9 12.02 19.88Zm4.7-6.92c-.2-.1-1.2-.6-1.4-.66-.2-.08-.34-.12-.5.12-.16.24-.6.66-.74.8-.14.14-.28.16-.52.06-.24-.1-.98-.36-1.87-1.15-.7-.62-1.17-1.38-1.3-1.62-.14-.24-.02-.38.1-.5.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.5-1.2-.7-1.66-.18-.44-.36-.38-.5-.38-.12 0-.26 0-.4 0a1.22 1.22 0 0 0-.9.42c-.3.34-1.16 1.14-1.16 2.78s1.19 3.22 1.35 3.44c.16.22 2.32 3.55 5.6 4.98 3.27 1.42 3.27 0.95 3.86 0.9.6-.06 1.93-.79 2.2-1.55.28-.78.28-1.45.2-1.6-.08-.16-.3-.25-.5-.35Z"/>
        </svg>
      </a>
    </div>
  );
}
