import { Link, useParams, Navigate } from 'react-router-dom';
import { serviceDetails } from '../config/serviceDetails.js';
import CTABanner from '../components/CTABanner.jsx';

const order = ['flooring', 'storage', 'lighting', 'wall-finishing', 'custom'];

export default function ServiceDetail() {
  const { slug } = useParams();
  const data = serviceDetails[slug];

  if (!data) return <Navigate to="/services" replace />;

  const idx = order.indexOf(data.slug);
  const next = order[(idx + 1) % order.length];
  const nextData = serviceDetails[next];

  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="container-x relative pt-12 lg:pt-16 pb-12 lg:pb-16">
          <div className="flex items-center gap-3 mb-6 text-[13px] text-stone-warm">
            <Link to="/services" className="hover:text-ink-800 transition">Services</Link>
            <span aria-hidden="true">/</span>
            <span className="text-ink-800">{data.eyebrow}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-6">{data.eyebrow}</div>
              <h1 className="h-display text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.04] text-balance">
                {data.title}
              </h1>
              <p className="mt-7 text-[17px] leading-relaxed text-stone-deep max-w-2xl">
                {data.intro}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link to="/contact" className="btn-primary">
                  Book free estimate
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
                <Link to="/gallery" className="btn-secondary">View gallery</Link>
              </div>

              <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-bronze-500/10 border border-bronze-500/20 text-[13px] text-bronze-700">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
                <span>Typical timeline: <strong className="text-bronze-700">{data.timeline}</strong></span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lift">
                <img
                  src={data.photos[0].src}
                  alt={data.photos[0].alt}
                  loading="eager"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-bone-50 text-[11px] uppercase tracking-[0.18em]">
                  <span className="px-2.5 py-1 rounded-full bg-ink-900/40 backdrop-blur">{data.label} / 05</span>
                  <span className="px-2.5 py-1 rounded-full bg-bronze-500 text-ink-900">Featured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone-100 border-y border-ink-800/8">
        <div className="container-x py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {data.sections.map((s) => (
              <div key={s.title} className="rounded-2xl bg-bone-50 border border-ink-800/10 p-7 lg:p-9">
                <h2 className="font-display text-[24px] text-ink-900 mb-6">{s.title}</h2>
                <ul className="space-y-5">
                  {s.items.map((it) => (
                    <li key={it.name} className="flex items-start gap-4">
                      <span className="mt-1 grid place-items-center h-7 w-7 rounded-full bg-bronze-500/15 text-bronze-700 shrink-0">
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <div>
                        <div className="font-medium text-ink-900 text-[15px] mb-1">{it.name}</div>
                        <div className="text-[14px] text-stone-deep leading-relaxed">{it.detail}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="container-x py-16 lg:py-20">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="eyebrow mb-4">Examples</div>
              <h2 className="h-display text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.05]">
                Recent {data.eyebrow.toLowerCase()} projects.
              </h2>
            </div>
            <Link to="/gallery" className="hidden sm:inline-flex text-[14px] text-ink-700 hover:text-bronze-700 transition">
              See full gallery →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {data.photos.slice(0, 6).map((p, i) => (
              <figure key={i} className="relative group aspect-[4/3] rounded-2xl overflow-hidden border border-ink-800/10 bg-bone-100">
                <img src={p.src} alt={p.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone-100 border-t border-ink-800/8">
        <div className="container-x py-12 lg:py-16">
          <Link
            to={`/services/${nextData.slug}`}
            className="group flex items-center justify-between gap-8 rounded-2xl bg-bone-50 border border-ink-800/10 hover:border-ink-800/30 hover:shadow-soft transition p-7 lg:p-9"
          >
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-bronze-600 mb-2">Next service</div>
              <div className="font-display text-[24px] lg:text-[28px] text-ink-900">{nextData.title.split('.')[0]}.</div>
            </div>
            <span className="grid place-items-center h-12 w-12 rounded-full bg-ink-800/[0.05] text-ink-800 group-hover:bg-bronze-500 group-hover:text-ink-900 transition shrink-0">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
