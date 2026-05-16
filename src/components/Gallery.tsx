import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

const GALLERY_IMAGES = [
  { url: 'https://i.postimg.cc/y8zbx7dT/FB-IMG-1778776967625.jpg' },
  { url: 'https://i.postimg.cc/13XwBfMp/7c05311ad2cdeed8cb674fb9643d48f4.jpg' },
  { url: 'https://i.postimg.cc/T39CPmBf/FB-IMG-1778776905165.jpg' },
  { url: 'https://i.postimg.cc/mg1hhM8y/ca203b2d7a1526d17c34647e85caa74c.jpg' },
  { url: 'https://i.postimg.cc/jSZ4TTJS/FB-IMG-1778776848911.jpg' },
  { url: 'https://i.postimg.cc/9QBnKsBg/6a3950a4be5dcfb4252c90b882f59e90.jpg' },
  { url: 'https://i.postimg.cc/sgvvBC0w/FB-IMG-1778776830476.jpg' },
  { url: 'https://i.postimg.cc/HkX1vSJ6/FB-IMG-1778776821316.jpg' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32">
          <div className="max-w-lg">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 mb-8"
            >
              <div className="w-12 h-[1px] bg-rose-gold" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold font-sans font-bold">The Portfolio</span>
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-serif leading-[0.9] tracking-tighter">
              Aesthete <br /> <span className="italic">Vision</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`relative group overflow-hidden rounded-[2rem] shadow-xl ${
                index === 0 ? 'md:col-span-8' : 
                index === 3 ? 'md:col-span-8' : 
                index === 7 ? 'md:col-span-12' :
                'md:col-span-4'
              }`}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={img.url} 
                  alt={`Lashcore Gallery ${index}`}
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-matte-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col items-center justify-center p-8 text-center">
                <span className="text-[10px] uppercase tracking-[0.3em] text-rose-gold mb-4 font-bold">Lashcore Collection</span>
                <h4 className="text-white font-serif text-2xl italic mb-6">Bespoke Design No. {index + 10}</h4>
                <motion.a
                  href="https://www.instagram.com/lashcore_cpt?igsh=MXU3YjFoaWFuc2U1bA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-sm"
                >
                  <Instagram size={20} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-40">
          <div className="bg-matte-black p-12 md:p-24 rounded-[4rem] text-white relative overflow-hidden">
             <div className="relative z-10 flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
                <div className="max-w-md">
                   <h3 className="text-4xl md:text-6xl font-serif mb-6 italic leading-tight">Digital <br /> Sanctuary</h3>
                   <p className="text-sm font-light opacity-50 font-body leading-loose">Join our community of beauty enthusiasts for exclusive behind-the-scenes artistry and seasonal drops.</p>
                </div>
                <motion.a 
                  href="https://www.instagram.com/lashcore_cpt?igsh=MXU3YjFoaWFuc2U1bA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="bg-white text-matte-black px-16 py-6 rounded-full text-[10px] uppercase tracking-[0.4em] font-sans font-black shadow-2xl transition-all"
                >
                   Follow @LASHCORE_CPT
                </motion.a>
             </div>
             
             {/* Abstract background text */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] text-[20rem] font-serif italic whitespace-nowrap pointer-events-none select-none">
                Lashcore Artistry
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

