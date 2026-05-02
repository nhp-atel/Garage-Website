const steps = [
  {
    n: '01',
    title: 'Garage Assessment',
    body: 'We review your space, goals, storage needs, and current garage condition.',
    duration: 'Day 1',
  },
  {
    n: '02',
    title: 'Design & Quote',
    body: 'We recommend the right mix of flooring, storage, lighting, and finishing options.',
    duration: 'Within a week',
  },
  {
    n: '03',
    title: 'Scheduled Installation',
    body: 'We coordinate the work in the right order so the process stays organized.',
    duration: '2–5 days on site',
  },
  {
    n: '04',
    title: 'Final Walkthrough',
    body: 'We review the finished garage with you and make sure the result feels complete.',
    duration: 'Project close',
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-bone-100 border-y border-ink-800/8 relative">
      <div className="container-x py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-5">How it works</div>
            <h2 className="h-display text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.05] text-balance">
              Simple. Structured. Professional.
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-[15px] text-stone-deep leading-relaxed self-end">
            A four-step process that keeps you informed at every stage. No mystery timelines, no missed handoffs.
          </p>
        </div>

        {/* Timeline — horizontal on lg, vertical on mobile */}
        <div className="relative">
          {/* Desktop horizontal line */}
          <div className="hidden lg:block absolute left-0 right-0 top-[44px] h-px bg-ink-800/10" />

          <ol className="grid lg:grid-cols-4 gap-8 lg:gap-5 relative">
            {steps.map((s, i) => (
              <li key={s.n} className="relative">
                {/* Vertical connector for mobile */}
                {i < steps.length - 1 && (
                  <span className="lg:hidden absolute left-[22px] top-12 bottom-[-32px] w-px bg-ink-800/15" aria-hidden="true" />
                )}

                <div className="flex lg:flex-col gap-5 lg:gap-0">
                  {/* Number node */}
                  <div className="relative shrink-0">
                    <div className="grid place-items-center h-11 w-11 lg:h-[44px] lg:w-[44px] rounded-full bg-bone-50 border border-ink-800/10 font-mono text-[13px] text-ink-800 relative z-10">
                      {s.n}
                    </div>
                  </div>

                  <div className="lg:mt-7 flex-1">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-bronze-600 mb-2">
                      {s.duration}
                    </div>
                    <h3 className="font-display text-[22px] text-ink-900 mb-2">
                      {s.title}
                    </h3>
                    <p className="text-[14px] text-stone-deep leading-relaxed max-w-xs">
                      {s.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl bg-bone-50 border border-ink-800/10 px-7 py-6">
          <div className="text-[15px] text-ink-800">
            Most garages are completed in <span className="font-semibold">2 to 5 days on site</span>, depending on scope.
          </div>
          <a href="#quote" className="btn-primary !py-3 !px-5 text-[13px]">
            Schedule your assessment
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
