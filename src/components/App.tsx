/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import ScrollToTop from './ScrollToTop';
import CustomCursor from './CustomCursor';

// Pages
import Home from '../pages/Home';
import ServicesPage from '../pages/ServicesPage';
import AboutPage from '../pages/AboutPage';
import GalleryPage from '../pages/GalleryPage';
import ContactPage from '../pages/ContactPage';
import CoursesPage from '../pages/CoursesPage';
import SkincorePage from '../pages/SkincorePage';
import MentoringPage from '../pages/MentoringPage';
import PoliciesPage from '../pages/PoliciesPage';

function AppContent() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen noise">
      <CustomCursor />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-matte-black flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="text-center"
            >
              <h1 className="text-white font-serif text-4xl md:text-6xl tracking-[0.5em] mb-4">LASHCORE</h1>
              <div className="w-48 h-[1px] bg-white/20 mx-auto relative overflow-hidden">
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-rose-gold/80"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navbar />
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/academy" element={<CoursesPage />} />
                <Route path="/skincore" element={<SkincorePage />} />
                <Route path="/mentoring" element={<MentoringPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/policies" element={<PoliciesPage />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
          <Footer />
          <WhatsAppButton />
        </motion.div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

