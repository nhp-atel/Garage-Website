import { Link } from 'react-router-dom';
import { images } from '../config/images.js';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-50 pointer-events-none" aria-hidden="true" />
      <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-bronze-400/8 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="container-x relative pt-12 lg:pt-20 pb-16 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 lg:pr-4">
            <div className="eyebrow mb-7">Garage transformations</div>

            <h1 className="h-display text-[44px] sm:text-[56px] lg:text-[68px] leading-[1.02] text-balance">
              Premium garage{' '}
              <span className="italic font-normal text-bronze-600">transformations</span>.
            </h1>

            <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-stone-deep">
              Flooring, storage, lighting, and complete garage upgrades — designed to elevate your space.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="btn-primary">
                Book Free Estimate
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
              <Link to="/gallery" className="btn-secondary">View Gallery</Link>
            </div>

            <div className="mt-10 flex items-center gap-4 text-sm text-stone-deep">
              <div className="flex -space-x-1.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" className="h-4 w-4 text-bronze-500" fill="currentColor">
                    <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1z" />
                  </svg>
                ))}
              </div>
              <span>Trusted by homeowners across the Midwest.</span>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative">
              <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-lift bg-ink-800">
                <img
                  src={images.hero.src}
                  srcSet={images.hero.srcSet}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  alt={images.hero.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="eager"
                  fetchpriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/15 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-between p-6 lg:p-8">
                  <div className="flex items-center justify-between text-bone-100">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-bone-200/80 backdrop-blur-sm bg-ink-900/30 px-2.5 py-1 rounded-full">Featured project</span>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-bone-200/80 backdrop-blur-sm bg-ink-900/30 px-2.5 py-1 rounded-full">3-car garage</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="text-bone-100">
                      <div className="font-display text-2xl drop-shadow">Signature Build</div>
                      <div className="text-xs text-bone-200/85 mt-1">Polyaspartic floor · Custom cabinets · LED lighting</div>
                    </div>
                    <div className="grid place-items-center h-11 w-11 rounded-full bg-bronze-500 text-ink-900">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block absolute -left-6 lg:-left-10 top-12 bg-bone-50 rounded-xl shadow-lift border border-ink-800/8 p-4 w-56">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-bronze-600 mb-1.5">Three disciplines</div>
                <div className="font-display text-[15px] text-ink-900 leading-snug">Flooring + Storage + Lighting</div>
              </div>

              <div className="hidden sm:block absolute -right-4 lg:-right-8 top-1/2 -translate-y-1/2 bg-ink-800 rounded-xl shadow-lift p-4 w-52 text-bone-100">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-bronze-400 mb-1.5">Single team</div>
                <div className="font-display text-[15px] leading-snug">One coordinated process</div>
              </div>

              <div className="hidden sm:block absolute -left-4 lg:-left-8 -bottom-6 bg-bone-50 rounded-xl shadow-lift border border-ink-800/8 p-4 w-56">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-bronze-600 mb-1.5">Custom work</div>
                <div className="font-display text-[15px] text-ink-900 leading-snug">Built around your space</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24 pt-8 border-t border-ink-800/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { k: '12+', v: 'Years transforming garages' },
            { k: '500+', v: 'Garages transformed' },
            { k: '100%', v: 'In-house crews, no subcontractors' },
            { k: '5★', v: 'Avg. homeowner rating' },
          ].map((s) => (
            <div key={s.v} className="flex items-baseline gap-3">
              <div className="font-display text-3xl text-ink-900">{s.k}</div>
              <div className="text-[13px] text-stone-mid leading-snug max-w-[180px]">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
