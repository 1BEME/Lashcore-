import { Link } from 'react-router-dom';
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
                src="https://i.postimg.cc/T39CPmBf/FB-IMG-1778776905165.jpg" 
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
              <div className="text-4xl font-serif mb-2">25,480+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] font-sans opacity-60">Perfect Procedures</div>
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
              Lashcore was launched in 2014 by Ilhaam, bringing over 15 years of technical expertise to Rondebosch East. Located just 1-minute from the M5, what started as a dedicated threading practice has evolved into Cape Town's premier destination for refined lash and brow artistry.
            </p>
            <p className="font-body font-light text-slate-500 leading-relaxed mb-12">
              Our studio provides a serene escape where technical precision meets a deep understanding of aesthetics. With 12+ years of specialized lashing experience and a team of 5+ master artists, we create bespoke enhancements that reflect your unique character.
            </p>
            
            <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate-100">
              <div>
                <h4 className="font-serif text-xl mb-2">12+ Years</h4>
                <p className="text-xs font-body text-slate-400">Specialized lash extension mastery and clinical precision.</p>
              </div>
              <div>
                <h4 className="font-serif text-xl mb-2">15+ Years</h4>
                <p className="text-xs font-body text-slate-400">Master threading experience refined since the age of 14.</p>
              </div>
            </div>

            <Link to="/about">
              <motion.button
                whileHover={{ x: 10 }}
                className="mt-12 flex items-center space-x-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-nude-base flex items-center justify-center group-hover:bg-rose-gold transition-colors">
                  <div className="w-4 h-[1px] bg-matte-black group-hover:bg-white transition-colors" />
                </div>
                <span className="text-xs uppercase tracking-[0.3em] font-sans">Read Our Full Story</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
