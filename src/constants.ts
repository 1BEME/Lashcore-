/**
 * Lashcore Brand Constants
 */

export const COLORS = {
  nude: {
    light: '#FDF8F5',
    base: '#F5E6DA',
    dark: '#DCC3B0',
  },
  black: '#1A1A1A',
  white: '#FFFFFF',
  gold: '#D4AF37',
  roseGold: '#B76E79',
};

export const SERVICES = [
  {
    id: 'classic',
    title: 'Classic Set',
    description: 'A natural, everyday enhancement. One extension applied to one natural lash for a timeless look.',
    price: 'From R450',
    duration: '90 min',
    image: 'https://i.postimg.cc/wMBYMgTZ/e4120c72ee85405718aaebe2328c8ffc.jpg',
  },
  {
    id: 'hybrid',
    title: 'Hybrid Set',
    description: 'The perfect balance of texture and volume. A sophisticated mix of classic and volume techniques.',
    price: 'From R550',
    duration: '120 min',
    image: 'https://i.postimg.cc/5NTW9ccP/4eebb24ec85afc97d3645521beb2165e.jpg',
  },
  {
    id: 'volume',
    title: 'Russian Volume',
    description: 'Glamorous and full. Multiple lightweight extensions applied to one natural lash for density.',
    price: 'From R650',
    duration: '150 min',
    image: 'https://i.postimg.cc/VsZ34yNQ/acc53b8e6acb71c7924d88a9902e5683.jpg',
  },
  {
    id: 'brow-lamination',
    title: 'Brow Lamination',
    description: 'A non-invasive treatment that restructures brow hairs into a fuller, feathery design.',
    price: 'See Fresha',
    duration: '45 min',
    image: 'https://i.postimg.cc/vT42CBmg/2cb5106a48964692fab9fb3280aa9280.jpg',
  },
  {
    id: 'threading',
    title: 'Eyebrow Threading',
    description: 'Expert threading refined over 15 years for perfect, clean-cut symmetry.',
    price: 'See Fresha',
    duration: '15 min',
    image: 'https://i.postimg.cc/65nxQj9v/3ddce0eaa3bdeb2c001d3ab245fa4f42.jpg',
  },
  {
    id: 'lash-lift',
    title: 'Lash Lift',
    description: 'A chemical curl for your natural lashes, providing a semi-permanent lift and volume.',
    price: 'See Fresha',
    duration: '60 min',
    image: 'https://i.postimg.cc/m2Npq0LV/25afd9a8dbd73d640cecd73b29210b78.jpg',
  },
  {
    id: 'waxing',
    title: 'Precision Waxing',
    description: 'Professional facial waxing services for a smooth, refined complexion.',
    price: 'See Fresha',
    duration: '20 min',
    image: 'https://i.postimg.cc/1RTyXVwY/c41d6d0f904e56bf19fd2fc711be3901.jpg',
  },
  {
    id: 'removal',
    title: 'Lash Removal',
    description: 'Safe and professional extension removal to preserve the health of your natural lashes.',
    price: 'See Fresha',
    duration: '30 min',
    image: 'https://i.postimg.cc/ZYy5rLbY/d14ab1be4e80dac4f3c7240b9744c727.jpg',
  },
];

export const TESTIMONIALS = [
  {
    name: 'N. Jacobs',
    review: "I've been going to Ilhaam for around 6 years now and I honestly trust no one else with my brows. Incredible skill and attention to detail.",
    rating: 5,
    role: 'Influencer & Makeup Artist'
  },
  {
    name: 'Nabilah Kariem Peck',
    review: "Ilhaam is SERIOUSLY one of the best lash and brow technicians in the city. I've been with her for about 4 years and refuse to let anyone else touch my lashes/brows.",
    rating: 5,
    role: 'Influencer & Fashion Designer'
  },
  {
    name: 'A. Mohammed',
    review: "BEST eyebrow threading service I've been to and BEST quality of work I've ever seen. After my first appointment in 2016, I've never looked back.",
    rating: 5,
    role: 'Student'
  },
  {
    name: 'C. Solomons',
    review: "I would rather let my unibrow grow back than go somewhere else. Not only is she the best, her beautiful character makes you feel like you're having a chilled moment with your friend.",
    rating: 5,
    role: 'Entrepreneur & Student'
  },
  {
    name: 'C. Adams',
    review: "I don't think I can go without lashes. Ilhaam uses the best products and her technique is so amazing and gentle, you can fall asleep for that whole hour she's busy.",
    rating: 5,
    role: 'Cosmetologist'
  },
  {
    name: 'N. Salie',
    review: "Ilhaam is the absolute best in the business. There is nobody more reputable or trustworthy when it comes to lashes and brows. ALWAYS ensuring I never leave until both she and I are 110% happy.",
    rating: 5,
    role: 'Teacher'
  }
];

