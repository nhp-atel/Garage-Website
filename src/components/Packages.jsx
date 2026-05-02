const packages = [
  {
    name: 'Essential',
    subtitle: 'A clean, durable upgrade',
    items: [
      'Standard floor coating',
      'Surface prep',
      'Crack repair',
      'Clean finished look',
      'Great for basic refreshes',
    ],
    popular: false,
  },
  {
    name: 'Enhanced',
    subtitle: 'More organized, more functional',
    items: [
      'Premium floor coating',
      'Slatwall or overhead storage',
      'Lighting upgrade',
      'Layout recommendations',
      'Ideal for daily-use garages',
    ],
    popular: true,
  },
  {
    name: 'Signature',
    subtitle: 'Full garage transformation',
    items: [
      'Premium coating system',
      'Cabinets and storage',
      'Lighting design',
      'Wall and finishing upgrades',
      'Complete coordinated install',
    ],
    popular: false,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="bg-bone-100 border-y border-ink-800/8">
      <div className="container-x py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-8 mb-12 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow mb-5">Packages</div>
            <h2 className="h-display text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.05] text-balance">
              Choose the right level for your garage.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-ink-800/10">
            <p className="text-[15px] text-stone-deep leading-relaxed">
              Every garage is different. Pick the package that fits how you use the space — we'll build the final scope around it during your free design walkthrough.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {packages.map((p, i) => {
            const popular = p.popular;
            return (
              <article
                key={p.name}
                className={`relative rounded-2xl p-7 lg:p-9 transition flex flex-col ${
                  popular
                    ? 'bg-ink-800 text-bone-100 border border-ink-800 lg:-translate-y-3 shadow-lift'
                    : 'bg-bone-50 text-ink-900 border border-ink-800/10 hover:border-ink-800/25 hover:shadow-soft'
                }`}
              >
                {popular && (
                  <div className="absolute -top-3 left-7 px-3 py-1 rounded-full bg-bronze-500 text-ink-900 text-[11px] font-semibold uppercase tracking-wider">
                    Most popular
                  </div>
                )}

                <div className="flex items-baseline justify-between mb-1">
                  <h3 className={`font-display text-[28px] ${popular ? 'text-bone-50' : 'text-ink-900'}`}>
                    {p.name}
                  </h3>
                  <span className={`text-[11px] font-mono ${popular ? 'text-bone-200/50' : 'text-stone-warm'}`}>
                    0{i + 1}
                  </span>
                </div>
                <p className={`text-[14px] mb-7 ${popular ? 'text-bone-200/70' : 'text-stone-deep'}`}>
                  {p.subtitle}
                </p>

                <ul className={`space-y-3 mb-8 ${popular ? 'text-bone-200/85' : 'text-ink-700'}`}>
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-[14px]">
                      <span className={`mt-1 grid place-items-center h-5 w-5 rounded-full shrink-0 ${
                        popular ? 'bg-bronze-500/20 text-bronze-400' : 'bg-bronze-500/15 text-bronze-600'
                      }`}>
                        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#quote"
                  className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                    popular
                      ? 'bg-bronze-500 text-ink-900 hover:bg-bronze-400'
                      : 'border border-ink-800/15 text-ink-800 hover:border-ink-800 hover:bg-ink-800 hover:text-bone-50'
                  }`}
                >
                  Request a custom quote
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-[13px] text-stone-mid">
          All packages include site assessment, final walkthrough, and project coordination at no extra cost.
        </p>
      </div>
    </section>
  );
}
