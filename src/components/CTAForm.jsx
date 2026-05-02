import { useState } from 'react';

const interests = [
  'Floor coating',
  'Storage system',
  'Lighting',
  'Wall & finish work',
  'Full transformation',
  'Not sure yet',
];

export default function CTAForm() {
  const [submitted, setSubmitted] = useState(false);
  const [interest, setInterest] = useState('Full transformation');

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="quote" className="bg-ink-900 text-bone-100 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-[0.04] pointer-events-none" />
      <div className="absolute -left-40 -bottom-40 h-[500px] w-[500px] rounded-full bg-bronze-500/10 blur-3xl pointer-events-none" />

      <div className="container-x relative py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="eyebrow !text-bronze-400 mb-6">Free design &amp; quote</div>
            <h2 className="h-display !text-bone-50 text-[40px] sm:text-[48px] lg:text-[58px] leading-[1.02] text-balance">
              Ready to see what your garage could become?
            </h2>
            <p className="mt-7 text-[16px] text-bone-200/75 leading-relaxed max-w-md">
              Tell us a bit about your space. We'll respond within one business day to schedule your free walkthrough — usually at your home, but virtual works too.
            </p>

            <div className="mt-auto pt-10 grid grid-cols-3 gap-3 max-w-md">
              {[
                { k: 'No obligation', d: 'Quote without pressure' },
                { k: 'Local service', d: 'Naperville-area crews' },
                { k: 'Custom recs', d: 'Built around your space' },
              ].map((b) => (
                <div key={b.k} className="rounded-lg border border-bone-200/10 p-4">
                  <div className="text-bronze-400 text-[12px] font-semibold uppercase tracking-wider mb-1">{b.k}</div>
                  <div className="text-[12px] text-bone-200/65 leading-snug">{b.d}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-bone-50 text-ink-900 p-7 lg:p-10 shadow-lift">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="grid place-items-center mx-auto h-14 w-14 rounded-full bg-bronze-500/15 text-bronze-700 mb-5">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-[26px] mb-2">Request received.</h3>
                  <p className="text-[15px] text-stone-deep max-w-sm mx-auto">
                    We'll be in touch within one business day to schedule your free design walkthrough.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2 flex items-baseline justify-between mb-1">
                    <h3 className="font-display text-[24px] lg:text-[26px]">Request my free quote</h3>
                    <span className="text-[11px] text-stone-warm uppercase tracking-wider">Step 1 of 1</span>
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold uppercase tracking-wider text-stone-warm mb-1.5">Name</label>
                    <input required className="input" placeholder="Jamie Carter" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold uppercase tracking-wider text-stone-warm mb-1.5">Phone</label>
                    <input required type="tel" className="input" placeholder="(630) 555-0142" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold uppercase tracking-wider text-stone-warm mb-1.5">Email</label>
                    <input required type="email" className="input" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="block text-[12px] font-semibold uppercase tracking-wider text-stone-warm mb-1.5">City</label>
                    <input required className="input" placeholder="Naperville" />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[12px] font-semibold uppercase tracking-wider text-stone-warm mb-2">What are you interested in?</label>
                    <div className="flex flex-wrap gap-2">
                      {interests.map((i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setInterest(i)}
                          className={`px-3.5 py-2 rounded-full text-[13px] border transition ${
                            interest === i
                              ? 'bg-ink-800 text-bone-50 border-ink-800'
                              : 'bg-bone-50 text-ink-800 border-ink-800/15 hover:border-ink-800/40'
                          }`}
                        >
                          {i}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[12px] font-semibold uppercase tracking-wider text-stone-warm mb-1.5">Anything else? (optional)</label>
                    <textarea rows="3" className="input resize-none" placeholder="Garage size, current condition, anything that would help us prep your quote." />
                  </div>

                  <button type="submit" className="btn-bronze sm:col-span-2 mt-2 !py-4">
                    Request my free quote
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </button>

                  <p className="sm:col-span-2 text-[12px] text-stone-mid">
                    By submitting, you agree to be contacted about your project. We don't share your info.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
