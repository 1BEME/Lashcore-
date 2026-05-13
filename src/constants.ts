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
    description: 'A natural, everyday enhancement. One extension applied to one natural lash.',
    price: 'R450',
    duration: '90 min',
    image: '/lashcore_service_hybrid.png', // Fallback or updated later
  },
  {
    id: 'hybrid',
    title: 'Hybrid Set',
    description: 'The perfect balance of texture and volume. A mix of classic and volume lashes.',
    price: 'R550',
    duration: '120 min',
    image: '/lashcore_service_hybrid.png',
  },
  {
    id: 'volume',
    title: 'Volume Set',
    description: 'Glamorous and full. Multiple lightweight extensions applied to one natural lash.',
    price: 'R650',
    duration: '150 min',
    image: '/lashcore_service_volume.png',
  },
  {
    id: 'mega-volume',
    title: 'Mega Volume',
    description: 'Ultimate drama. Maximum fullness and density for a striking look.',
    price: 'R800',
    duration: '180 min',
    image: '/lashcore_service_volume.png',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    review: 'Lashcore is the only place I trust with my lashes. The attention to detail is unmatched, and the studio is so peaceful.',
    rating: 5,
  },
  {
    name: 'Jessica L.',
    review: 'My hybrid set looks incredible! They lasted so long and I got so many compliments. Truly a luxury experience.',
    rating: 5,
  },
  {
    name: 'Nandi K.',
    review: 'Professional, clean, and the results are always perfect. The best lash studio in SA hands down.',
    rating: 5,
  },
];

export const COURSES = [
  {
    id: 'classic-mastery',
    title: 'Classic Lash Mastery',
    description: 'Master the fundamentals of isolated lash application, eye anatomy, and health standards.',
    duration: '2 Days',
    certification: 'Accredited Foundation Certificate',
    price: 'R4,500',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'volume-artistry',
    title: 'Russian Volume Artistry',
    description: 'Advanced fan-making techniques and multi-lash application for high-drama results.',
    duration: '3 Days',
    certification: 'Advanced Volume Specialist',
    price: 'R6,200',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'master-workshop',
    title: 'Business & Branding',
    description: 'Learn how to build a luxury beauty brand, client retention strategies, and photography.',
    duration: '1 Day',
    certification: 'Lash Business Excellence',
    price: 'R2,800',
    image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=800'
  }
];

export const SKINCORE_SERVICES = [
  {
    id: 'noir-facial',
    title: 'The Noir Signature Facial',
    description: 'Our flagship deep-cleansing treatment using volcanic active ingredients for unparalleled glow.',
    price: 'R850',
    duration: '75 min',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800'
  }   ,
  {
    id: 'dermaplaning',
    title: 'Glass Skin Dermaplaning',
    description: 'Mechanical exfoliation removing dead skin and vellus hair for a smooth, radiant finish.',
    price: 'R550',
    duration: '45 min',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'microneedling',
    title: 'Advanced Microneedling',
    description: 'Collagen induction therapy to treat scarring, fine lines, and texture. Medical grade serum.',
    price: 'R1,200',
    duration: '60 min',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800'
  }
];
