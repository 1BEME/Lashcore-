import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-nude-light py-20 border-t border-matte-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-8">
              <img 
                src="https://lashcore.co.za/wp-content/uploads/2021/11/Lashcore-Logo-1.png" 
                alt="Lashcore Logo" 
                className="h-16 w-auto"
                onError={(e) => {
                  e.currentTarget.src = "https://i.ibb.co/j9KXMVdh/IMG-20260514-WA0000.jpg";
                  e.currentTarget.onerror = () => {
                    e.currentTarget.style.display = 'none';
                  };
                }}
              />
              <span className="font-serif text-3xl tracking-widest font-bold text-matte-black">LASHCORE</span>
            </Link>
            <p className="font-body font-light text-slate-500 max-w-sm leading-relaxed mb-12">
              A premium lash studio dedicated to the art of extension services. Elevating beauty standards through technical excellence and personalized care.
            </p>
            <div className="flex items-center space-x-6">
               <div className="flex space-x-4">
                  <a href="https://www.instagram.com/lashcore_cpt?igsh=MXU3YjFoaWFuc2U1bA==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-matte-black hover:text-white transition-all bg-white shadow-sm">
                    <Instagram size={18} />
                  </a>
                  <a href="https://facebook.com/pimpmybrows" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-matte-black hover:text-white transition-all bg-white shadow-sm">
                    <Facebook size={18} />
                  </a>
               </div>
               <div className="h-[1px] w-12 bg-rose-gold/30" />
               <div className="flex space-x-4">
                  <Link to="/policies" className="text-[10px] uppercase tracking-widest opacity-40 font-bold hover:opacity-100 transition-opacity">Policies</Link>
                  <a href="#" className="text-[10px] uppercase tracking-widest opacity-40 font-bold hover:opacity-100 transition-opacity">Terms</a>
               </div>
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
             <h4 className="text-xs uppercase tracking-[0.2em] font-sans font-bold mb-8">Studio</h4>
             <ul className="space-y-4 text-sm font-light text-slate-500">
               <li>21 4th Avenue, Rondebosch East, Cape Town 7780</li>
               <li><a href="tel:+27846613711" className="hover:text-rose-gold transition-colors">+27 84 661 3711</a></li>
               <li><a href="mailto:info@lashcore.co.za" className="hover:text-rose-gold transition-colors italic">info@lashcore.co.za</a></li>
             </ul>
          </div>

          <div>
             <h4 className="text-xs uppercase tracking-[0.2em] font-sans font-bold mb-8">Ritual Hours</h4>
             <ul className="space-y-4 text-sm font-light text-slate-500">
               <li className="flex justify-between"><span>Mon - Thu</span> <span className="text-matte-black/60 font-medium">09:00 - 17:00</span></li>
               <li className="flex flex-col">
                  <div className="flex justify-between">
                    <span>Friday</span> <span className="text-matte-black/60 font-medium">09:00 - 12:45</span>
                  </div>
                  <div className="flex justify-end mt-1">
                    <span className="text-matte-black/60 font-medium italic opacity-60 text-xs">Break: 12:45 - 14:00</span>
                  </div>
                  <div className="flex justify-end">
                    <span className="text-matte-black/60 font-medium italic opacity-60 text-xs">Resume: 14:00 - 17:00</span>
                  </div>
               </li>
               <li className="flex justify-between"><span>Sat - Sun</span> <span className="text-matte-black/60 font-medium italic opacity-60">Closed</span></li>
             </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-matte-black/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] uppercase tracking-widest opacity-30">© 2026 LASHCORE. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center space-x-6">
             <div className="w-12 h-[1px] bg-rose-gold" />
             <span className="text-[9px] uppercase tracking-[0.5em] opacity-40 font-bold">Lashcore Premium Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
