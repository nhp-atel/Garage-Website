import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Packages', to: '/packages' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bone-50/85 backdrop-blur-md border-b border-ink-800/8'
          : 'bg-bone-50/60 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-[72px]">
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="Midwest Garage Co. home">
          <span className="grid place-items-center h-9 w-9 rounded-lg bg-ink-800 text-bronze-400">
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 11l9-6 9 6v9a1 1 0 0 1-1 1h-4v-6H8v6H4a1 1 0 0 1-1-1z" />
            </svg>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-[15px] font-semibold text-ink-900 tracking-tight">Midwest Garage Co.</span>
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.18em] text-stone-warm">Garage transformations</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `text-sm transition relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-bronze-500 after:transition-all ${
                  isActive
                    ? 'text-ink-900 font-medium after:w-full'
                    : 'text-ink-700 hover:text-ink-900 after:w-0 hover:after:w-full'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden md:inline-flex btn-bronze !py-2.5 !px-5 text-[13px]">
            Book Estimate
          </Link>
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
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-3 text-[15px] rounded-lg transition ${
                    isActive ? 'bg-ink-800/[0.05] text-ink-900 font-medium' : 'text-ink-800 hover:bg-ink-800/[0.04]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn-bronze mt-3 !py-3 text-[14px]">
              Book Estimate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
