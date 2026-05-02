import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Problem from './components/Problem.jsx';
import Services from './components/Services.jsx';
import BeforeAfter from './components/BeforeAfter.jsx';
import Packages from './components/Packages.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Process from './components/Process.jsx';
import ServiceArea from './components/ServiceArea.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import CTAForm from './components/CTAForm.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-bone-50 text-ink-800">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Services />
        <BeforeAfter />
        <Packages />
        <WhyChooseUs />
        <Process />
        <ServiceArea />
        <Testimonials />
        <FAQ />
        <CTAForm />
      </main>
      <Footer />
    </div>
  );
}
