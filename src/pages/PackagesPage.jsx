import Packages from '../components/Packages.jsx';
import FAQ from '../components/FAQ.jsx';
import CTABanner from '../components/CTABanner.jsx';

export default function PackagesPage() {
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="container-x relative pt-16 lg:pt-24 pb-10 lg:pb-12">
          <div className="max-w-3xl">
            <div className="eyebrow mb-6">Packages</div>
            <h1 className="h-display text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.04] text-balance">
              Three structured ways to transform your garage.
            </h1>
            <p className="mt-7 text-[17px] leading-relaxed text-stone-deep max-w-2xl">
              Pick the level that fits how you use the space. We'll customize the final scope around your garage's size, layout, and selections during a free design walkthrough.
            </p>
          </div>
        </div>
      </section>

      <Packages heading={false} />

      <FAQ />

      <CTABanner />
    </>
  );
}
