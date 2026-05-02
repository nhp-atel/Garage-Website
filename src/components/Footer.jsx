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
              <span className="font-display text-[16px] font-semibold text-bone-50">Naperville Garage Co.</span>
            </div>
            <p className="mt-5 text-[14px] leading-relaxed max-w-sm">
              Premium garage transformations across Naperville and the western suburbs. Flooring, storage, lighting, and finishing — coordinated by one team.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-bone-50 mb-4">Explore</div>
            <ul className="space-y-2.5 text-[14px]">
              <li><a href="#services" className="hover:text-bronze-400 transition">Services</a></li>
              <li><a href="#packages" className="hover:text-bronze-400 transition">Packages</a></li>
              <li><a href="#process" className="hover:text-bronze-400 transition">Process</a></li>
              <li><a href="#faqs" className="hover:text-bronze-400 transition">FAQs</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-bone-50 mb-4">Service area</div>
            <ul className="space-y-2.5 text-[14px]">
              <li>Naperville</li>
              <li>Aurora · Plainfield</li>
              <li>Bolingbrook · Lisle</li>
              <li>Wheaton · Woodridge</li>
              <li>Downers Grove</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-bone-50 mb-4">Contact</div>
            <ul className="space-y-2.5 text-[14px]">
              <li><a href="tel:+16305551234" className="hover:text-bronze-400 transition">(630) 555-1234</a></li>
              <li><a href="mailto:hello@napervillegarage.co" className="hover:text-bronze-400 transition">hello@napervillegarage.co</a></li>
              <li className="text-bone-200/50">Mon–Sat · 8am – 6pm</li>
            </ul>

            <a href="#quote" className="btn-bronze mt-6 !py-2.5 !px-4 text-[13px]">
              Get free quote
            </a>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-bone-200/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[12px]">
          <div>© {new Date().getFullYear()} Naperville Garage Co. — Licensed &amp; insured in Illinois.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-bronze-400 transition">Privacy</a>
            <a href="#" className="hover:text-bronze-400 transition">Terms</a>
            <a href="#" className="hover:text-bronze-400 transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
