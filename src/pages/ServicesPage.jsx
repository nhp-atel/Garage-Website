import { Link } from 'react-router-dom';
import CTABanner from '../components/CTABanner.jsx';

const services = [
  {
    key: 'flooring',
    slug: 'flooring',
    label: '01',
    title: 'Garage Flooring',
    body: 'Polyaspartic, epoxy, and decorative flake systems engineered for daily use, hot tire pickup, and Midwest winters.',
    bullets: ['Polyaspartic coating', 'Epoxy floor systems', 'Decorative flake', 'Surface prep & crack repair'],
  },
  {
    key: 'storage',
    slug: 'storage',
    label: '02',
    title: 'Storage Solutions',
    body: 'Slatwall, overhead racks, custom cabinets, and shelving designed around how you actually use your space.',
    bullets: ['Slatwall systems', 'Overhead storage racks', 'Custom cabinets', 'Tool & sports organization'],
  },
  {
    key: 'lighting',
    slug: 'lighting',
    label: '03',
    title: 'Lighting Upgrades',
    body: 'Bright, layered lighting that makes the garage feel larger, safer, and more polished — task, ambient, and accent.',
    bullets: ['LED panel lighting', 'Task & workbench lighting', 'Smart switching', 'Accent & cabinet lighting'],
  },
  {
    key: 'finish',
    slug: 'wall-finishing',
    label: '04',
    title: 'Wall & Finishing',
    body: 'Paint, drywall, trim, and finishing details that complete the transformation and tie the space to the rest of your home.',
    bullets: ['Drywall repair & finishing', 'Premium paint', 'Trim & baseboard', 'Ceiling finishing'],
  },
  {
    key: 'custom',
    slug: 'custom',
    label: '05',
    title: 'Custom Garage Upgrades',
    body: 'Bespoke additions that make the garage truly yours — workbenches, EV charger installs, dog wash stations, and more.',
    bullets: ['Workbenches & shop layouts', 'EV charger installations', 'Dog wash stations', 'Specialty add-ons'],
  },
];

const Icon = ({ name }) => {
  const props = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.5',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: 'h-6 w-6',
  };
  switch (name) {
    case 'flooring':
      return (<svg {...props}><path d="M3 17l9-5 9 5" /><path d="M3 12l9-5 9 5" /><path d="M3 7l9-5 9 5" /></svg>);
    case 'storage':
      return (<svg {...props}><rect x="3" y="4" width="18" height="6" rx="1" /><rect x="3" y="14" width="18" height="6" rx="1" /><path d="M7 7h2M7 17h2" /></svg>);
    case 'lighting':
      return (<svg {...props}><path d="M9 18h6" /><path d="M10 21h4" /><path d="M12 3a6 6 0 0 0-3 11l1 2h4l1-2a6 6 0 0 0-3-11z" /></svg>);
    case 'finish':
      return (<svg {...props}><path d="M14 4l6 6-10 10H4v-6z" /><path d="M13 5l6 6" /></svg>);
    case 'custom':
      return (<svg {...props}><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3" /></svg>);
    default:
      return null;
  }
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="container-x relative pt-16 lg:pt-24 pb-12 lg:pb-16">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6">Services</div>
            <h1 className="h-display text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.04] text-balance">
              Everything your garage needs — handled by one team.
            </h1>
            <p className="mt-7 text-[17px] leading-relaxed text-stone-deep max-w-2xl">
              We specialize in five disciplines that, together, make a garage feel like a real extension of your home. Each service stands on its own — and combines beautifully with the others.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink-800/8">
        <div className="container-x py-16 lg:py-20">
          <div className="grid gap-5">
            {services.map((s, i) => (
              <article
                key={s.key}
                id={s.slug}
                className="grid lg:grid-cols-12 gap-8 lg:gap-12 rounded-2xl border border-ink-800/10 bg-bone-50 p-7 lg:p-10 hover:border-ink-800/25 hover:shadow-soft transition"
              >
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-4">
                    <span className="grid place-items-center h-12 w-12 rounded-xl bg-ink-800/[0.05] text-ink-800">
                      <Icon name={s.key} />
                    </span>
                    <span className="text-[11px] font-mono text-stone-warm">{s.label} / 05</span>
                  </div>
                  <h2 className="mt-5 font-display text-[28px] lg:text-[32px] leading-tight text-ink-900">
                    {s.title}
                  </h2>
                </div>
                <div className="lg:col-span-8 lg:border-l lg:border-ink-800/10 lg:pl-12">
                  <p className="text-[16px] leading-relaxed text-stone-deep max-w-2xl">
                    {s.body}
                  </p>
                  <ul className="mt-6 grid sm:grid-cols-2 gap-2.5 max-w-2xl">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[14px] text-ink-800">
                        <span className="mt-1 grid place-items-center h-5 w-5 rounded-full bg-bronze-500/15 text-bronze-700 shrink-0">
                          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                          </svg>
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link to={`/services/${s.slug}`} className="btn-primary !py-2.5 !px-5 text-[13px]">
                      Learn more
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </Link>
                    <Link to="/contact" className="btn-secondary !py-2.5 !px-5 text-[13px]">
                      Get a quote
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
