import Header from '@/components/Header';
import Hero from '@/components/Hero';
import EventInfo from '@/components/EventInfo';
import Countdown from '@/components/Countdown';
import About from '@/components/About';
import EventFeatures from '@/components/EventFeatures';
import CraftsmanshipGallery from '@/components/CraftsmanshipGallery';
import RegistrationCTA from '@/components/RegistrationCTA';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import SMSOptIn from '@/components/SMSOptIn';
import Footer from '@/components/Footer';
import MobileStickyCTA from '@/components/MobileStickyCTA';
import LegalPages from '@/components/LegalPages';

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <main>
        <Hero />
        <EventInfo />
        <Countdown />
        <About />
        <EventFeatures />
        <CraftsmanshipGallery />
        <RegistrationCTA />
        <Location />
        <Contact />
        <SMSOptIn />
      </main>
      <Footer />
      <MobileStickyCTA />
      <LegalPages />
    </div>
  );
}
