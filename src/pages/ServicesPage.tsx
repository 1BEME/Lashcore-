import { motion } from 'motion/react';
import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <div className="bg-matte-black py-24 text-white text-center">
        <h1 className="text-5xl md:text-8xl font-serif mb-6">Our <span className="italic">Services</span></h1>
        <p className="text-xs uppercase tracking-[0.5em] opacity-40">The definitive menu of artistry</p>
      </div>
      
      <Services />
      
      {/* Additional Details (Example: Aftercare) */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-8 italic">Aftercare is Art</h2>
              <p className="font-body text-slate-500 mb-8 leading-relaxed">
                To ensure your lashes remain pristine and healthy, proper maintenance is essential. We provide a complimentary aftercare kit with every new set.
              </p>
              <ul className="space-y-4">
                {['Avoid water for the first 24 hours', 'Cleanse daily with our lash-safe foam', 'Brush twice daily with your spoolie', 'Avoid oil-based makeup and removers'].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-4">
                    <div className="w-6 h-6 rounded-full bg-nude-base flex items-center justify-center text-[10px] font-bold">{idx + 1}</div>
                    <span className="text-sm font-body text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800"
                alt="Lash Care"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
