import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import Problem from '../components/home/Problem';
import Solution from '../components/home/Solution';
import InstantShowcase from '../components/home/InstantShowcase';
import Process from '../components/home/Process';
import CaseStudiesPreview from '../components/home/CaseStudiesPreview';
import Testimonials from '../components/home/Testimonials';
import ContactCTA from '../components/home/ContactCTA';

interface HomePageProps {
  onContactClick: (intent?: 'book' | 'message') => void;
}

/**
 * Premium homepage rhythm — fewer scenes, distinct layouts, one end CTA.
 * Not a feature-grid brochure.
 */
export default function HomePage({ onContactClick }: HomePageProps) {
  return (
    <>
      <Hero onContactClick={onContactClick} />
      <TrustBar />
      <Problem />
      <Solution onContactClick={onContactClick} />
      <InstantShowcase />
      <CaseStudiesPreview />
      <Process />
      <Testimonials />
      <ContactCTA onContactClick={onContactClick} />
    </>
  );
}
