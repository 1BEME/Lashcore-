import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-32">
          <div className="max-w-lg">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 mb-8"
            >
              <div className="w-12 h-[1px] bg-rose-gold" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold font-sans font-bold">The Menu</span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-serif leading-[0.9] tracking-tighter">
              Curated <br /> <span className="italic">Excellence</span>
            </h2>
          </div>
          <div className="mt-12 md:mt-0 flex items-end h-full">
            <p className="font-body font-light text-slate-400 max-w-xs leading-loose text-sm italic">
              "Beauty begins the moment you decide to be yourself." — We simply provide the frame.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 1 }}
              className={`md:col-span-6 lg:col-span-4 ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden luxury-mask mb-10 aspect-[4/5]">
                  <img 
                    src={`https://images.unsplash.com/photo-1583001809270-7a02299a9e64?auto=format&fit=crop&q=80&w=800&sig=${index + 10}`}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="text-[10px] text-white bg-matte-black px-4 py-2 rounded-full uppercase tracking-widest font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Noir Selected
                    </span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-baseline border-b border-black/5 pb-6">
                    <h3 className="text-3xl font-serif font-light">{service.title}</h3>
                    <span className="text-xl font-serif text-rose-gold">{service.price}</span>
                  </div>
                  <p className="text-sm font-body text-slate-500 font-light leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.3em] font-sans font-bold text-matte-black/40 pt-4">
                    <span>{service.duration}</span>
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-2 text-rose-gold overflow-hidden"
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">Request Set</span>
                      <ArrowRight size={14} />
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

