import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Transformations', href: '#transformations' },
  { label: 'Packages', href: '#packages' },
  { label: 'Process', href: '#process' },
  { label: 'FAQs', href: '#faqs' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bone-50/85 backdrop-blur-md border-b border-ink-800/8'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-[72px]">
        <a href="#top" className="flex items-center gap-2.5 group" aria-label="Naperville Garage Co. home">
          <span className="grid place-items-center h-9 w-9 rounded-lg bg-ink-800 text-bronze-400">
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 11l9-6 9 6v9a1 1 0 0 1-1 1h-4v-6H8v6H4a1 1 0 0 1-1-1z" />
            </svg>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-[15px] font-semibold text-ink-900 tracking-tight">Naperville Garage Co.</span>
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.18em] text-stone-warm">Garage transformations</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-700 hover:text-ink-900 transition relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-bronze-500 hover:after:w-full after:transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+16305551234" className="hidden md:inline-block text-sm font-medium text-ink-800 hover:text-bronze-600 transition">
            (630) 555-1234
          </a>
          <a href="#quote" className="btn-primary !py-2.5 !px-5 text-[13px]">
            Get Free Quote
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            className="lg:hidden grid place-items-center h-10 w-10 rounded-lg border border-ink-800/15"
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-ink-800/8 bg-bone-50">
          <div className="container-x py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-[15px] text-ink-800 rounded-lg hover:bg-ink-800/[0.04]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
