import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 silk-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 md:mb-32">
          <div className="max-w-lg">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 mb-6 md:mb-8"
            >
              <div className="w-12 h-[1px] bg-rose-gold" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold font-sans font-bold">The Menu</span>
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter">
              Featured <br /> <span className="italic">Sets</span>
            </h2>
          </div>
          <div className="mt-8 md:mt-0 flex items-end h-full">
            <p className="font-body font-light text-slate-400 max-w-xs leading-loose text-sm italic">
              "Every blink is a masterpiece." — Discover the Noir collection.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-20">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1 }}
              className={`md:col-span-6 lg:col-span-4 ${index % 2 !== 0 ? 'lg:mt-24' : ''}`}
            >
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden luxury-mask mb-8 aspect-[3/4] bg-nude-base/10 shadow-inner">
                  <img 
                    src={`https://images.unsplash.com/photo-1583001809270-7a02299a9e64?auto=format&fit=crop&q=80&w=800&sig=${index + 20}`}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale brightness-105 hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="text-[9px] text-white bg-matte-black/40 backdrop-blur-md px-4 py-2 rounded-full uppercase tracking-widest font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Signature Noir
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 md:space-y-6 px-2">
                  <div className="flex justify-between items-baseline border-b border-black/5 pb-4">
                    <h3 className="text-2xl md:text-3xl font-serif font-light">{service.title}</h3>
                    <span className="text-lg md:text-xl font-serif text-rose-gold">{service.price}</span>
                  </div>
                  <p className="text-xs md:text-sm font-body text-slate-500 font-light leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.3em] font-sans font-bold text-matte-black/40 pt-2">
                    <span>{service.duration} Ritual</span>
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-2 text-rose-gold overflow-hidden"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">Reserve</span>
                      <ArrowRight size={12} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

