export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  price: string;
  image: string;
  category: 'facial' | 'brows' | 'addon' | 'specialty';
  details?: {
    fullDescription: string[];
    benefits?: string[];
    duration?: string;
  };
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  source: 'Google' | 'Direct';
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
