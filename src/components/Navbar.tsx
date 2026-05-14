import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Skincore', href: '/skincore' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Academy', href: '/academy' },
    { name: 'Contact', href: '/contact' },
  ];

  const darkPaths = ['/', '/services', '/contact', '/academy'];
  const isDark = darkPaths.includes(location.pathname) && !isScrolled;

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className={`max-w-7xl mx-auto px-6 flex justify-between items-center ${isScrolled ? 'text-matte-black' : isDark ? 'text-white' : 'text-matte-black'}`}>
        <Link to="/">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            {/* Logo removed as per user request */}
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={link.href}
                className={`text-xs uppercase tracking-[0.2em] font-sans hover:text-rose-gold transition-colors ${location.pathname === link.href ? 'text-rose-gold' : ''}`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-sans transition-colors shadow-lg shadow-black/10 ${isScrolled || !isDark ? 'bg-matte-black text-white hover:bg-rose-gold' : 'bg-white text-matte-black hover:bg-rose-gold hover:text-white'}`}
            >
              Book Now
            </motion.button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl py-8 flex flex-col items-center space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xs uppercase tracking-[0.2em] font-sans text-matte-black ${location.pathname === link.href ? 'text-rose-gold' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <button className="bg-matte-black text-white px-10 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-sans">
                Book Now
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
