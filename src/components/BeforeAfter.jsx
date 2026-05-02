import { useRef, useState } from 'react';
import { images } from '../config/images.js';

export default function BeforeAfter() {
  const [pos, setPos] = useState(52);
  const ref = useRef(null);

  const onMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(4, Math.min(96, x)));
  };

  return (
    <section id="transformations" className="bg-ink-900 text-bone-100 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-[0.04] pointer-events-none" />
      <div className="absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full bg-bronze-500/8 blur-3xl" />

      <div className="container-x relative py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left content */}
          <div className="lg:col-span-5 lg:pt-6">
            <div className="eyebrow !text-bronze-400 mb-6">Before · After</div>
            <h2 className="h-display !text-bone-50 text-[36px] sm:text-[44px] lg:text-[50px] leading-[1.05] text-balance">
              From basic garage to a finished extension of your home.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-bone-200/75 max-w-md">
              A complete garage transformation is more than a new floor. It is a better layout, better lighting, smarter storage, and a cleaner daily experience.
            </p>

            <div className="mt-9 space-y-4">
              {[
                { t: 'Easier to keep organized', d: 'Storage planned around how you actually use the space.' },
                { t: 'More usable space', d: 'Vertical and overhead solutions free up the floor.' },
                { t: 'Higher-end appearance', d: 'Finishes that match the standard of the rest of the home.' },
              ].map((b) => (
                <div key={b.t} className="flex gap-4">
                  <span className="mt-1 grid place-items-center h-6 w-6 rounded-full bg-bronze-500/20 text-bronze-400 shrink-0">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-bone-50 font-medium text-[15px]">{b.t}</div>
                    <div className="text-[13px] text-bone-200/60">{b.d}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#quote" className="btn-bronze mt-9">
              See your transformation
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>

          {/* Right slider */}
          <div className="lg:col-span-7">
            <div
              ref={ref}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-lift"
              onMouseMove={onMove}
              onTouchMove={onMove}
            >
              {/* AFTER (full) */}
              <div className="absolute inset-0">
                <img
                  src={images.after.src}
                  srcSet={images.after.srcSet}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  alt={images.after.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-ink-900/30 via-transparent to-transparent" />
                <div className="absolute bottom-5 right-5 px-3 py-1.5 rounded-full bg-bronze-500 text-ink-900 text-[11px] font-semibold uppercase tracking-wider shadow-soft">
                  After
                </div>
              </div>

              {/* BEFORE clipped */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)` }}
              >
                <img
                  src={images.before.src}
                  srcSet={images.before.srcSet}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  alt={images.before.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-ink-900/40 via-transparent to-ink-900/30" />
                <div className="absolute bottom-5 left-5 px-3 py-1.5 rounded-full bg-bone-50 text-ink-900 text-[11px] font-semibold uppercase tracking-wider shadow-soft">
                  Before
                </div>
              </div>

              {/* Divider */}
              <div
                className="absolute top-0 bottom-0 w-px bg-bone-50/90 pointer-events-none"
                style={{ left: `${pos}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-bone-50 shadow-lift">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-ink-800" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
                  </svg>
                </div>
              </div>
            </div>

            <p className="mt-4 text-[12px] uppercase tracking-[0.18em] text-bone-200/50">
              Drag to compare · Naperville 3-car garage
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
