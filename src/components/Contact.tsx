import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Contact() {
  const freshaLink = "https://www.fresha.com/book-now/pimp-my-brows-s9uywwe2/all-offer?share=true&pId=37621";
  const whatsappNumber = "27846613711"; // Updated number

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const subjectLine = formData.get('subject') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;

    const subject = encodeURIComponent(`Lashcore Inquiry: ${subjectLine}`);
    const body = encodeURIComponent(`Service Interest: ${service}\n\nMessage:\n${message}`);
    
    window.location.href = `mailto:info@lashcore.co.za?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-[1px] bg-rose-gold" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold font-sans font-bold">
                Connect with us
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-serif leading-[0.9] tracking-tighter mb-10">
              Personalized <br /> <span className="italic">Service</span>
            </h2>
            <p className="font-body font-light text-slate-500 text-lg leading-relaxed mb-12">
              Experience the pinnacle of lash artistry and clinical skincare. Reach out via our channels or secure your transformation instantly.
            </p>

            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 rounded-3xl bg-nude-base/20 flex items-center justify-center text-rose-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-sans mb-2 font-bold opacity-40 italic">Studio Location</h4>
                  <p className="font-serif text-2xl font-light">21 4th Avenue, Rondebosch East, Cape Town 7780</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 rounded-3xl bg-nude-base/20 flex items-center justify-center text-rose-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-sans mb-2 font-bold opacity-40 italic">Direct Line</h4>
                  <a href="tel:+27846613711" className="font-serif text-2xl font-light hover:text-rose-gold transition-colors">+27 84 661 3711</a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 rounded-3xl bg-nude-base/20 flex items-center justify-center text-rose-gold">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest font-sans mb-2 font-bold opacity-40 italic">Digital Mail</h4>
                  <a href="mailto:info@lashcore.co.za" className="font-serif text-2xl font-light hover:text-rose-gold transition-colors lowercase">info@lashcore.co.za</a>
                </div>
              </div>
            </div>

            <div className="mt-16 flex items-center gap-6">
               <a 
                 href={`https://wa.me/${whatsappNumber}`} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center space-x-3 bg-green-500/10 text-green-600 px-6 py-3 rounded-full text-[10px] uppercase tracking-widest font-sans font-black hover:bg-green-500 hover:text-white transition-all shadow-lg shadow-green-500/10"
               >
                 <MessageCircle size={18} />
                 <span>WhatsApp Now</span>
               </a>
               
               <div className="flex space-x-4">
                  <motion.a
                    href="https://www.instagram.com/lashcore_cpt?igsh=MXU3YjFoaWFuc2U1bA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, backgroundColor: '#0F0F0F', color: '#FFF' }}
                    className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center transition-all bg-white"
                  >
                    <Instagram size={18} />
                  </motion.a>
                  <motion.a
                    href="https://www.facebook.com/share/1AyxqnaCyW/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, backgroundColor: '#0F0F0F', color: '#FFF' }}
                    className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center transition-all bg-white"
                  >
                    <Facebook size={18} />
                  </motion.a>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#0F0F0F] p-10 md:p-20 rounded-[4rem] shadow-2xl text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-serif mb-10 italic">Quick Inquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[9px] uppercase tracking-[0.3em] font-sans font-bold opacity-40">Subject</label>
                    <input name="subject" required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 font-body text-white placeholder-white/20 outline-none focus:border-rose-gold transition-all" placeholder="Topic of Inquiry" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[9px] uppercase tracking-[0.3em] font-sans font-bold opacity-40">Service</label>
                    <select name="service" required defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 font-body text-white outline-none focus:border-rose-gold transition-all appearance-none cursor-pointer">
                      <option value="" disabled className="bg-matte-black text-white/40">Select a ritual</option>
                      <option value="Classic Lash Extensions" className="bg-matte-black text-white">Classic Lash Extensions</option>
                      <option value="Hybrid Lash Extensions" className="bg-matte-black text-white">Hybrid Lash Extensions</option>
                      <option value="Volume Lash Extensions" className="bg-matte-black text-white">Volume Lash Extensions</option>
                      <option value="Skincore Rituals" className="bg-matte-black text-white">Skincore Rituals</option>
                      <option value="Academy Training" className="bg-matte-black text-white">Academy Training</option>
                      <option value="Other" className="bg-matte-black text-white">Other Inquiry</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-[9px] uppercase tracking-[0.3em] font-sans font-bold opacity-40">Narration</label>
                  <textarea name="message" required rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 font-body text-white placeholder-white/20 outline-none focus:border-rose-gold transition-all" placeholder="Describe your request..."></textarea>
                </div>

                <div className="pt-4 flex flex-col items-center gap-8">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white text-matte-black py-6 rounded-2xl text-[10px] uppercase tracking-[0.4em] font-sans font-black flex items-center justify-center group"
                  >
                    Transmit Message <Send className="ml-3 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>

                  <a href={freshaLink} target="_blank" rel="noopener noreferrer" className="w-full">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full border border-white/20 py-6 rounded-2xl text-[10px] uppercase tracking-[0.4em] font-sans font-black flex items-center justify-center hover:bg-white/10 transition-all"
                    >
                      Instant Booking (Fresha)
                    </motion.button>
                  </a>
                </div>
              </form>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-gold/10 rounded-full blur-[80px] -z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
