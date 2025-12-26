
import { Plant, Testimonial } from './types';

export const PLANTS: Plant[] = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    scientificName: 'Monstera deliciosa',
    description: 'The iconic Swiss Cheese Plant, known for its large, heart-shaped leaves with unique natural holes.',
    price: 45.00,
    category: 'Indoor',
    image: 'https://picsum.photos/id/106/600/600',
    care: { water: 'Weekly', light: 'Indirect Bright', difficulty: 'Easy' }
  },
  {
    id: 2,
    name: 'Snake Plant',
    scientificName: 'Dracaena trifasciata',
    description: 'A hardy, low-maintenance plant that is excellent for air purification. Perfect for beginners.',
    price: 25.00,
    category: 'Indoor',
    image: 'https://picsum.photos/id/231/600/600',
    care: { water: 'Every 2-3 weeks', light: 'Low to Bright', difficulty: 'Easy' }
  },
  {
    id: 3,
    name: 'Fiddle Leaf Fig',
    scientificName: 'Ficus lyrata',
    description: 'A stunning architectural plant with large, glossy, violin-shaped leaves.',
    price: 65.00,
    category: 'Indoor',
    image: 'https://picsum.photos/id/401/600/600',
    care: { water: 'Weekly', light: 'Bright Indirect', difficulty: 'Moderate' }
  },
  {
    id: 4,
    name: 'Lavender',
    scientificName: 'Lavandula',
    description: 'Fragrant and beautiful, perfect for sun-drenched gardens and attracting pollinators.',
    price: 18.00,
    category: 'Outdoor',
    image: 'https://picsum.photos/id/605/600/600',
    care: { water: 'Twice Weekly', light: 'Full Sun', difficulty: 'Moderate' }
  },
  {
    id: 5,
    name: 'Echeveria Elegans',
    scientificName: 'Echeveria elegans',
    description: 'A rose-shaped succulent with pale silvery-blue leaves. Beautiful and compact.',
    price: 12.00,
    category: 'Succulent',
    image: 'https://picsum.photos/id/361/600/600',
    care: { water: 'Monthly', light: 'Bright Direct', difficulty: 'Easy' }
  },
  {
    id: 6,
    name: 'Japanese Maple',
    scientificName: 'Acer palmatum',
    description: 'A graceful ornamental tree known for its spectacular autumn foliage and elegant form.',
    price: 120.00,
    category: 'Tree',
    image: 'https://picsum.photos/id/243/600/600',
    care: { water: 'Regularly', light: 'Partial Shade', difficulty: 'Pro' }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Plant Parent',
    content: 'The Monstera I bought from Verdant Haven is thriving! The AI assistant gave me the perfect watering schedule for my low-light apartment.',
    rating: 5,
    avatar: 'https://picsum.photos/id/64/100/100'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Interior Designer',
    content: 'Best selection of indoor plants in the city. Their delivery was super quick and the plants arrived in pristine condition.',
    rating: 5,
    avatar: 'https://picsum.photos/id/91/100/100'
  },
  {
    id: 3,
    name: 'Emily Rose',
    role: 'Novice Gardener',
    content: 'I used to kill every plant I touched. Thanks to Verdant Haven\'s care guides and chat assistant, I finally have a green thumb!',
    rating: 4,
    avatar: 'https://picsum.photos/id/103/100/100'
  }
];
