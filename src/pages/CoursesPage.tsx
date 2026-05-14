import { motion } from 'motion/react';
import { COURSES } from '../constants';
import { CheckCircle2, ArrowRight, GraduationCap, Award, Users } from 'lucide-react';

export default function CoursesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24 min-h-screen"
    >
      {/* Academy Hero */}
      <section className="bg-matte-black py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://i.ibb.co/C5r7d6Tm/2f1691d69aed4cf505a35d103e6c631e.jpg" 
            alt="Academy Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
             initial={{ y: 30, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] kerning-widest uppercase text-rose-gold mb-8 block font-sans font-bold">The Academy</span>
            <h1 className="text-6xl md:text-9xl font-serif tracking-tighter leading-[0.8] mb-8">
              Lashcore <br /> <span className="italic font-light opacity-80">Masters</span>
            </h1>
            <p className="max-w-2xl mx-auto text-sm md:text-base font-light tracking-wide text-white/60 leading-relaxed font-body mb-12">
              Transform your passion into a prestigious career. Join South Africa’s leading lash academy and master the technical precision that defines our brand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
             <h2 className="text-5xl md:text-7xl font-serif tracking-tight mb-4">Our <span className="italic">Curriculum</span></h2>
             <div className="w-24 h-[1px] bg-rose-gold mx-auto" />
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {COURSES.map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col h-full bg-nude-light/30 rounded-[3rem] p-4 hover:shadow-2xl transition-all duration-700"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] mb-8">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="px-6 pb-8 flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl font-serif leading-tight">{course.title}</h3>
                    <span className="text-lg font-serif text-rose-gold">{course.price}</span>
                  </div>
                  <p className="text-sm font-body text-slate-500 font-light leading-relaxed mb-8">
                    {course.description}
                  </p>
                  
                  <div className="space-y-4 mb-10">
                    <div className="flex items-center text-[10px] uppercase tracking-widest font-sans font-bold text-slate-400">
                      <Award size={14} className="mr-3 text-rose-gold" />
                      {course.certification}
                    </div>
                  </div>

                  <motion.button
                    onClick={() => window.open('https://wa.me/27846613711?text=Hi%20Lashcore,%20I\'d%20like%20to%20enroll%20in%20the%20' + encodeURIComponent(course.title) + '.', '_blank')}
                    whileHover={{ scale: 1.02 }}
                    className="w-full py-5 border border-matte-black text-matte-black rounded-2xl text-[10px] uppercase tracking-widest font-sans font-black hover:bg-matte-black hover:text-white transition-all duration-500"
                  >
                    Enroll Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-nude-light/20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
             <div className="lg:col-span-5 order-2 lg:order-1">
                <span className="text-[10px] kerning-widest uppercase text-rose-gold mb-8 block font-sans font-bold">The Excellence</span>
                <h2 className="text-5xl md:text-7xl font-serif mb-12 tracking-tighter leading-tight">Elite Training <br /><span className="italic">Philosophy</span></h2>
                
                <div className="space-y-12">
                   {[
                     { 
                       icon: <Users className="text-rose-gold" />, 
                       title: "Small Class Sizes", 
                       desc: "We limit intake to ensure every student receives personalized mentorship and 1-on-1 focus." 
                     },
                     { 
                       icon: <CheckCircle2 className="text-rose-gold" />, 
                       title: "Accredited Kits", 
                       desc: "Receive a professional lash kit featuring only the highest-grade professional materials." 
                     },
                     { 
                       icon: <Award className="text-rose-gold" />, 
                       title: "Career Support", 
                       desc: "Our graduates gain access to top salon networks and ongoing professional advising." 
                     }
                   ].map((item, i) => (
                     <div key={i} className="flex space-x-6">
                        <div className="w-16 h-16 rounded-3xl bg-white shadow-xl flex items-center justify-center shrink-0">
                           {item.icon}
                        </div>
                        <div>
                           <h4 className="text-xl font-serif mb-2">{item.title}</h4>
                           <p className="text-sm font-body font-light text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
             
             <div className="lg:col-span-7 order-1 lg:order-2">
                <div className="relative">
                   <div className="rounded-[4rem] overflow-hidden aspect-[16/10] shadow-2xl relative z-10 luxury-mask">
                      <img 
                        src="https://i.postimg.cc/kgrdyNpm/3a8571f9ede74d715d0597929886c775.jpg" 
                        alt="Training Session" 
                        className="w-full h-full object-cover" 
                        referrerPolicy="no-referrer"
                      />
                   </div>
                   <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-rose-gold -z-0 rounded-full blur-[80px] opacity-20" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Academy FAQ */}
      <section className="py-32 bg-white">
        <div className="max-w-2xl mx-auto px-6">
           <h2 className="text-4xl font-serif italic text-center mb-20">Academy Questions</h2>
           <div className="space-y-8">
              {[
                { q: "Do I need prior experience?", a: "Our Foundation courses are designed specifically for beginners. No prior beauty experience is required." },
                { q: "Are the certificates accredited?", a: "Yes, all Lashcore Academy certificates are recognized by South Africa's leading professional associations." },
                { q: "Is finance available?", a: "We offer flexible payment plans to help you launch your career without financial stress." }
              ].map((faq, i) => (
                <div key={i} className="group border-b border-slate-100 pb-8 hover:border-rose-gold transition-colors">
                  <h4 className="text-[10px] uppercase tracking-widest font-sans font-black mb-4 flex justify-between">
                    {faq.q}
                    <ArrowRight size={14} className="text-rose-gold group-hover:translate-x-2 transition-transform" />
                  </h4>
                  <p className="font-body text-sm font-light text-slate-500 leading-loose">{faq.a}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-matte-black text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-8xl font-serif mb-12 tracking-tighter leading-none italic opacity-90">Begin Your Journey</h2>
          <motion.button
            onClick={() => window.open('https://wa.me/27846613711?text=Hi%20Lashcore,%20I\'d%20like%20to%20apply%20for%20the%20Academy%202026.', '_blank')}
            whileHover={{ scale: 1.05 }}
            className="bg-white text-matte-black px-16 py-6 rounded-full text-[10px] uppercase tracking-[0.4em] font-sans font-black shadow-2xl"
          >
            Apply for Academy 2026
          </motion.button>
        </div>
      </section>
    </motion.div>
  );
}
