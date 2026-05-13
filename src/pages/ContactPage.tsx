import { motion } from 'motion/react';
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
      
      {/* FAQ or Map info */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
           <h2 className="text-4xl font-serif mb-12 italic">Frequently Asked</h2>
           <div className="space-y-8 text-left">
              {[
                { q: "How long do lashes last?", a: "Typically 2-3 weeks before requiring an infill." },
                { q: "Can I wear mascara?", a: "We recommend avoiding it to maintain your extensions." },
                { q: "Is the application painful?", a: "Not at all. Most clients fall asleep during the process." }
              ].map((faq, i) => (
                <div key={i} className="border-b border-slate-100 pb-6">
                  <h4 className="font-sans font-bold text-xs uppercase tracking-widest mb-3">{faq.q}</h4>
                  <p className="font-body text-sm text-slate-500">{faq.a}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </motion.div>
  );
}
