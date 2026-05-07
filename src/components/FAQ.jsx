import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: 'How long does a garage transformation take?',
    a: 'Most projects take 2 to 5 days on site, depending on the package and scope. A floor-only refresh can be completed in a long weekend. Full Signature transformations with cabinets, lighting, and wall work typically run 4 to 5 days. We give you an exact schedule with your quote.',
  },
  {
    q: 'Do I need to empty my garage first?',
    a: 'Yes, the floor needs to be fully cleared for prep and coating. Most homeowners move items into the driveway or basement for the work week. If you need help, we can recommend a local moving service or build a short staging plan into the timeline.',
  },
  {
    q: 'What floor coating is best?',
    a: 'For most garages, we recommend a polyaspartic system with a flake topcoat — it cures fast, handles cold winters, and resists hot tire pickup. Standard epoxy is still a strong, more affordable option. We walk through the trade-offs during your assessment so the choice fits your use and budget.',
  },
  {
    q: 'Can I choose only flooring or storage?',
    a: 'Absolutely. Plenty of homeowners start with just flooring or just storage and come back later for the rest. Our Essential package is a flooring-only refresh. The advantage of working with us either way is that we plan everything to be compatible if you decide to expand the project later.',
  },
  {
    q: 'Where do you work?',
    a: 'We service homeowners across the Midwest. Reach out via the Contact page with your city and we\'ll confirm availability and timeline.',
  },
  {
    q: 'Do you offer custom quotes?',
    a: 'Every quote is custom. We measure your space, look at your storage and lighting situation, and recommend the right combination of services. The free design walkthrough is a real conversation about your garage — not a pre-filled estimate.',
  },
];

function Item({ q, a, open, onToggle }) {
  return (
    <div className="border-b border-ink-800/10">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group"
        aria-expanded={open}
      >
        <span className={`font-display text-[18px] lg:text-[20px] transition ${open ? 'text-bronze-700' : 'text-ink-900 group-hover:text-bronze-700'}`}>
          {q}
        </span>
        <span className={`grid place-items-center h-9 w-9 rounded-full border shrink-0 transition ${
          open ? 'bg-ink-800 text-bone-50 border-ink-800 rotate-45' : 'border-ink-800/15 text-ink-700 group-hover:border-ink-800'
        }`}>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="text-[15px] text-stone-deep leading-relaxed max-w-2xl pr-12">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faqs" className="relative">
      <div className="container-x py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left — sticky heading + helper */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="eyebrow mb-5">Common questions</div>
              <h2 className="h-display text-[36px] sm:text-[42px] lg:text-[44px] leading-[1.05] text-balance">
                Everything homeowners ask before booking.
              </h2>

              <div className="mt-8 rounded-2xl bg-bone-100 border border-ink-800/10 p-6">
                <div className="text-[14px] text-stone-deep mb-4">
                  Can't find what you're looking for?
                </div>
                <Link to="/contact" className="btn-primary !py-2.5 !px-4 text-[13px] w-full">
                  Ask in your free estimate
                </Link>
              </div>
            </div>
          </aside>

          {/* Right — FAQs */}
          <div className="lg:col-span-8 lg:border-l lg:border-ink-800/10 lg:pl-12">
            {faqs.map((f, i) => (
              <Item
                key={f.q}
                q={f.q}
                a={f.a}
                open={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
