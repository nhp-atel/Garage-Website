import { Link } from 'react-router-dom';

const socials = [
  {
    name: 'Instagram',
    href: '#',
    path: 'M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5zm-4 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm5.5-9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z',
  },
  {
    name: 'Facebook',
    href: '#',
    path: 'M13 22v-8h3l1-4h-4V7.5c0-1.2.3-2 2-2h2V2h-3.5C10.6 2 9 3.7 9 6.7V10H6v4h3v8z',
  },
  {
    name: 'Houzz',
    href: '#',
    path: 'M5 3v18h5v-7h4v7h5V3h-5v8h-4V3z',
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-bone-200/70 border-t border-bone-200/5">
      <div className="container-x py-16">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center h-9 w-9 rounded-lg bg-bronze-500 text-ink-900">
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 11l9-6 9 6v9a1 1 0 0 1-1 1h-4v-6H8v6H4a1 1 0 0 1-1-1z" />
                </svg>
              </span>
              <span className="font-display text-[16px] font-semibold text-bone-50">Midwest Garage Co.</span>
            </div>
            <p className="mt-5 font-display text-[20px] lg:text-[22px] leading-snug text-bone-100/90 max-w-md">
              The garage, finally finished.
            </p>
            <p className="mt-4 text-[14px] leading-relaxed max-w-md">
              Premium garage transformations across the Midwest — flooring, storage, lighting, and finishing, coordinated by one team.
            </p>

            <div className="mt-7 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="grid place-items-center h-10 w-10 rounded-full bg-bone-50/[0.04] border border-bone-200/10 text-bone-200/70 hover:bg-bronze-500 hover:text-ink-900 hover:border-bronze-500 transition"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-bone-50 mb-4">Explore</div>
            <ul className="space-y-2.5 text-[14px]">
              <li><Link to="/services" className="hover:text-bronze-400 transition">Services</Link></li>
              <li><Link to="/packages" className="hover:text-bronze-400 transition">Packages</Link></li>
              <li><Link to="/gallery" className="hover:text-bronze-400 transition">Gallery</Link></li>
              <li><Link to="/about" className="hover:text-bronze-400 transition">About</Link></li>
              <li><Link to="/contact" className="hover:text-bronze-400 transition">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-bone-50 mb-4">Get started</div>
            <p className="text-[14px] leading-relaxed mb-5">
              Tell us about your garage. We respond within one business day.
            </p>
            <Link to="/contact" className="btn-bronze !py-2.5 !px-4 text-[13px]">
              Book Free Estimate
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-bone-200/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[12px]">
          <div>© {new Date().getFullYear()} Midwest Garage Co. — Licensed &amp; insured.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-bronze-400 transition">Privacy</a>
            <a href="#" className="hover:text-bronze-400 transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
