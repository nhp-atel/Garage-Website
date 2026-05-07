import { Link } from 'react-router-dom';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import Process from '../components/Process.jsx';
import CTABanner from '../components/CTABanner.jsx';
import { images } from '../config/images.js';

export default function About() {
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="container-x relative pt-16 lg:pt-24 pb-12 lg:pb-16">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-6">About</div>
              <h1 className="h-display text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.04] text-balance">
                A premium standard for the most overlooked space in the home.
              </h1>
              <p className="mt-7 text-[17px] leading-relaxed text-stone-deep max-w-2xl">
                Midwest Garage Co. exists for one reason: most garages live far below the standard of the rest of the home. We change that — through a coordinated, professional process that treats the garage as a real space, not an afterthought.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lift">
                <img
                  src={images.hero.src}
                  alt={images.hero.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone-100 border-y border-ink-800/8">
        <div className="container-x py-20 lg:py-24">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-12">
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-bronze-600 mb-3">Our vision</div>
              <h2 className="font-display text-[24px] text-ink-900 leading-tight mb-4">A higher standard for every garage.</h2>
              <p className="text-[15px] leading-relaxed text-stone-deep">
                We believe a finished garage should feel as considered as the kitchen or living room. Premium materials, clean execution, and a layout designed around how you actually use the space.
              </p>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-bronze-600 mb-3">Our focus</div>
              <h2 className="font-display text-[24px] text-ink-900 leading-tight mb-4">Premium transformations only.</h2>
              <p className="text-[15px] leading-relaxed text-stone-deep">
                We don't do quick fixes. Every project is a coordinated transformation — flooring, storage, lighting, and finishing handled together, in the right sequence, by one team.
              </p>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-bronze-600 mb-3">Our promise</div>
              <h2 className="font-display text-[24px] text-ink-900 leading-tight mb-4">One team, start to finish.</h2>
              <p className="text-[15px] leading-relaxed text-stone-deep">
                You work with one point of contact from estimate through final walkthrough. No subcontractor handoffs, no juggling vendors, no unclear timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <Process />

      <section className="relative">
        <div className="container-x py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="eyebrow mb-5">Service area</div>
            <h2 className="h-display text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.05] text-balance">
              Serving homeowners across the Midwest.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-stone-deep max-w-2xl">
              We work with residential clients throughout the Midwest. Tell us where you're located when you reach out and we'll confirm availability and timeline for your area.
            </p>
            <Link to="/contact" className="btn-primary mt-8">
              Check availability
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
