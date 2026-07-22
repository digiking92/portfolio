/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Testimonial from './components/Testimonial';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleOpenContact = () => setIsContactModalOpen(true);
  const handleCloseContact = () => setIsContactModalOpen(false);

  return (
    <div className="min-h-screen bg-bg-dark text-gray-100 font-sans selection:bg-brand-yellow/30 selection:text-white">
      {/* Navigation Header */}
      <Header onContactClick={handleOpenContact} />

      {/* Hero Section */}
      <Hero onContactClick={handleOpenContact} />

      {/* Services and "Why Hire Me" section */}
      <Services />

      {/* Projects showcase section */}
      <Projects onContactClick={handleOpenContact} />

      {/* Dynamic stats tracker section */}
      <Stats />

      {/* Client testimonial quote block */}
      <Testimonial />

      {/* Call to action card */}
      <ContactCTA onContactClick={handleOpenContact} />

      {/* Complete Footer & floating actions */}
      <Footer onContactClick={handleOpenContact} />

      {/* Interactive Contact Popup Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={handleCloseContact} />
    </div>
  );
}

