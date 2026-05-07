// TODO: Replace the placeholder block below with the embedded Google Form once created.
// Embed pattern from Google Forms: Send → embed icon → copy iframe and paste in place of the placeholder div.
// Suggested form fields are listed in src/pages/Contact.jsx — keep them in sync with the Google Form for consistency.

export default function Contact() {
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="container-x relative pt-16 lg:pt-24 pb-10 lg:pb-12">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6">Contact</div>
            <h1 className="h-display text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.04] text-balance">
              Book Your Free Garage Estimate
            </h1>
            <p className="mt-7 text-[17px] leading-relaxed text-stone-deep max-w-2xl">
              Tell us about your garage and what kind of transformation you're looking for. We respond within one business day to schedule your free walkthrough.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink-800/8">
        <div className="container-x py-12 lg:py-16">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-8">
              {/*
                GOOGLE FORM PLACEHOLDER
                Replace this block with the embed iframe from your Google Form.
                Recommended embed style: width=100%, height=1100, frameBorder=0
              */}
              <div className="rounded-2xl border border-dashed border-ink-800/20 bg-bone-100 p-10 lg:p-14 text-center">
                <div className="grid place-items-center mx-auto h-14 w-14 rounded-full bg-bronze-500/15 text-bronze-700 mb-5">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="3" width="16" height="18" rx="2" />
                    <path d="M9 8h6M9 12h6M9 16h4" />
                  </svg>
                </div>
                <h2 className="font-display text-[24px] text-ink-900 mb-2">Estimate form coming soon</h2>
                <p className="text-[14px] text-stone-deep max-w-md mx-auto">
                  Our online estimate form is being finalized. In the meantime, the form below shows the questions we'll ask — feel free to email us your answers and we'll get back to you within one business day.
                </p>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="rounded-2xl border border-ink-800/10 bg-bone-50 p-7 lg:p-8 sticky top-24">
                <div className="text-[11px] uppercase tracking-[0.18em] font-semibold text-bronze-600 mb-3">What we'll ask</div>
                <h3 className="font-display text-[20px] text-ink-900 mb-5">A few quick details</h3>
                <ul className="space-y-3 text-[14px] text-ink-800">
                  {[
                    'Name, email, phone, city',
                    'Garage size (1, 2, or 3 car)',
                    'What you\'re interested in (flooring, storage, lighting, full makeover)',
                    'The look you\'re going for (clean & functional, modern & organized, luxury showroom)',
                    'Photos of your current garage (optional)',
                    'Anything else we should know',
                  ].map((it) => (
                    <li key={it} className="flex items-start gap-3">
                      <span className="mt-1 grid place-items-center h-5 w-5 rounded-full bg-bronze-500/15 text-bronze-700 shrink-0">
                        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 pt-6 border-t border-ink-800/10 text-[12px] text-stone-mid leading-relaxed">
                  We don't share your information. The estimate is free and there's no obligation to move forward.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
