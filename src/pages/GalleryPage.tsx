import { motion } from 'motion/react';
import Gallery from '../components/Gallery';

export default function GalleryPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <div className="bg-white py-24 text-center">
        <h1 className="text-5xl md:text-8xl font-serif mb-6">Visual <span className="italic">Portfolio</span></h1>
        <p className="text-xs uppercase tracking-[0.5em] text-slate-400">Curated results of precision and beauty</p>
      </div>
      
      <Gallery />
      
      <section className="py-24 bg-nude-light text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-serif italic mb-8">Want your transformation featured?</h3>
          <p className="mb-12 font-body text-slate-500">Capture your new look and tag us @LASHCORE_CPT for a chance to be showcased.</p>
        </div>
      </section>
    </motion.div>
  );
}
