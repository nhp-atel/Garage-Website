const services = [
  {
    key: 'floor',
    label: '01',
    title: 'Floor Coatings',
    body: 'Durable epoxy, polyaspartic, and decorative flake systems built for daily use.',
    bullets: ['Polyaspartic', 'Epoxy', 'Flake systems'],
    span: 'lg:col-span-7 lg:row-span-2',
    tone: 'dark',
  },
  {
    key: 'storage',
    label: '02',
    title: 'Storage Systems',
    body: 'Slatwall, overhead racks, cabinets, and shelving designed around how you actually use your garage.',
    bullets: ['Slatwall', 'Overhead racks', 'Cabinets'],
    span: 'lg:col-span-5',
    tone: 'light',
  },
  {
    key: 'lighting',
    label: '03',
    title: 'Lighting Upgrades',
    body: 'Bright, clean lighting that makes the garage feel larger, safer, and more polished.',
    bullets: ['LED panels', 'Task lighting', 'Switching'],
    span: 'lg:col-span-5',
    tone: 'accent',
  },
  {
    key: 'finish',
    label: '04',
    title: 'Wall & Finish Work',
    body: 'Paint, wall upgrades, trim, and finishing details that complete the transformation.',
    bullets: ['Paint', 'Trim', 'Drywall repair'],
    span: 'lg:col-span-12',
    tone: 'light',
  },
];

const ServiceIcon = ({ name }) => {
  const props = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.4',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: 'h-6 w-6',
  };
  switch (name) {
    case 'floor':
      return (<svg {...props}><path d="M3 17l9-5 9 5" /><path d="M3 12l9-5 9 5" /><path d="M3 7l9-5 9 5" /></svg>);
    case 'storage':
      return (<svg {...props}><rect x="3" y="4" width="18" height="6" rx="1" /><rect x="3" y="14" width="18" height="6" rx="1" /><path d="M7 7h2M7 17h2" /></svg>);
    case 'lighting':
      return (<svg {...props}><path d="M9 18h6" /><path d="M10 21h4" /><path d="M12 3a6 6 0 0 0-3 11l1 2h4l1-2a6 6 0 0 0-3-11z" /></svg>);
    case 'finish':
      return (<svg {...props}><path d="M14 4l6 6-10 10H4v-6z" /><path d="M13 5l6 6" /></svg>);
    default:
      return null;
  }
};

const Card = ({ s }) => {
  const isDark = s.tone === 'dark';
  const isAccent = s.tone === 'accent';
  return (
    <article
      className={`relative overflow-hidden rounded-2xl border p-7 lg:p-9 transition group ${s.span} ${
        isDark
          ? 'bg-ink-800 text-bone-100 border-ink-800 hover:bg-ink-900'
          : isAccent
            ? 'bg-bronze-500 text-ink-900 border-bronze-500 hover:bg-bronze-400'
            : 'bg-bone-50 text-ink-900 border-ink-800/10 hover:border-ink-800/25 hover:shadow-soft'
      }`}
    >
      {isDark && (
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-bronze-500/10 blur-3xl pointer-events-none" />
      )}

      <div className="flex items-start justify-between mb-8">
        <span className={`grid place-items-center h-12 w-12 rounded-xl ${
          isDark ? 'bg-bronze-500/15 text-bronze-400' : isAccent ? 'bg-ink-900/10 text-ink-900' : 'bg-ink-800/[0.05] text-ink-800'
        }`}>
          <ServiceIcon name={s.key} />
        </span>
        <span className={`text-[11px] font-mono ${isDark ? 'text-bone-200/50' : isAccent ? 'text-ink-900/60' : 'text-stone-warm'}`}>
          {s.label} / 04
        </span>
      </div>

      <h3 className={`font-display text-[26px] lg:text-[30px] leading-tight mb-3 ${isDark ? 'text-bone-100' : 'text-ink-900'}`}>
        {s.title}
      </h3>

      <p className={`text-[15px] leading-relaxed max-w-md ${
        isDark ? 'text-bone-200/80' : isAccent ? 'text-ink-800/80' : 'text-stone-deep'
      }`}>
        {s.body}
      </p>

      <div className={`mt-7 flex flex-wrap gap-2`}>
        {s.bullets.map((b) => (
          <span
            key={b}
            className={`text-[12px] px-3 py-1 rounded-full border ${
              isDark
                ? 'border-bone-200/15 text-bone-200/80'
                : isAccent
                  ? 'border-ink-900/20 text-ink-900'
                  : 'border-ink-800/15 text-ink-700'
            }`}
          >
            {b}
          </span>
        ))}
      </div>
    </article>
  );
};

export default function Services() {
  return (
    <section id="services" className="relative">
      <div className="container-x py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="eyebrow mb-5">What we do</div>
            <h2 className="h-display text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.05] text-balance">
              Everything your garage needs — done right.
            </h2>
          </div>
          <p className="lg:max-w-sm text-[15px] text-stone-deep leading-relaxed">
            Four disciplines, one crew. We handle every part of the transformation in the right sequence so the work stays clean and the timeline stays on schedule.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-4 lg:gap-5 auto-rows-fr">
          {services.map((s) => (
            <Card key={s.key} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
