import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import SmoothScroll from './components/motion/SmoothScroll';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleOpenContact = () => setIsContactModalOpen(true);
  const handleCloseContact = () => setIsContactModalOpen(false);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <SmoothScroll>
          <div className="min-h-screen bg-bg text-fg font-sans selection:bg-brand-green/25 selection:text-fg transition-colors duration-300">
            <Header onContactClick={handleOpenContact} />
            <main>
              <Routes>
                <Route path="/" element={<HomePage onContactClick={handleOpenContact} />} />
                <Route path="/about" element={<AboutPage onContactClick={handleOpenContact} />} />
                <Route path="/services" element={<ServicesPage onContactClick={handleOpenContact} />} />
                <Route path="/work" element={<WorkPage onContactClick={handleOpenContact} />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
            <Footer onContactClick={handleOpenContact} />
            <ContactModal isOpen={isContactModalOpen} onClose={handleCloseContact} />
          </div>
        </SmoothScroll>
      </BrowserRouter>
    </ThemeProvider>
  );
}
