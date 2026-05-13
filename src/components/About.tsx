import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10 rounded-[4rem] overflow-hidden aspect-[4/5] shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=1000" 
                alt="Studio Atmosphere"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-nude-base rounded-full -z-0 opacity-50" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 border-2 border-rose-gold rounded-full -z-0 opacity-20" />
            
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute -bottom-10 -right-10 bg-matte-black text-white p-10 rounded-3xl z-20 hidden lg:block"
            >
              <div className="text-4xl font-serif mb-2">5000+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-sans opacity-60">Lashes Perfected</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.4em] text-rose-gold mb-6 block font-sans">
              The Studio Spirit
            </span>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-10">
              Beyond the <br /> <span className="italic">Mirror</span>
            </h2>
            <p className="font-body font-light text-slate-600 text-lg leading-relaxed mb-8">
              Founded on the belief that beauty is a feeling as much as a visual statement, Lashcore has become South Africa's premier destination for refined lash artistry.
            </p>
            <p className="font-body font-light text-slate-500 leading-relaxed mb-12">
              Our studio provides a serene escape from the everyday. We combine technical precision with a deep understanding of aesthetics to create results that aren't just "extensions"—they are personal enhancements that reflect your unique character.
            </p>
            
            <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-100">
              <div>
                <h4 className="font-serif text-xl mb-2">Premium Materials</h4>
                <p className="text-xs font-body text-slate-400">We exclusively use medical-grade adhesives and the softest faux-mink fibers.</p>
              </div>
              <div>
                <h4 className="font-serif text-xl mb-2">Artistry Driven</h4>
                <p className="text-xs font-body text-slate-400">Our artists undergo rigorous training regularly to master the latest techniques.</p>
              </div>
            </div>

            <motion.button
              whileHover={{ x: 10 }}
              className="mt-12 flex items-center space-x-4 group"
            >
              <div className="w-12 h-12 rounded-full bg-nude-base flex items-center justify-center group-hover:bg-rose-gold transition-colors">
                <div className="w-4 h-[1px] bg-matte-black" />
              </div>
              <span className="text-xs uppercase tracking-[0.3em] font-sans">Read Our Full Story</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
