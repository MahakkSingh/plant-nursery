
export interface Plant {
  id: number;
  name: string;
  scientificName: string;
  description: string;
  price: number;
  category: 'Indoor' | 'Outdoor' | 'Succulent' | 'Tree';
  image: string;
  care: {
    water: string;
    light: string;
    difficulty: 'Easy' | 'Moderate' | 'Pro';
  };
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface CartItem extends Plant {
  quantity: number;
}
