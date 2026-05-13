import { motion } from 'motion/react';
import About from '../components/About';

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <div className="bg-nude-base py-24 text-center">
        <h1 className="text-5xl md:text-8xl font-serif mb-6">Our <span className="italic">Story</span></h1>
        <p className="text-xs uppercase tracking-[0.5em] text-rose-gold">The visionaries behind the lash</p>
      </div>
      
      <About />
      
      {/* Extended About Content */}
      <section className="py-24 bg-matte-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-serif text-rose-gold mb-4 italic">Vision</div>
              <p className="text-sm opacity-60 leading-relaxed uppercase tracking-wider font-sans">Empowering confidence through meticulously crafted aesthetics.</p>
            </div>
            <div>
              <div className="text-5xl font-serif text-rose-gold mb-4 italic">Mission</div>
              <p className="text-sm opacity-60 leading-relaxed uppercase tracking-wider font-sans">To set the gold standard in South African lash artistry.</p>
            </div>
            <div>
              <div className="text-5xl font-serif text-rose-gold mb-4 italic">Values</div>
              <p className="text-sm opacity-60 leading-relaxed uppercase tracking-wider font-sans">Integrity, continuous education, and unparalleled client care.</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
