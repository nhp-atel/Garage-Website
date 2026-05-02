import { images } from '../config/images.js';

const problems = [
  { title: 'Cracked or stained concrete', icon: 'crack' },
  { title: 'Cluttered storage', icon: 'box' },
  { title: 'Poor lighting', icon: 'bulb' },
  { title: 'Unfinished walls', icon: 'wall' },
  { title: 'No clear layout', icon: 'grid' },
  { title: 'Multiple contractors to manage', icon: 'people' },
];

const Icon = ({ name }) => {
  const props = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.5',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: 'h-5 w-5',
  };
  switch (name) {
    case 'crack':
      return (<svg {...props}><path d="M3 18h18" /><path d="M9 18l1-5 3 2 1-4 2 3 1-2" /></svg>);
    case 'box':
      return (<svg {...props}><path d="M4 7l8-4 8 4-8 4z" /><path d="M4 7v10l8 4 8-4V7" /><path d="M12 11v10" /></svg>);
    case 'bulb':
      return (<svg {...props}><path d="M9 18h6" /><path d="M10 21h4" /><path d="M12 3a6 6 0 0 0-3 11l1 2h4l1-2a6 6 0 0 0-3-11z" /></svg>);
    case 'wall':
      return (<svg {...props}><path d="M3 6h18M3 12h18M3 18h18" /><path d="M7 6v6M14 6v6M10 12v6M17 12v6" /></svg>);
    case 'grid':
      return (<svg {...props}><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>);
    case 'people':
      return (<svg {...props}><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c0-3 3-5 6-5s6 2 6 5" /><path d="M15 20c0-2.2 1.8-4 4-4" /></svg>);
    default:
      return null;
  }
};

export default function Problem() {
  return (
    <section className="bg-bone-100 border-y border-ink-800/8">
      <div className="container-x py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — sticky heading */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="eyebrow mb-6">The problem</div>
              <h2 className="h-display text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.05] text-balance">
                Your garage shouldn't feel like wasted space.
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-relaxed text-stone-deep">
                Most garages in our area sit half-organized for years — full of stuff that doesn't belong inside, and far below the standard of the rest of the home.
              </p>

              <div className="mt-8 relative aspect-[4/3] rounded-2xl overflow-hidden border border-ink-800/10 max-w-md">
                <img
                  src={images.cluttered.src}
                  alt={images.cluttered.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-bone-50">
                  <span className="text-[11px] uppercase tracking-[0.18em] font-semibold">Typical "before"</span>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-bone-200/70">Naperville-area garage</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — problem grid */}
          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-3">
              {problems.map((p) => (
                <li
                  key={p.title}
                  className="group flex items-start gap-4 rounded-xl border border-ink-800/10 bg-bone-50 p-5 hover:border-bronze-500/40 hover:shadow-soft transition"
                >
                  <span className="grid place-items-center h-10 w-10 rounded-lg bg-ink-800/[0.04] text-ink-700 group-hover:bg-bronze-500/15 group-hover:text-bronze-700 transition">
                    <Icon name={p.icon} />
                  </span>
                  <div className="pt-1">
                    <div className="font-medium text-ink-900 text-[15px]">{p.title}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-ink-800 text-bone-100 p-7 lg:p-8 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
              <div className="font-display text-[20px] lg:text-[22px] leading-snug text-balance flex-1">
                We turn that unused space into one of the cleanest, most functional areas of your home.
              </div>
              <a href="#quote" className="btn-bronze whitespace-nowrap self-start md:self-auto">
                Start with a free quote
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
