import { useState } from 'react';
import { gallery } from '../config/images.js';
import CTABanner from '../components/CTABanner.jsx';

const categories = [
  { key: 'flooring', label: 'Flooring' },
  { key: 'storage', label: 'Storage' },
  { key: 'lighting', label: 'Lighting' },
  { key: 'full', label: 'Full Makeovers' },
];

export default function Gallery() {
  const [active, setActive] = useState('flooring');
  const photos = gallery[active] || [];

  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="container-x relative pt-16 lg:pt-24 pb-10 lg:pb-12">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6">Gallery</div>
            <h1 className="h-display text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.04] text-balance">
              Real garages, real transformations.
            </h1>
            <p className="mt-7 text-[17px] leading-relaxed text-stone-deep max-w-2xl">
              Browse finished projects by discipline — flooring, storage, lighting, and full makeovers — to see what's possible in your space.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink-800/8">
        <div className="container-x py-12 lg:py-16">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c.key}
                type="button"
                onClick={() => setActive(c.key)}
                className={`px-5 py-2.5 rounded-full text-[14px] font-medium transition border ${
                  active === c.key
                    ? 'bg-ink-800 text-bone-50 border-ink-800'
                    : 'bg-bone-50 text-ink-800 border-ink-800/15 hover:border-ink-800/40'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {photos.map((p, i) => (
              <figure
                key={`${active}-${i}`}
                className="relative group aspect-[4/3] rounded-2xl overflow-hidden border border-ink-800/10 bg-bone-100"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                <figcaption className="absolute bottom-4 left-4 right-4 text-[12px] text-bone-50 opacity-0 group-hover:opacity-100 transition">
                  {p.alt}
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-8 text-[13px] text-stone-mid">
            Photos shown are representative finished work. Project specifics vary based on garage size, finishes, and selections.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
