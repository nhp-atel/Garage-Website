import { Link } from 'react-router-dom';

export default function CTABanner() {
  return (
    <section className="bg-ink-900 text-bone-100 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-[0.04] pointer-events-none" />
      <div className="absolute -left-40 -bottom-40 h-[500px] w-[500px] rounded-full bg-bronze-500/10 blur-3xl pointer-events-none" />

      <div className="container-x relative py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="eyebrow !text-bronze-400 mb-5">Free design &amp; estimate</div>
            <h2 className="h-display !text-bone-50 text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.05] text-balance">
              Ready to see what your garage could become?
            </h2>
            <p className="mt-6 text-[16px] text-bone-200/75 leading-relaxed max-w-xl">
              Tell us about your space. We'll respond within one business day to schedule your free walkthrough.
            </p>
          </div>
          <div className="lg:col-span-5 lg:flex lg:justify-end">
            <Link to="/contact" className="btn-bronze !py-4 !px-7 text-[15px]">
              Book Your Free Estimate
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
