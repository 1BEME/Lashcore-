import { motion } from 'motion/react';
import { SKINCORE_SERVICES } from '../constants';
import { Droplets, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

export default function SkincorePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 min-h-screen bg-nude-light/10"
    >
      {/* Skincore Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10 w-full">
          <div>
            <motion.div
               initial={{ x: -50, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 1 }}
            >
              <span className="text-[10px] kerning-widest uppercase text-rose-gold mb-8 block font-sans font-bold">Clinical Luxury</span>
              <h1 className="text-7xl md:text-[10rem] font-serif tracking-tighter leading-[0.8] mb-10 text-matte-black">
                Skin<span className="italic font-light opacity-30">core</span>
              </h1>
              <p className="max-w-md text-sm md:text-base font-light tracking-wide text-slate-500 leading-relaxed font-body mb-12">
                A sanctuary dedicated to skin health and high-performance rejuvenation. We blend dermatological science with the Lashcore philosophy of effortless beauty.
              </p>
              <div className="flex space-x-12">
                 <div className="text-center">
                    <div className="text-3xl font-serif mb-1">0%</div>
                    <div className="text-[10px] uppercase tracking-widest font-sans opacity-40">Irritation</div>
                 </div>
                 <div className="text-center">
                    <div className="text-3xl font-serif mb-1">100%</div>
                    <div className="text-[10px] uppercase tracking-widest font-sans opacity-40">Efficacy</div>
                 </div>
                 <div className="text-center">
                    <div className="text-3xl font-serif mb-1">Premium</div>
                    <div className="text-[10px] uppercase tracking-widest font-sans opacity-40">Standard</div>
                 </div>
              </div>
            </motion.div>
          </div>
          
          <div className="relative">
             <motion.div
               initial={{ scale: 1.1, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 1.5 }}
               className="rounded-[4rem] overflow-hidden aspect-[4/5] shadow-2xl luxury-mask"
             >
                <img 
                  src="https://i.postimg.cc/q75jdr68/07891ab2f7a3a963d600df39a2fa22cd.jpg" 
                  alt="Skin Treatment" 
                  className="w-full h-full object-cover brightness-105"
                  referrerPolicy="no-referrer"
                />
             </motion.div>
             <div className="absolute top-10 -left-10 w-48 h-48 bg-white/80 backdrop-blur-3xl rounded-full flex flex-col items-center justify-center z-20 shadow-xl border border-white/20">
                <span className="text-[10px] uppercase tracking-widest font-sans font-bold mb-1">New Ritual</span>
                <span className="text-2xl font-serif italic">Hydra Glow</span>
             </div>
          </div>
        </div>
        
        {/* Abstract background graphics */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-nude-base/20 -z-0" />
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32">
             <div className="max-w-lg">
                <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold mb-8 block font-sans font-bold">The Rituals</span>
                <h2 className="text-6xl md:text-8xl font-serif leading-[0.9] tracking-tighter">Treatment <br /><span className="italic">Menu</span></h2>
             </div>
             <p className="mt-12 md:mt-0 max-w-xs text-sm font-body font-light text-slate-400 italic">
               Bespoke protocols designed for your specific skin architecture.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {SKINCORE_SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden luxury-mask mb-10 aspect-[1/1]">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale brightness-110 hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
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
                    <span>{service.duration} Session</span>
                    <ArrowRight size={14} className="text-rose-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skincare Ethos */}
      <section className="py-40 bg-matte-black text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-20">
            {[
              { icon: <Droplets size={32} />, title: "Botanical Infusion", desc: "We utilize pure, cold-pressed botanical extracts for maximum nutrient density and absorption." },
              { icon: <Sparkles size={32} />, title: "Advanced Tech", desc: "Integrating LED therapy and microcurrent technology to stimulate cellular renewal safely." },
              { icon: <ShieldCheck size={32} />, title: "Medical Grade", desc: "All treatment products are medical-grade to ensure clinical results within a luxury setting." }
            ].map((ethos, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center mb-8 group-hover:bg-rose-gold/20 transition-all">
                  <div className="text-rose-gold">{ethos.icon}</div>
                </div>
                <h4 className="text-2xl font-serif mb-4 italic">{ethos.title}</h4>
                <p className="text-sm font-body font-light opacity-50 leading-loose">{ethos.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30rem] font-serif italic text-white/5 whitespace-nowrap pointer-events-none -z-0">
          Skin Science
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
             <span className="text-[10px] uppercase tracking-[0.5em] text-rose-gold mb-6 block font-sans font-bold">The Evolution</span>
             <h2 className="text-6xl md:text-8xl font-serif tracking-tighter">Proven <span className="italic">Glow</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
             <div className="space-y-4">
                <div className="rounded-[3rem] overflow-hidden aspect-[4/3] bg-nude-base/20 relative">
                   <img src="https://i.postimg.cc/8P4dSGqR/635bbef049c34c492a6b8c0bea0ca3ab.jpg" alt="Before and After" className="w-full h-full object-cover brightness-95 grayscale" referrerPolicy="no-referrer" />
                   <div className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-white bg-matte-black/50 px-4 py-2 rounded-full">Week 0</div>
                </div>
                <h4 className="font-serif text-xl italic px-4">Texture Correction Ritual</h4>
             </div>
             <div className="space-y-4 md:mt-24">
                <div className="rounded-[3rem] overflow-hidden aspect-[4/3] bg-nude-base/20 relative">
                   <img src="https://i.postimg.cc/bJVLphG4/c47523700dc463a708332b9f3165b127-(1).jpg" alt="Before and After" className="w-full h-full object-cover brightness-110" referrerPolicy="no-referrer" />
                   <div className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-white bg-rose-gold px-4 py-2 rounded-full">Week 6</div>
                </div>
                <h4 className="font-serif text-xl italic px-4">After signature facial series</h4>
             </div>
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="py-40 bg-nude-base/20 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-6xl md:text-[9rem] font-serif mb-12 tracking-tighter leading-none text-matte-black">
             Illuminate <br /> <span className="italic opacity-30">Your Essence</span>
          </h2>
          <a 
            href="https://wa.me/27846613711?text=Hi%20Lashcore,%20I'd%20like%20to%20request%20a%20skin%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-matte-black text-white px-16 py-6 rounded-full text-[10px] uppercase tracking-[0.4em] font-sans font-black shadow-2xl"
            >
              Request Skin Consultation
            </motion.button>
          </a>
        </div>
      </section>
    </motion.div>
  );
}
