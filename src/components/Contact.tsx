import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs uppercase tracking-[0.4em] text-rose-gold mb-6 block font-sans">
              Connect with us
            </span>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-10">
              Reservation <br /> <span className="italic">& Inquiries</span>
            </h2>
            <p className="font-body font-light text-slate-500 text-lg leading-relaxed mb-12">
              Ready for your transformation? Use our fast booking system or reach out directly for a consultation.
            </p>

            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-nude-base flex items-center justify-center text-matte-black">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-sans mb-1 opacity-50">Studio Location</h4>
                  <p className="font-serif text-xl font-medium">123 Beauty Lane, Sandton, Johannesburg</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-nude-base flex items-center justify-center text-matte-black">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-sans mb-1 opacity-50">Direct Line</h4>
                  <p className="font-serif text-xl font-medium">+27 12 345 6789</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-14 h-14 rounded-2xl bg-nude-base flex items-center justify-center text-matte-black">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-sans mb-1 opacity-50">Email Address</h4>
                  <p className="font-serif text-xl font-medium">bookings@lashcore.co.za</p>
                </div>
              </div>
            </div>

            <div className="mt-16 flex space-x-4">
               {[Instagram, Facebook].map((Icon, i) => (
                 <motion.a
                   key={i}
                   href="#"
                   whileHover={{ y: -5, backgroundColor: '#1A1A1A', color: '#FFF' }}
                   className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center transition-all"
                 >
                   <Icon size={20} />
                 </motion.a>
               ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-nude-light p-10 md:p-16 rounded-[4rem] shadow-2xl shadow-black/5"
          >
            <h3 className="text-3xl font-serif mb-8 italic">Send a message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-sans px-2">Full Name</label>
                  <input type="text" className="w-full bg-white border-0 rounded-2xl px-6 py-4 font-body outline-none focus:ring-2 focus:ring-rose-gold transition-all" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-sans px-2">Email Address</label>
                  <input type="email" className="w-full bg-white border-0 rounded-2xl px-6 py-4 font-body outline-none focus:ring-2 focus:ring-rose-gold transition-all" placeholder="Enter your email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-sans px-2">Service Interest</label>
                <select className="w-full bg-white border-0 rounded-2xl px-6 py-4 font-body outline-none focus:ring-2 focus:ring-rose-gold transition-all">
                  <option>Select a service</option>
                  <option>Classic Set</option>
                  <option>Hybrid Set</option>
                  <option>Volume Set</option>
                  <option>Lash Removal</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-sans px-2">Your Message</label>
                <textarea rows={4} className="w-full bg-white border-0 rounded-2xl px-6 py-4 font-body outline-none focus:ring-2 focus:ring-rose-gold transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-matte-black text-white py-5 rounded-2xl text-xs uppercase tracking-[0.2em] font-sans font-bold flex items-center justify-center"
              >
                Send Inquiry <Send className="ml-3 w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
