import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-matte-black">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?auto=format&fit=crop&q=80&w=1920" 
            alt="Cinematic Lash Detail"
            className="w-full h-full object-cover opacity-40 brightness-75 scale-110"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-matte-black/20 to-matte-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mb-8"
          >
            <span className="text-[10px] kerning-widest uppercase text-rose-gold border-x border-rose-gold/30 px-6">Noir Edition Artistry</span>
          </motion.div>
          
          <h1 className="text-center">
            <motion.span
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="block text-7xl md:text-9xl lg:text-[11rem] text-white font-serif tracking-tighter leading-[0.8] mb-4"
            >
              Beyond
            </motion.span>
            <motion.span
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block text-7xl md:text-9xl lg:text-[11rem] text-rose-gold font-serif italic tracking-tighter leading-[0.8] opacity-90"
            >
              Elegance
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex flex-col items-center"
          >
            <p className="max-w-md text-center text-sm font-light tracking-wide text-white/50 mb-12 leading-loose font-body">
              A bespoke lash experience tailored for the modern muse. We define the intersection of health, art, and high-fashion aesthetics.
            </p>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-white text-matte-black px-14 py-5 rounded-full text-[10px] uppercase tracking-[0.3em] font-sans font-black flex items-center group overflow-hidden"
              >
                <span className="relative z-10">Secure Your Slot</span>
                <div className="absolute inset-0 bg-rose-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <ArrowRight className="ml-3 w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <div className="flex items-center space-x-4 opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
                <div className="w-12 h-[1px] bg-white" />
                <span className="text-[9px] uppercase tracking-[0.4em] text-white">Full Services</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Side Decorative Text */}
      <div className="absolute right-10 bottom-24 hidden lg:block">
        <span className="vertical-rl text-[10px] uppercase kerning-widest text-white/10 select-none">
          Couture Lash Studio 2026
        </span>
      </div>
    </section>
  );
}

