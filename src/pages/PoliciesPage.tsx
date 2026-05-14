import { motion } from 'motion/react';
import { ShieldCheck, Clock, CreditCard, ParkingCircle, AlertCircle, Sparkles, Coffee, Smile } from 'lucide-react';

export default function PoliciesPage() {
  const sections = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Lash Integrity",
      content: [
        "Your natural lash health is our top priority!",
        "We only place extensions that are the appropriate weight and length for your lashes and aesthetically pleasing for your bone structure.",
        "Sometimes we have to choose between long or full. Long AND full is just not everyone's reality. Please respect this!"
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Cancellations & Lateness",
      content: [
        "CANCELLATION POLICY: You may cancel an appointment without charge if you give us at least twenty four (24) hours prior notice. Text and email reminders are sent at 24, 28, and 72 hours before.",
        "LATE ARRIVALS: Arriving after the 15-minute mark will result in cancellation and a charge of the entire cost of the service. Alternatively, we will try to administer the service if time allows.",
        "NO SHOW: Full payment of service will be charged via EFT. If you do not attend without communication, our system will automatically block future bookings until payment is settled."
      ]
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Clean Lashes",
      content: [
        "EXTENSIONS WILL NOT ADHERE TO DIRTY LASHES. They will end up falling off the very next day or right as we apply them, making your fill impossible.",
        "Please clean off all oils and makeup from: top/bottom of lash line, eyelid, under eyes, and temples.",
        "We provide lash shampoos. Waterproof makeup or gel liners take away from lashing time."
      ]
    },
    {
      icon: <Smile className="w-6 h-6" />,
      title: "Studio Etiquette",
      content: [
        "NO EXCESSIVE TALKING: Bring your own headphones. Talking creates small movements and allows fumes to escape into your eyes, causing tearing or eye pad shifts.",
        "NO GUM, CAFFEINE, OR PHONE CALLS: Caffeine causes fluttery eyes. Please put phones on silent; you will NOT be able to open your eyes once started.",
        "BEFORE THE APPOINTMENT: Remember to eat, use the restroom, and bring something warm. Sleeping and snoring are very welcome!"
      ]
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Payment & Refunds",
      content: [
        "PAYMENT: We have card facilities and accept Cash, EFTs, and FNB Geo Payments.",
        "NO REFUNDS: There are no refunds on any services.",
        "2-DAY RETENTION RULE: If you have retention issues, let us know within 2 DAYS. We provide free changes if seen within this window."
      ]
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Allergies & Medical Conditions",
      content: [
        "A patch test can be administered prior to the appointment upon request via WhatsApp or email.",
        "Refunds are not given for allergic reactions. We will remove lashes free of charge.",
        "YOU CONFIRM that you do not have: Eczema/Dermatitis around eye area, recent eye surgery (last 6 months), Conjunctivitis, Cataracts, Diabetic Retinopathy, Alopecia, Hay Fever, Dry Eye Syndrome, etc.",
        "Lashcore cannot be held liable for individual reactions (swelling, redness, itching)."
      ]
    },
    {
        icon: <ParkingCircle className="w-6 h-6" />,
        title: "Parking & Communication",
        content: [
          "PARKING: Available in front, in the driveway, and up the road. Please refrain from parking in front of the corner stop street.",
          "COMMUNICATION: We do not accept phone/WhatsApp calls. We respond to WhatsApp messages and emails within 24 hours. No Instagram DMs/Calls are monitored."
        ]
    },
    {
        icon: <Coffee className="w-6 h-6" />,
        title: "Refills & Academy",
        content: [
          "REFILLS: Only offered if you return within 3 weeks with at least half the lashes remaining. We generally do not refill work other than our own.",
          "SATURDAY RESERVATIONS: Limited hours. A full cancellation fee applies for same-day cancellations.",
          "STUDENT DEPOSITS: 50% deposit via EFT one week prior. Balance due 1 day before. Monthly payment plans available."
        ]
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-nude-light min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center mb-20"
        >
          <span className="text-[10px] uppercase tracking-[0.6em] text-rose-gold font-bold mb-4 block">Official Guidelines</span>
          <h1 className="text-5xl md:text-7xl font-serif tracking-tight">Studio <span className="italic">Policies</span></h1>
          <p className="mt-8 text-slate-500 font-light max-w-2xl mx-auto leading-relaxed italic">
            The policies listed below help us ensure the best experience for every muse. 
            By booking with Lashcore, you agree to these terms.
          </p>
        </motion.div>

        <div className="space-y-12">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] p-10 shadow-sm border border-black/5 hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-nude-base flex items-center justify-center text-rose-gold group-hover:scale-110 transition-transform">
                  {section.icon}
                </div>
                <h2 className="font-serif text-2xl italic">{section.title}</h2>
              </div>
              <div className="space-y-4">
                {section.content.map((point, pIdx) => (
                  <p key={pIdx} className="font-body text-slate-500 font-light leading-loose text-sm border-l-2 border-nude-base pl-6">
                    {point}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-12 bg-matte-black rounded-[3rem] text-white text-center"
        >
          <h3 className="font-serif text-3xl italic mb-6">Ready for your transformation?</h3>
          <p className="opacity-60 font-light mb-10 text-sm tracking-widest uppercase">Select your ritual below</p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
             <a href="/contact" className="px-10 py-4 bg-rose-gold text-white rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform">Book Now</a>
             <a href="/services" className="px-10 py-4 border border-white/20 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-matte-black transition-all">View Services</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
