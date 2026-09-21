import Hero from '../components/Hero';
import TrustStats from '../components/TrustStats';
import AboutSection from '../components/AboutSection';
import Services from '../components/Services';
import PurohitBanner from '../components/PurohitBanner';
import PoojaRituals from '../components/PoojaRituals';
import WhyChooseUs from '../components/WhyChooseUs';
import ProcessSteps from '../components/ProcessSteps';
import Gallery from '../components/Gallery';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';
import ContactStrip from '../components/ContactStrip';

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustStats />
      <AboutSection />
      <Services />
      <PurohitBanner />
      <PoojaRituals />
      <WhyChooseUs />
      <ProcessSteps />
      <Gallery isPreview={true} />
      <CTASection />
      <ContactSection />
      <ContactStrip />
    </div>
  );
}
