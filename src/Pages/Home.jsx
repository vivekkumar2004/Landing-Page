import Hero from '../sections/Hero';
import SocialProof from '../sections/SocialProof';
import AdmissionsNews from '../sections/AdmissionsNews';
import WhoThisIsFor from '../sections/WhoThisIsFor';
import LegacyTeam from '../sections/LegacyTeam';
import Process from '../sections/Process';
import UniversityNetwork from '../sections/UniversityNetwork';
import FAQ from '../sections/FAQ';
import Blog from '../sections/Blog';
import ContactForm from '../sections/ContactForm';
import Testimonial from '../sections/Testimonial';
import Convocation from '../sections/Convocation';

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <AdmissionsNews />
      <WhoThisIsFor />
      <LegacyTeam />
      <Process />
      <UniversityNetwork />
      <Convocation/>
      <Testimonial/>
      <FAQ />
      <Blog />
      <ContactForm />
    </>
  );
}