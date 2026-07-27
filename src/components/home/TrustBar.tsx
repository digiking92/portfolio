import { TRUST_SECTION, TRUST_AUDIENCES } from '../../data/ctopData';

export default function TrustBar() {
  const items = [...TRUST_AUDIENCES, ...TRUST_AUDIENCES];

  return (
    <section
      id="trust"
      className="relative z-20 -mt-6 sm:-mt-8 lg:-mt-10 pb-6 sm:pb-8 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 pointer-events-auto">
        <div className="relative rounded-2xl border border-line-strong bg-surface shadow-lg shadow-brand-navy/10 px-4 py-3.5 sm:px-5 sm:py-4 lg:py-[23px] overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
            <p className="brand-label text-brand-green !text-[9px] sm:!text-[10px] tracking-[0.14em] shrink-0 sm:pr-5 sm:border-r sm:border-line text-center sm:text-left">
              {TRUST_SECTION.eyebrow}
            </p>

            <div className="relative min-w-0 flex-1 overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-12 bg-gradient-to-r from-surface to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-12 bg-gradient-to-l from-surface to-transparent z-10" />

              <div className="trust-marquee-track gap-2.5 sm:gap-3">
                {items.map((item, i) => (
                  <span
                    key={`${item.id}-${i}`}
                    className="inline-flex items-center shrink-0 px-3.5 py-1.5 rounded-full border border-line-strong bg-bg text-fg font-sans text-xs sm:text-sm font-semibold tracking-wide shadow-sm"
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
