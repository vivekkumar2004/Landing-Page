import Navbar from './components/Navbar'; 
import Hero from './sections/Hero';
import SocialProof from './sections/SocialProof';
import AdmissionsNews from './sections/AdmissionsNews';
import WhoThisIsFor from './sections/WhoThisIsFor';
import LegacyTeam from './sections/LegacyTeam';
import Process from './sections/Process';
import UniversityNetwork from './sections/UniversityNetwork';
import FAQ from './sections/FAQ'; // Yeh tumhara updated 10 FAQs wala section hai
import Blog from './sections/Blog';
import ContactForm from './sections/ContactForm';

import Footer from './components/Footer'; 

export default function App() {
  return (
    <div className="bg-zinc-950 min-h-screen selection:bg-amber-500/20 selection:text-amber-400 antialiased font-sans">
      <Navbar /> 
      <Hero />
      <SocialProof />
      <AdmissionsNews />
      <WhoThisIsFor />
      <LegacyTeam />
      <Process />
      <UniversityNetwork />
      <FAQ />
      <Blog />
      <ContactForm />
      <Footer /> 
    </div>
  );
}