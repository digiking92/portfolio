import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import Problem from '../components/home/Problem';
import Solution from '../components/home/Solution';
import Capabilities from '../components/home/Capabilities';
import InstantShowcase from '../components/home/InstantShowcase';
import SiteScopeStrip from '../components/home/SiteScopeStrip';
import Process from '../components/home/Process';
import CaseStudiesPreview from '../components/home/CaseStudiesPreview';
import WhyCtop from '../components/home/WhyCtop';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import ContactCTA from '../components/home/ContactCTA';
import FadeUp from '../components/motion/FadeUp';

interface HomePageProps {
  onContactClick: () => void;
}

export default function HomePage({ onContactClick }: HomePageProps) {
  return (
    <>
      <Hero onContactClick={onContactClick} />
      <TrustBar />
      <FadeUp>
        <Problem />
      </FadeUp>
      <FadeUp>
        <Solution onContactClick={onContactClick} />
      </FadeUp>
      <Capabilities onContactClick={onContactClick} />
      <InstantShowcase onContactClick={onContactClick} />
      <SiteScopeStrip onContactClick={onContactClick} />
      <FadeUp>
        <Process onContactClick={onContactClick} />
      </FadeUp>
      <FadeUp>
        <CaseStudiesPreview onContactClick={onContactClick} />
      </FadeUp>
      <FadeUp>
        <WhyCtop onContactClick={onContactClick} />
      </FadeUp>
      <FadeUp>
        <Testimonials onContactClick={onContactClick} />
      </FadeUp>
      <FadeUp>
        <FAQ onContactClick={onContactClick} />
      </FadeUp>
      <ContactCTA onContactClick={onContactClick} />
    </>
  );
}
