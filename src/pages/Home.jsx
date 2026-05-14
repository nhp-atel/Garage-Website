import Hero from '../components/Hero.jsx';
import BeforeAfter from '../components/BeforeAfter.jsx';
import Services from '../components/Services.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import Process from '../components/Process.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CTABanner from '../components/CTABanner.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <BeforeAfter />
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <CTABanner />
    </>
  );
}
