import { motion } from 'motion/react';
import { SKINCORE_SERVICES } from '../components/constants';
import { Droplets, Sparkles, ShieldCheck, ArrowRight, Stethoscope, Syringe, Activity, HeartPulse } from 'lucide-react';

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
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-10 w-full max-w-[400px]"
              >
                <img 
                  src="https://i.postimg.cc/QN7wmbfx/IMG-20260514-WA0011.jpg" 
                  alt="Skincore Clinic" 
                  className="w-full h-auto object-contain invert mix-blend-multiply opacity-100 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
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

      {/* Aesthetic Excellence - Medical Section */}
      <section className="py-32 bg-nude-base/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="flex items-center space-x-4 text-rose-gold">
                <Stethoscope size={24} />
                <span className="text-[10px] uppercase tracking-[0.4em] font-sans font-bold">Medical Grade Aesthetic Services</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif tracking-tighter leading-tight italic">
                Artistry Meets <br /><span className="text-matte-black not-italic opacity-100">Medical Science</span>
              </h2>
              <p className="text-sm md:text-base font-light text-slate-500 max-w-lg leading-relaxed">
                All our advanced aesthetic procedures are exclusively administered by qualified medical doctors, ensuring the highest standards of safety, precision, and natural-looking results.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-6">
                {[
                  { title: "Lip Filler", desc: "Enhance volume and refine shape with natural results." },
                  { title: "Sculptra™", desc: "Natural collagen stimulation for subtle, lasting rejuvenation." },
                  { title: "Botox®", desc: "Precision neuromodulators for skin smoothing and contouring." },
                  { title: "Chemical Peel", desc: "Medical-grade resurfacing for radiant, winter-ready skin." }
                ].map((item, i) => (
                  <div key={i} className="border-l border-rose-gold/30 pl-6 space-y-2">
                    <h4 className="font-serif text-lg italic">{item.title}</h4>
                    <p className="text-xs font-light text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="luxury-mask rounded-[4rem] overflow-hidden aspect-square shadow-2xl">
                <img 
                  src="https://i.postimg.cc/GhB0hFFc/6938c2f0-501c-11f1-904f-ed07f0a9f03c.png" 
                  alt="Medical Aesthetics" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[3rem] shadow-xl border border-rose-gold/10 hidden md:block">
                 <div className="flex flex-col items-center text-center">
                    <ShieldCheck className="text-rose-gold mb-4" size={32} />
                    <span className="text-[10px] uppercase tracking-widest font-sans font-black">Doctor Administered</span>
                    <span className="text-lg font-serif">Guaranteed Safety</span>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialized Clinical Programs */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
             <span className="text-[10px] uppercase tracking-[0.5em] text-rose-gold mb-6 block font-sans font-bold">Clinical Protocols</span>
             <h2 className="text-5xl md:text-7xl font-serif tracking-tighter italic leading-none">Transformation <br /><span className="not-italic text-matte-black opacity-100">Journey</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-nude-base/10 rounded-[4rem] p-12 flex flex-col justify-between overflow-hidden relative group"
            >
               <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-10 text-rose-gold shadow-sm">
                    <Activity size={32} />
                  </div>
                  <h3 className="text-4xl font-serif mb-6 italic">Weight Loss Specials</h3>
                  <p className="text-sm font-light text-slate-500 mb-8 max-w-sm">
                    Medically supervised transformation journey including injections designed to support healthy weight loss, boost energy, and confidence.
                  </p>
                  <ul className="space-y-3 mb-10">
                    {['Medically Supervised Weight Loss Injections', 'Supports Healthy Weight Loss', 'Boosts Energy & Confidence', 'Personalized Care every step of the way'].map((item, i) => (
                      <li key={i} className="flex items-center space-x-3 text-xs tracking-wide text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
               </div>
               <div className="aspect-video rounded-[2rem] overflow-hidden">
                 <img src="https://i.postimg.cc/zGcVHSMK/8f65d0bb6046c7d1f47d6b558174250f.jpg" alt="Weight Loss Program" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
               </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-matte-black text-white rounded-[4rem] p-12 flex flex-col justify-between overflow-hidden relative group"
            >
               <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-10 text-rose-gold backdrop-blur-md">
                    <HeartPulse size={32} />
                  </div>
                  <h3 className="text-4xl font-serif mb-6 italic">Hair Loss Treatments</h3>
                  <p className="text-sm font-light opacity-60 mb-8 max-w-sm">
                    Medical solutions for real results. Target the root cause of hair loss with advanced, evidence-based treatments prescribed by medical doctors.
                  </p>
                  <ul className="space-y-3 mb-10">
                    {['PRP Therapy', 'Topical Minoxidil / Finasteride / Tretinoin', 'Oral Minoxidil / Finasteride', 'Hair Peptide Therapy'].map((item, i) => (
                      <li key={i} className="flex items-center space-x-3 text-xs tracking-wide opacity-80">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
               </div>
               <div className="aspect-video rounded-[2rem] overflow-hidden grayscale brightness-75 hover:grayscale-0 transition-all duration-1000">
                 <img src="https://i.postimg.cc/0Ntj1GGd/e2dde717aab509db9053c8461ee4e3cd-(1).jpg" alt="Hair Loss Solutions" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Botox Beyond Wrinkles Grid */}
      <section className="py-32 bg-nude-base/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
             <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold mb-6 block font-sans font-bold">Versatility of Neurotoxins</span>
             <h2 className="text-5xl md:text-7xl font-serif tracking-tighter italic">Botox® Is Not <br /><span className="not-italic text-matte-black opacity-100">Just for Wrinkles</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {[
              { title: "Jawline Lift", desc: "Softens neck bands and lifts for a defined jawline." },
              { title: "Chin Dimpling", desc: "Smooths texture for a more even appearance." },
              { title: "Brow Lift", desc: "Subtly lifts for a refreshed and awake look." },
              { title: "Excessive Sweating", desc: "Reduces underarm sweat and boosts confidence." },
              { title: "Shoulder Slimming", desc: "Slims and softens the appearance of bulky shoulders." },
              { title: "Headache / TMJ", desc: "Relieves tension, jaw clenching, and headaches." },
              { title: "Jawline Slimming", desc: "Slims the face by relaxing the masseter muscles." },
              { title: "Nostril Slimming", desc: "Refines the appearance of wider nostrils." },
              { title: "Lip Flip", desc: "Enhances your smile by relaxing the upper lip." }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group border-b border-rose-gold/20 pb-8"
              >
                <div className="flex items-baseline space-x-4 mb-4">
                  <span className="text-xl font-serif italic text-rose-gold/40 group-hover:text-rose-gold transition-colors">0{i+1}</span>
                  <h4 className="text-2xl font-serif group-hover:italic transition-all">{benefit.title}</h4>
                </div>
                <p className="text-sm font-light text-slate-500 leading-relaxed pl-10">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sculptra Focus */}
      <section className="py-40 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, scale: 1.1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                  className="rounded-[4rem] overflow-hidden aspect-[4/5] shadow-2xl luxury-mask"
                >
                  <img src="https://i.postimg.cc/rsN77jx0/7bdcee4806b6b1dcb68d610d0478a4b5-(1).jpg" alt="Sculptra Treatment" className="w-full h-full object-cover" />
                </motion.div>
             </div>
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="order-1 lg:order-2 space-y-12"
             >
                <div>
                   <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold mb-8 block font-sans font-bold italic">Medical Rejuvenation</span>
                   <h2 className="text-6xl md:text-8xl font-serif tracking-tighter leading-[0.9] italic">Sculptra™ <br /><span className="not-italic text-matte-black opacity-100">Bio-Stimulator</span></h2>
                </div>
                <p className="text-base md:text-lg font-light text-slate-500 leading-relaxed">
                   Natural collagen stimulation for subtle, lasting rejuvenation. Sculptra works with your body to restore volume and rejuvenate skin from within.
                </p>
                <div className="space-y-6">
                  {[
                    "Restores lost volume gradually & naturally",
                    "Stimulates your own collagen production",
                    "Long-lasting, natural results",
                    "Improves skin texture, firmness & elasticity",
                    "Enhances facial contours & overall radiance"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-6 group">
                      <div className="w-10 h-[1px] bg-rose-gold/30 group-hover:w-16 transition-all" />
                      <span className="text-sm font-body font-light italic">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="p-8 bg-nude-base/10 rounded-3xl border border-rose-gold/5 flex items-center space-x-6 italic font-serif">
                   <Sparkles className="text-rose-gold" />
                   <span>Safety is our priority. All procedures done by medical doctors.</span>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Lip Filler Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="space-y-12"
             >
                <div>
                   <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold mb-8 block font-sans font-bold italic">Facial Enhancement</span>
                   <h2 className="text-6xl md:text-8xl font-serif tracking-tighter leading-[0.9] italic">Lip <br /><span className="not-italic text-matte-black opacity-100">Filler</span></h2>
                </div>
                <p className="text-base md:text-lg font-light text-slate-500 leading-relaxed italic">
                   Enhance. Define. You.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  {[
                    "Enhance Volume",
                    "Refine Shape",
                    "Natural Results",
                    "Boost Confidence"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-4">
                      <div className="w-8 h-[1px] bg-rose-gold" />
                      <span className="text-xs uppercase tracking-widest font-sans font-bold text-slate-600">{benefit}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm font-light text-rose-gold italic">
                   Done by our expert team of Medical Doctors.
                </p>
             </motion.div>
             <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-[4rem] overflow-hidden aspect-square shadow-2xl luxury-mask"
                >
                  <img src="https://i.postimg.cc/jdChpvzy/faee85f99b3ebce10ac9f4178da49e8a.jpg" alt="Lip Filler Info" className="w-full h-full object-cover" />
                </motion.div>
             </div>
          </div>
        </div>
      </section>

      {/* Winter Chemical Peel */}
      <section className="py-32 bg-nude-base/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="rounded-[4rem] overflow-hidden aspect-video shadow-2xl luxury-mask"
                >
                  <img src="https://i.postimg.cc/PfDDYcQs/1f0d3361b389830acedac282d1251f04.jpg" alt="Winter Chemical Peel" className="w-full h-full object-cover" />
                </motion.div>
             </div>
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="order-1 lg:order-2 space-y-8"
             >
                <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold block font-sans font-bold">Seasonal Resurfacing</span>
                <h2 className="text-5xl md:text-7xl font-serif tracking-tighter italic">Winter <br /><span className="not-italic text-matte-black opacity-100">Chemical Peel</span></h2>
                <p className="text-base font-light text-slate-500 leading-relaxed">
                   The perfect time for deep renewal. Our medical-grade chemical peels are designed to resurface, brighten, and restore your skin during the cooler months.
                </p>
                <div className="p-8 border border-rose-gold/20 rounded-3xl italic font-serif text-lg">
                   Experience transformative results with protocols tailored to your skin's unique needs.
                </div>
             </motion.div>
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
             <span className="text-[10px] uppercase tracking-[0.5em] text-rose-gold mb-6 block font-sans font-bold">Clinical Results</span>
             <h2 className="text-6xl md:text-8xl font-serif tracking-tighter">Medical <span className="italic">Excellence</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
             <div className="space-y-8">
                <div className="rounded-[3rem] overflow-hidden aspect-square bg-nude-base/20 relative">
                   <img src="https://i.postimg.cc/Z5W4yk6V/IMG-20260514-WA0005.jpg" alt="Botox Results" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                   <div className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-white bg-matte-black/80 px-4 py-2 rounded-full">Forehead Neuromodulator</div>
                </div>
                <h4 className="font-serif text-2xl italic px-4">Line Correction Protocol</h4>
             </div>
             <div className="space-y-8 md:mt-32">
                <div className="rounded-[3rem] overflow-hidden aspect-square bg-nude-base/20 relative">
                   <img src="https://i.postimg.cc/wTSbFnSG/IMG-20260514-WA0009.jpg" alt="Filler Results" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                   <div className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.3em] font-sans font-bold text-white bg-rose-gold px-4 py-2 rounded-full">Lip Rejuvenation</div>
                </div>
                <h4 className="font-serif text-2xl italic px-4">Volume Restoration</h4>
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
