import { motion } from 'motion/react';
import { Sparkles, TrendingUp, Presentation, HelpingHand, Award, Users, ArrowRight, Star } from 'lucide-react';

export default function MentoringPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 min-h-screen bg-white"
    >
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10 w-full">
          <div>
            <motion.div
               initial={{ x: -50, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 1 }}
            >
              <span className="text-[10px] kerning-widest uppercase text-rose-gold mb-8 block font-sans font-bold">Lashcore Academy</span>
              <h1 className="text-6xl md:text-8xl font-serif tracking-tighter leading-[0.9] italic mb-8">
                Skincore <br /><span className="not-italic text-matte-black opacity-100">Mentoring</span>
              </h1>
              <p className="max-w-md text-sm md:text-base font-light tracking-wide text-slate-500 leading-relaxed font-body mb-12">
                Elevate your artistry and business. Our mentoring programs offer bespoke guidance, beauty business education, and the personal development you need to thrive in the aesthetic industry.
              </p>
              <div className="flex space-x-6">
                <a 
                  href="#book"
                  className="inline-block"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-matte-black text-white px-10 py-5 rounded-full text-[10px] uppercase tracking-[0.4em] font-sans font-black shadow-xl"
                  >
                    Book A Session
                  </motion.button>
                </a>
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
                  src="https://i.postimg.cc/66S8KYh5/FB-IMG-1778918714134.jpg" 
                  alt="Mentoring Session" 
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
             </motion.div>
          </div>
        </div>
      </section>

      {/* About Mentoring */}
      <section className="py-32 bg-nude-base/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="luxury-mask rounded-[4rem] overflow-hidden aspect-square shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1571781404720-fb7486e9e503?q=80&w=2000&auto=format&fit=crop" 
                  alt="Business Growth" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10 order-1 lg:order-2"
            >
              <div className="flex items-center space-x-4 text-rose-gold">
                <TrendingUp size={24} />
                <span className="text-[10px] uppercase tracking-[0.4em] font-sans font-bold">Unlocking Potential</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif tracking-tighter leading-tight italic">
                Master Your <br /><span className="text-matte-black not-italic opacity-100">Craft & Business</span>
              </h2>
              <p className="text-sm md:text-base font-light text-slate-500 max-w-lg leading-relaxed">
                Whether you are just starting out or looking to scale an existing aesthetic practice, our mentoring program provides actionable beauty industry guidance. We focus on comprehensive business growth, strategic branding, confidence building, client acquisition, and refining your advanced techniques.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-6">
                {[
                  { title: "Strategic Branding", desc: "Build a brand that attracts premium clientele." },
                  { title: "Client Building", desc: "Proven strategies to grow and retain your books." },
                  { title: "Confidence", desc: "Overcome imposter syndrome and own your value." },
                  { title: "Advanced Technique", desc: "Refine your physical skills with expert feedback." }
                ].map((item, i) => (
                  <div key={i} className="border-l border-rose-gold/30 pl-6 space-y-2">
                     <h4 className="font-serif text-lg italic">{item.title}</h4>
                     <p className="text-xs font-light text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs / Services */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
             <span className="text-[10px] uppercase tracking-[0.5em] text-rose-gold mb-6 block font-sans font-bold">Mentoring Tracks</span>
             <h2 className="text-5xl md:text-7xl font-serif tracking-tighter italic leading-none">Tailored <br /><span className="not-italic text-matte-black opacity-100">Programs</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "1-on-[1] Mentoring", desc: "Highly personalized sessions focused entirely on your unique challenges and opportunities." },
              { title: "Beauty Business Coaching", desc: "Strategic planning, financial insight, and operational systems for your clinic or studio." },
              { title: "Branding & Social Media", desc: "Curate a premium aesthetic online to effortlessly attract your target demographic." },
              { title: "Beginner Lash Artist", desc: "Foundational support to accelerate your learning curve and establish your first business." },
              { title: "Advanced Technique", desc: "Deep dive into nuanced physical skills, speed, retention, and flawless execution." },
              { title: "Online Mentorship", desc: "Virtual sessions accessible from anywhere, ensuring you get guidance no matter your location." }
            ].map((program, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-nude-base/5 border border-nude-base/20 rounded-[3rem] p-10 group hover:bg-matte-black hover:text-white transition-colors duration-500 flex flex-col"
              >
                 <div className="mb-auto">
                    <h3 className="text-2xl font-serif mb-4 italic group-hover:text-rose-gold transition-colors">{program.title}</h3>
                    <p className="text-sm font-light text-slate-500 group-hover:text-slate-300 leading-relaxed">
                      {program.desc}
                    </p>
                 </div>
                 <div className="mt-8 pt-6 border-t border-rose-gold/10 flex justify-end">
                    <ArrowRight className="text-rose-gold opacity-50 group-hover:opacity-100 transition-opacity" size={20} />
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Icons */}
      <section className="py-32 bg-matte-black text-white relative flex items-center min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
           <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-serif tracking-tighter italic">Why Choose <span className="not-italic">Us</span></h2>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
              {[
                { icon: <Users size={28} />, title: "Personalized Guidance" },
                { icon: <Award size={28} />, title: "Industry Knowledge" },
                { icon: <TrendingUp size={28} />, title: "Business Growth" },
                { icon: <Star size={28} />, title: "Confidence Building" },
                { icon: <HelpingHand size={28} />, title: "Ongoing Support" },
                { icon: <Presentation size={28} />, title: "Professional Development" }
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-6 group-hover:bg-rose-gold/20 transition-all text-rose-gold">
                    {benefit.icon}
                  </div>
                  <h4 className="text-lg font-serif italic">{benefit.title}</h4>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-nude-base/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
             <span className="text-[10px] uppercase tracking-[0.5em] text-rose-gold mb-6 block font-sans font-bold">Success Stories</span>
             <h2 className="text-5xl md:text-7xl font-serif tracking-tighter italic leading-none">Artist <br /><span className="not-italic text-matte-black opacity-100">Testimonials</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                text: "The mentoring shifted my entire perspective. I came in struggling to find clients, and left with a fully booked schedule and a premium brand identity that actually reflects my work.",
                author: "Sarah J.",
                role: "Independent Lash Artist"
              },
              {
                text: "Game changer. The business coaching helped me understand my numbers, streamline my operations, and finally have the confidence to raise my prices without fear.",
                author: "Michaela R.",
                role: "Studio Owner"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-12 rounded-[3rem] shadow-sm relative"
              >
                 <div className="text-rose-gold mb-8">
                    <Sparkles size={32} />
                 </div>
                 <p className="text-lg md:text-xl font-serif italic text-slate-700 leading-relaxed mb-8">
                   "{testimonial.text}"
                 </p>
                 <div className="flex items-center space-x-4">
                    <div className="w-10 h-[1px] bg-rose-gold" />
                    <div>
                       <h5 className="font-sans font-bold text-xs uppercase tracking-widest text-matte-black">{testimonial.author}</h5>
                       <span className="text-[10px] text-slate-400 uppercase tracking-widest">{testimonial.role}</span>
                    </div>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="book" className="py-40 bg-white text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-[10px] uppercase tracking-[0.5em] text-rose-gold mb-6 block font-sans font-bold">Take The Next Step</span>
          <h2 className="text-6xl md:text-[9rem] font-serif mb-12 tracking-tighter leading-none text-matte-black">
             Accelerate <br /> <span className="italic opacity-30">Your Growth</span>
          </h2>
          <a 
            href="https://wa.me/27846613711?text=Hi%20Lashcore,%20I'd%20like%20to%20book%20a%20Mentoring%20Session."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-matte-black text-white px-16 py-6 rounded-full text-[10px] uppercase tracking-[0.4em] font-sans font-black shadow-2xl"
            >
              Contact Us To Book
            </motion.button>
          </a>
        </div>
      </section>
    </motion.div>
  );
}
