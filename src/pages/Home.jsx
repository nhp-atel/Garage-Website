import Hero from '../components/Hero.jsx';
import BeforeAfter from '../components/BeforeAfter.jsx';
import Services from '../components/Services.jsx';
import Process from '../components/Process.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CTABanner from '../components/CTABanner.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <BeforeAfter />
      <Services />
      <Process />
      <Testimonials />
      <CTABanner />
    </>
  );
}
