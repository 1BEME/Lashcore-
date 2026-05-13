import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-nude-light py-20 border-t border-matte-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <h2 className="font-serif text-3xl tracking-widest mb-8">LASHCORE</h2>
            <p className="font-body font-light text-slate-500 max-w-sm leading-relaxed mb-8">
              A premium lash studio dedicated to the art of extension services. Elevating beauty standards through technical excellence and personalized care.
            </p>
            <div className="flex space-x-4">
               <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Privacy Policy</span>
               <span className="text-[10px] uppercase tracking-widest opacity-40 font-bold">Terms of Service</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-sans font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm font-light text-slate-500">
              <li><Link to="/" className="hover:text-rose-gold transition-colors">Home</Link></li>
              <li><Link to="/skincore" className="hover:text-rose-gold transition-colors">Skincore</Link></li>
              <li><Link to="/services" className="hover:text-rose-gold transition-colors">Services</Link></li>
              <li><Link to="/academy" className="hover:text-rose-gold transition-colors">Academy</Link></li>
              <li><Link to="/gallery" className="hover:text-rose-gold transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-rose-gold transition-colors">Book Now</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="text-xs uppercase tracking-[0.2em] font-sans font-bold mb-8">Hours</h4>
             <ul className="space-y-4 text-sm font-light text-slate-500">
               <li className="flex justify-between"><span>Mon - Fri</span> <span>09:00 - 18:00</span></li>
               <li className="flex justify-between"><span>Saturday</span> <span>10:00 - 16:00</span></li>
               <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
             </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-matte-black/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] uppercase tracking-widest opacity-30">© 2026 NOIR LASHCORE. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center space-x-6">
             <div className="w-12 h-[1px] bg-rose-gold" />
             <span className="text-[9px] uppercase tracking-[0.5em] opacity-40 font-bold">Noir Collective Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
