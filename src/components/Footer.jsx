import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-bone-200/70 border-t border-bone-200/5">
      <div className="container-x py-14">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center h-9 w-9 rounded-lg bg-bronze-500 text-ink-900">
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 11l9-6 9 6v9a1 1 0 0 1-1 1h-4v-6H8v6H4a1 1 0 0 1-1-1z" />
                </svg>
              </span>
              <span className="font-display text-[16px] font-semibold text-bone-50">Midwest Garage Co.</span>
            </div>
            <p className="mt-5 text-[14px] leading-relaxed max-w-sm">
              Premium garage transformations across the Midwest. Flooring, storage, lighting, and finishing — coordinated by one team.
            </p>
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
              Tell us about your garage and what you're looking for. We respond within one business day.
            </p>
            <Link to="/contact" className="btn-bronze !py-2.5 !px-4 text-[13px]">
              Book Your Free Estimate
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
