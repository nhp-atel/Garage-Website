import { Link, useLocation } from 'react-router-dom';

export default function FloatingCTA() {
  const { pathname } = useLocation();
  if (pathname === '/contact') return null;

  return (
    <Link
      to="/contact"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-bronze-500 px-5 py-3.5 text-[13px] font-semibold text-ink-900 shadow-lift hover:bg-bronze-400 hover:scale-[1.02] transition focus:outline-none focus:ring-2 focus:ring-bronze-500 focus:ring-offset-2"
      aria-label="Request free estimate"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
      <span className="hidden sm:inline">Request Free Estimate</span>
      <span className="sm:hidden">Free Estimate</span>
    </Link>
  );
}
