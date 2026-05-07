const reviews = [
  {
    quote: 'The garage finally feels like part of the house. We used to keep the door shut so guests didn\'t see it — now it\'s the first thing we show people.',
    name: 'Mark & Jenna R.',
    location: '3-car garage transformation',
    package: 'Signature',
  },
  {
    quote: 'The storage layout made a huge difference. They built it around the way we actually use the space — not just lined the walls with shelves.',
    name: 'David K.',
    location: '2-car garage with custom storage',
    package: 'Enhanced',
  },
  {
    quote: 'The process was organized from quote to finish. We had one person to talk to the whole time and the schedule held exactly to what they told us.',
    name: 'Priya S.',
    location: '2.5-car garage refresh',
    package: 'Enhanced',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-ink-900 text-bone-100 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-[0.04] pointer-events-none" />
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-bronze-500/8 blur-3xl pointer-events-none" />

      <div className="container-x relative py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 mb-14 items-end">
          <div className="lg:col-span-7">
            <div className="eyebrow !text-bronze-400 mb-5">From homeowners</div>
            <h2 className="h-display !text-bone-50 text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.05] text-balance">
              The kind of work people actually talk about.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-center gap-3 text-bone-200/70 text-[14px]">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24" className="h-4 w-4 text-bronze-400" fill="currentColor">
                  <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1z" />
                </svg>
              ))}
            </div>
            <span>4.9 average · Verified homeowner reviews</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              className={`rounded-2xl p-7 lg:p-8 flex flex-col ${
                i === 1
                  ? 'bg-bronze-500 text-ink-900'
                  : 'bg-ink-800 border border-bone-200/10'
              }`}
            >
              <svg viewBox="0 0 24 24" className={`h-7 w-7 mb-5 ${i === 1 ? 'text-ink-900/30' : 'text-bronze-400/40'}`} fill="currentColor">
                <path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2H4v2h1a4 4 0 0 0 4-4zM19 7h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2h-1v2h1a4 4 0 0 0 4-4z" />
              </svg>

              <blockquote className={`font-display text-[20px] lg:text-[21px] leading-snug flex-1 text-balance ${
                i === 1 ? 'text-ink-900' : 'text-bone-50'
              }`}>
                "{r.quote}"
              </blockquote>

              <figcaption className={`mt-7 pt-5 border-t flex items-center justify-between ${
                i === 1 ? 'border-ink-900/15' : 'border-bone-200/10'
              }`}>
                <div>
                  <div className={`text-[14px] font-semibold ${i === 1 ? 'text-ink-900' : 'text-bone-50'}`}>
                    {r.name}
                  </div>
                  <div className={`text-[12px] ${i === 1 ? 'text-ink-900/70' : 'text-bone-200/60'}`}>
                    {r.location}
                  </div>
                </div>
                <span className={`text-[10px] uppercase tracking-[0.16em] font-semibold px-2.5 py-1 rounded-full ${
                  i === 1 ? 'bg-ink-900/10 text-ink-900' : 'bg-bronze-500/15 text-bronze-400'
                }`}>
                  {r.package}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
