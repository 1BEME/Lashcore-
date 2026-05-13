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
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-7 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="rounded-[3rem] overflow-hidden aspect-[16/9] shadow-2xl relative z-10"
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
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[10px] uppercase tracking-[0.6em] text-rose-gold mb-10 block font-sans font-bold"
              >
                Philosophy of Beauty
              </motion.span>
              <h2 className="text-6xl md:text-8xl font-serif mb-10 tracking-tighter leading-[0.9]">
                The <span className="italic">Lashcore</span> Standard
              </h2>
              <p className="text-slate-500 font-body mb-12 leading-loose text-sm font-light">
                We believe that every set of eyes tells a unique story. Our mission is to enhance that narrative with technical precision and an artisanal touch that is unmatched in the industry.
              </p>
              <Link to="/about" className="group inline-flex items-center space-x-6">
                <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-black">Learn More</span>
                <div className="w-16 h-[1px] bg-matte-black group-hover:w-24 group-hover:bg-rose-gold transition-all duration-500" />
              </Link>
            </div>
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

