import { motion } from 'motion/react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import LashQuiz from '../components/LashQuiz';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      
      {/* Editorial Intro Section */}
      <section className="py-24 md:py-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-12 mb-16 text-center max-w-4xl mx-auto">
               <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[10px] uppercase tracking-[0.6em] text-rose-gold mb-6 block font-sans font-bold"
              >
                The Noir Philosophy
              </motion.span>
               <h2 className="text-4xl md:text-7xl lg:text-9xl font-serif tracking-tighter leading-[0.8] mb-8">
                 Crafting <span className="italic opacity-50">Icons</span>
               </h2>
               <p className="text-slate-500 font-body leading-loose text-sm font-light max-w-2xl mx-auto">
                 We believe that every set of eyes tells a unique story. Our mission is to enhance that narrative with technical precision and an artisanal touch that is unmatched in the industry.
               </p>
            </div>

            <div className="lg:col-span-7 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="rounded-[3rem] overflow-hidden aspect-[16/9] shadow-2xl relative z-10 luxury-mask"
              >
                <img 
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200"
                  alt="High Fashion Lash"
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
                />
              </motion.div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-nude-base -z-0 rounded-full blur-[60px] opacity-30" />
            </div>
            
            <div className="lg:col-span-5">
              <div className="space-y-12">
                <div>
                   <h3 className="text-3xl font-serif mb-4 italic">Bespoke Mastery</h3>
                   <p className="text-sm font-body text-slate-400 leading-relaxed font-light">Each treatment is a collaborative effort between artist and muse, resulting in a look that is exclusively yours.</p>
                </div>
                <div>
                   <h3 className="text-3xl font-serif mb-4 italic">Clinical Precision</h3>
                   <p className="text-sm font-body text-slate-400 leading-relaxed font-light">Our medical-grade standards ensure that health and aesthetics go hand in hand.</p>
                </div>
                <Link to="/about" className="group inline-flex items-center space-x-6 pt-4">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-black">Our Heritage</span>
                  <div className="w-16 h-[1px] bg-matte-black group-hover:w-24 group-hover:bg-rose-gold transition-all duration-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Hub */}
      <section className="py-24 bg-nude-light/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Lashcore', desc: 'Elite eyelash extensions.', link: '/services', img: 'https://images.unsplash.com/photo-1583001809270-7a02299a9e64?auto=format&fit=crop&q=80&w=800' },
              { title: 'Skincore', desc: 'Clinical skin rituals.', link: '/skincore', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800' },
              { title: 'Academy', desc: 'Master the lash art.', link: '/academy', img: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=800' }
            ].map((dept, i) => (
              <Link key={i} to={dept.link} className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/5] block">
                <img src={dept.img} alt={dept.title} className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black/90 via-matte-black/20 to-transparent p-10 flex flex-col justify-end">
                   <h4 className="text-4xl text-white font-serif mb-2">{dept.title}</h4>
                   <p className="text-white/60 text-xs font-body font-light mb-6">{dept.desc}</p>
                   <div className="flex items-center text-[10px] uppercase tracking-widest text-rose-gold font-bold">
                      Explore Dept. <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
                   </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <Services />

      {/* Interactive Quiz */}
      <LashQuiz />
      
      <Testimonials />
      
      {/* Bottom CTA Noir Style */}
      <section className="py-40 bg-matte-black text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-9xl font-serif mb-12 tracking-tighter leading-none">
              Your <span className="italic opacity-50">Evolution</span> <br /> Starts Here
            </h2>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-matte-black px-20 py-7 rounded-full text-[10px] uppercase tracking-[0.4em] font-sans font-black shadow-2xl group relative overflow-hidden"
              >
                <span className="relative z-10">Instant Reservation</span>
                <div className="absolute inset-0 bg-rose-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-1/2 left-1/4 w-[1px] h-96 bg-white rotate-45" />
           <div className="absolute bottom-1/4 right-1/4 w-[1px] h-64 bg-white -rotate-45" />
        </div>
      </section>
    </motion.div>
  );
}

