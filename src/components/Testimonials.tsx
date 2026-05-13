import { motion } from 'motion/react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-matte-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.5em] text-rose-gold mb-6 block font-sans"
          >
            The Lashcore Experience
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-serif tracking-tight">Real Reviews, <br /> <span className="italic">Radiant Results</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass p-10 rounded-[3rem] relative"
            >
              <div className="flex space-x-1 mb-6">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} size={16} className="fill-rose-gold text-rose-gold" />
                ))}
              </div>
              <p className="font-serif text-xl italic leading-relaxed mb-8 opacity-80">
                "{t.review}"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-nude-dark flex items-center justify-center text-matte-black font-bold uppercase text-xs">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-sans text-xs uppercase tracking-widest font-bold">{t.name}</h4>
                  <p className="text-[10px] opacity-40 uppercase tracking-widest">Verified Client</p>
                </div>
              </div>
              
              <div className="absolute top-10 right-10 opacity-10">
                <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor">
                  <path d="M0 30V15C0 6.71573 6.71573 0 15 0H16V5H15C9.47715 5 5 9.47715 5 15V17H16V30H0ZM24 30V15C24 6.71573 30.7157 0 39 0H40V5H39C33.4772 5 29 9.47715 29 15V17H40V30H24Z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
