import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, RefreshCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

const QUESTIONS = [
  {
    id: 1,
    text: "What's your typical makeup look?",
    options: [
      { text: "Minimalist / 'No Makeup' Makeup", score: 'classic' },
      { text: "Sophisticated / Balanced", score: 'hybrid' },
      { text: "Full Glam / Dramatic", score: 'volume' }
    ]
  },
  {
    id: 2,
    text: "How much experience do you have with lashes?",
    options: [
      { text: "Total Beginner", score: 'classic' },
      { text: "I've had them occasionally", score: 'hybrid' },
      { text: "Regular lash addict", score: 'mega-volume' }
    ]
  },
  {
    id: 3,
    text: "What's the occasion?",
    options: [
      { text: "Everyday wear", score: 'classic' },
      { text: "Special event / Wedding", score: 'volume' },
      { text: "Vacation / Low maintenance", score: 'hybrid' }
    ]
  }
];

const RESULTS: Record<string, any> = {
  classic: {
    title: "The Classic Muse",
    description: "You appreciate timeless beauty. Our Classic Set provides a natural enhancement that looks like your lashes, but better.",
    link: "/services#classic"
  },
  hybrid: {
    title: "The Sophist",
    description: "You love a bit of texture. Our Hybrid Set offers the perfect balance of volume and natural extension.",
    link: "/services#hybrid"
  },
  volume: {
    title: "The Glamourist",
    description: "You aren't afraid of the spotlight. Our Volume Set delivers maximum impact and drama.",
    link: "/services#volume"
  },
  'mega-volume': {
    title: "The Icon",
    description: "Ultimate drama is your middle name. Our Mega Volume set is built for visibility and density.",
    link: "/services#mega-volume"
  }
};

export default function LashQuiz() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (score: string) => {
    const newScores = [...scores, score];
    if (step < QUESTIONS.length - 1) {
      setScores(newScores);
      setStep(step + 1);
    } else {
      // Calculate most frequent score
      const counts: Record<string, number> = {};
      newScores.forEach(s => counts[s] = (counts[s] || 0) + 1);
      const winner = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
      setResult(winner);
    }
  };

  const reset = () => {
    setStep(0);
    setScores([]);
    setResult(null);
  };

  return (
    <section className="py-32 bg-nude-dark/20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.5em] text-rose-gold mb-6 block font-sans font-bold">The Persona Finder</span>
          <h2 className="text-5xl md:text-7xl font-serif">Find Your <span className="italic">Lash Match</span></h2>
        </div>

        <div className="bg-white rounded-[3rem] p-10 md:p-20 shadow-2xl relative min-h-[400px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-12"
              >
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-widest text-rose-gold opacity-50">Step {step + 1} of {QUESTIONS.length}</span>
                  <h3 className="text-3xl md:text-4xl font-serif leading-tight">{QUESTIONS[step].text}</h3>
                </div>
                
                <div className="grid gap-4">
                  {QUESTIONS[step].options.map((opt, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.02, x: 10 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(opt.score)}
                      className="w-full text-left px-8 py-6 border border-slate-100 rounded-2xl hover:border-rose-gold hover:bg-rose-gold/5 transition-all flex justify-between items-center group"
                    >
                      <span className="font-body text-slate-600 group-hover:text-matte-black transition-colors">{opt.text}</span>
                      <ArrowRight size={18} className="text-slate-300 group-hover:text-rose-gold transition-colors" />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-8"
              >
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-widest text-rose-gold font-bold">Your Ideal Set</span>
                  <h3 className="text-5xl md:text-6xl font-serif italic text-matte-black">{RESULTS[result].title}</h3>
                </div>
                <p className="max-w-md mx-auto text-slate-500 font-body leading-relaxed">
                  {RESULTS[result].description}
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                  <Link to={RESULTS[result].link}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="bg-matte-black text-white px-12 py-5 rounded-full text-xs uppercase tracking-[0.2em] font-sans font-bold shadow-xl"
                    >
                      Book This Set
                    </motion.button>
                  </Link>
                  <button 
                    onClick={reset}
                    className="flex items-center space-x-2 text-xs uppercase tracking-widest text-slate-400 hover:text-rose-gold transition-colors"
                  >
                    <RefreshCcw size={14} />
                    <span>Take Again</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-gold/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 translate-x-1/4 w-[400px] h-[400px] bg-nude-dark/20 rounded-full blur-[80px] -z-10" />
    </section>
  );
}
