import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionLabel from '../SectionLabel';

const SHOWCASE_IMAGE = '/images/showcases/pure-black.png';

function BrowserFrame({
  src,
  alt,
  objectPosition = 'center top',
  dimmed = false,
}: {
  src: string;
  alt: string;
  objectPosition?: string;
  dimmed?: boolean;
}) {
  return (
    <div className={`showcase-frame h-full ${dimmed ? 'showcase-frame-dim' : ''}`}>
      <div className="showcase-chrome">
        <span className="showcase-dot bg-[#ff5f57]" />
        <span className="showcase-dot bg-[#febc2e]" />
        <span className="showcase-dot bg-[#28c840]" />
        <span className="showcase-url">pureblack.studio</span>
      </div>
      <div className="showcase-viewport">
        <img
          src={src}
          alt={alt}
          className="showcase-shot"
          style={{ objectPosition }}
        />
        <div className="showcase-viewport-fade" aria-hidden />
      </div>
    </div>
  );
}

export default function InstantShowcase(_props?: { onContactClick?: () => void }) {
  return (
    <section
      id="showcase"
      className="relative overflow-hidden py-24 sm:py-32 bg-[#070b12] text-white border-t border-white/10"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_40%,rgba(74,222,128,0.1),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)',
            backgroundSize: '44px 44px',
            maskImage: 'radial-gradient(ellipse 75% 60% at 50% 45%, black 20%, transparent 72%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="flex justify-center">
            <SectionLabel>Instant Showcase</SectionLabel>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-white">
            Full-page presence. Framed.
          </h2>
          <p className="text-white/70 font-sans text-base sm:text-lg leading-relaxed">
            Immersive homepage builds, staged like a product reveal, not a flat screenshot dump.
          </p>
        </div>

        <div className="showcase-stage mx-auto w-full max-w-5xl">
          <div className="showcase-fan">
            <div className="showcase-panel showcase-panel-left" aria-hidden>
              <BrowserFrame
                src={SHOWCASE_IMAGE}
                alt=""
                objectPosition="center 20%"
                dimmed
              />
            </div>

            <div className="showcase-panel showcase-panel-center">
              <BrowserFrame
                src={SHOWCASE_IMAGE}
                alt="Pure Black homepage showcase"
                objectPosition="center top"
              />
            </div>

            <div className="showcase-panel showcase-panel-right" aria-hidden>
              <BrowserFrame
                src={SHOWCASE_IMAGE}
                alt=""
                objectPosition="center 45%"
                dimmed
              />
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-14 flex justify-center">
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 text-sm font-sans font-bold uppercase tracking-wider text-white/70 hover:text-brand-green transition-colors"
          >
            View engagements
            <ArrowUpRight className="w-4 h-4 text-brand-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
