const items = [
  'One coordinated team',
  'Premium materials',
  'Clean installation process',
  'Designed around your lifestyle',
  'Local Naperville-area service',
  'No juggling multiple vendors',
];

export default function WhyChooseUs() {
  return (
    <section className="relative">
      <div className="container-x py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="eyebrow mb-6">Why homeowners pick us</div>
            <h2 className="h-display text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.05] text-balance">
              A better way to upgrade your garage.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-stone-deep max-w-lg">
              Instead of hiring separate flooring, storage, lighting, and finishing vendors, we coordinate the full transformation so the process feels simple from start to finish.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-4 max-w-md">
              <div className="rounded-xl border border-ink-800/10 bg-bone-50 p-5">
                <div className="font-display text-3xl text-ink-900">1</div>
                <div className="text-[13px] text-stone-mid mt-1">Point of contact, start to finish</div>
              </div>
              <div className="rounded-xl bg-ink-800 text-bone-100 p-5">
                <div className="font-display text-3xl text-bronze-400">0</div>
                <div className="text-[13px] text-bone-200/70 mt-1">Subcontractor handoffs</div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-ink-800/10 bg-bone-50 overflow-hidden">
              <div className="p-7 lg:p-9 border-b border-ink-800/10 flex items-center justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-bronze-600 font-semibold mb-1">What you get</div>
                  <div className="font-display text-[22px] text-ink-900">Every transformation includes</div>
                </div>
                <span className="hidden sm:grid place-items-center h-12 w-12 rounded-full bg-bronze-500/15 text-bronze-700">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
              </div>

              <ul className="divide-y divide-ink-800/8">
                {items.map((it, i) => (
                  <li
                    key={it}
                    className="flex items-center gap-5 px-7 lg:px-9 py-4 group hover:bg-ink-800/[0.02] transition"
                  >
                    <span className="text-[11px] font-mono text-stone-warm w-7">
                      0{i + 1}
                    </span>
                    <span className="grid place-items-center h-7 w-7 rounded-full bg-bronze-500/15 text-bronze-700 shrink-0">
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </span>
                    <span className="text-[15px] text-ink-800 flex-1">{it}</span>
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-stone-warm opacity-0 group-hover:opacity-100 transition" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
