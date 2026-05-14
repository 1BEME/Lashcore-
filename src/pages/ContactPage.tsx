import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <div className="bg-matte-black py-24 text-white text-center">
        <h1 className="text-5xl md:text-8xl font-serif mb-6">Get In <span className="italic">Touch</span></h1>
        <p className="text-xs uppercase tracking-[0.5em] opacity-40">We are here to assist your journey</p>
      </div>
      
      <Contact />
      
      {/* Map & Hours */}
      <section className="py-24 bg-nude-light/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[3rem] overflow-hidden shadow-2xl h-[500px] border-8 border-white"
            >
              <iframe 
                src="https://maps.google.com/maps?q=21%204th%20Avenue,%20Rondebosch%20East,%20Cape%20Town%207780&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lashcore Cape Town Location"
              ></iframe>
            </motion.div>
            
            <div className="lg:pl-12">
               <span className="text-[10px] uppercase tracking-[0.4em] text-rose-gold mb-6 block font-sans font-bold italic">Availability</span>
               <h2 className="text-5xl font-serif mb-10 tracking-tighter leading-tight">Operating <span className="italic">Rituals</span></h2>
               <div className="space-y-6">
                  {[
                    { day: "Monday - Thursday", hours: "09:00 — 17:00" },
                    { day: "Friday", hours: "09:00 — 12:45 | 14:00 — 17:00" },
                    { day: "Weekends & Holidays", hours: "Closed" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-black/5 pb-4">
                       <span className="font-sans text-[11px] uppercase tracking-widest font-black text-matte-black/60">{item.day}</span>
                       <span className="font-serif text-lg italic text-matte-black">{item.hours}</span>
                    </div>
                  ))}
               </div>
               <p className="mt-10 text-xs font-body text-slate-400 font-light leading-relaxed">
                  *Last appointment generally accepted 1 hour before closing. Sunday sessions are reserved for premium members and special events.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Map info */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
           <h2 className="text-4xl font-serif mb-12 italic">Studio Policies & Info</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 text-left">
               {[
                 { 
                   title: "Cancellation & Lateness", 
                   content: "24-hour notice is required for all cancellations. Arriving after the 15-minute mark results in cancellation and a full service charge." 
                 },
                 { 
                   title: "Refunds & Fixes", 
                   content: "No refunds are offered. We provide a 2-day retention window for free fixes if requested within 48 hours of your appointment." 
                 },
                 { 
                   title: "Refills", 
                   content: "Refill rates apply within 3 weeks of your last set, provided at least 50% of lashes remain. Otherwise, a full set rate applies." 
                 },
                 { 
                   title: "Payments & Parking", 
                   content: "We accept Card, Cash, EFT, and FNB Geo Payments. Parking is available in front, in the driveway, and up the road." 
                 },
                 { 
                   title: "Communication", 
                   content: "We communicate strictly via WhatsApp or Email. No phone calls or Instagram DMs are monitored for bookings." 
                 },
                 { 
                   title: "Clean Lashes & Prep", 
                   content: "Lashes must be clean. Please eat beforehand and avoid caffeine. No gum, talking, or active phones during sessions." 
                 }
               ].map((policy, i) => (
                 <div key={i} className="border-b border-slate-100 pb-6">
                   <h4 className="font-sans font-bold text-xs uppercase tracking-widest mb-3 text-rose-gold italic">{policy.title}</h4>
                   <p className="font-body text-sm text-slate-500 italic">{policy.content}</p>
                 </div>
               ))}
            </div>
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="mt-16"
            >
               <Link 
                 to="/policies" 
                 className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.3em] font-bold text-matte-black group"
               >
                 <span>View Full Policies & Reservation Info</span>
                 <div className="w-12 h-[1px] bg-rose-gold group-hover:w-20 transition-all duration-500" />
               </Link>
            </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