export const COURSES = [
  {
    id: 'classic-course',
    title: 'Classic Course',
    description: 'Master the fundamentals of isolated lash application, manual techniques, and health standards.',
    duration: '2 Days',
    certification: 'Lashcore Advanced Certificate',
    price: 'R9,500',
    image: 'https://i.postimg.cc/rstSCLKY/Adobe-Stock-230405116-scaled-1200x1200.jpg'
  },
  {
    id: 'russian-hybrid-foundation',
    title: 'Russian / Classic / Hybrid Foundation',
    description: 'A comprehensive starter course covering all three main lash techniques in a single curriculum.',
    duration: '3 Days',
    certification: 'Lashcore Advanced Certificate',
    price: 'R12,000',
    image: 'https://i.postimg.cc/HnGtNxDg/Adobe-Stock-258272620-scaled-1200x1200.jpg'
  },
  {
    id: 'texture-mastery',
    title: 'Texture Mastery Course',
    description: 'Advanced strip-lash and wispy texture fan techniques for modern, bespoke design.',
    duration: '1 Day',
    certification: 'Lashcore Advanced Certificate',
    price: 'R4,000',
    image: 'https://i.postimg.cc/KvD59x9c/Adobe-Stock-401854535-scaled-1200x1200.jpg'
  },
  {
    id: 'lash-lift-brow-lamination',
    title: 'Lash Lift + Brow Lamination Deluxe',
    description: 'Learn the dual art of chemical restructuring for both natural lashes and brow grooming.',
    duration: '2 Days',
    certification: 'Lashcore Advanced Certificate',
    price: 'R6,500',
    image: 'https://i.postimg.cc/NMX6Rc9g/Adobe-Stock-131803820-1200x1200.jpg'
  },
  {
    id: 'eyebrow-engineering',
    title: 'Eyebrow Engineering (Threading)',
    description: 'Master the ancient art of threading with our specialized 15-year technique for perfect symmetry.',
    duration: '2 Days',
    certification: 'Lashcore Advanced Certificate',
    price: 'R6,500',
    image: 'https://i.postimg.cc/6pBMwy7y/threading-1200x1200.jpg'
  },
  {
    id: 'advanced-volume-2',
    title: 'Advanced Volume Course II',
    description: 'Elevated volume techniques for experienced artists looking to push the boundaries of density.',
    duration: '1 Day',
    certification: 'Lashcore Advanced Certificate',
    price: 'R3,200',
    image: 'https://i.postimg.cc/TPLgX6cg/4bc380e5411f2b2e5611437f22a6ec25.jpg'
  }
];

export const SKINCORE_SERVICES = [
  {
    id: 'lashcore-signature-facial',
    title: 'The Signature Facial',
    description: 'Our flagship deep-cleansing treatment using volcanic active ingredients for unparalleled glow.',
    price: 'R850',
    duration: '75 min',
    image: 'https://i.postimg.cc/bJVLphG4/c47523700dc463a708332b9f3165b127-(1).jpg'
  }   ,
  {
    id: 'dermaplaning',
    title: 'Glass Skin Dermaplaning',
    description: 'Mechanical exfoliation removing dead skin and vellus hair for a smooth, radiant finish.',
    price: 'R550',
    duration: '45 min',
    image: 'https://i.postimg.cc/FR6bwVq8/665b1d3b202669f5d7cf611892492e52.jpg'
  },
  {
    id: 'microneedling',
    title: 'Advanced Microneedling',
    description: 'Collagen induction therapy to treat scarring, fine lines, and texture. Medical grade serum.',
    price: 'R1,200',
    duration: '60 min',
    image: 'https://i.postimg.cc/9QBnKsBg/6a3950a4be5dcfb4252c90b882f59e90.jpg'
  }
];
