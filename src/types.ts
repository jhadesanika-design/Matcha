export interface Product {
  id: string;
  name: string;
  grade: 'Ceremonial Grade' | 'Daily Wellness' | 'Cafe Latte Blend' | 'Starter Kit';
  subTitle: string;
  cultivar: string;
  region: string;
  harvest: string;
  price: number; // in INR (₹)
  costPerCup: string;
  weight: string;
  servings: string;
  description: string;
  bestFor: string;
  notes: string[];
  image: string;
  badge?: string;
  category: 'ceremonial' | 'daily' | 'barista' | 'teaware';
  inStock: boolean;
  lTheanineMg?: number;
  shadeDays?: number;
  grindSpeed?: string;
  deliveryDays?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface FAQItem {
  id: string;
  category: 'Taste & Bitterness' | 'How to Make at Home' | 'Health & vs Chai' | 'Shipping & UPI';
  question: string;
  answer: string;
}

export interface JourneyStep {
  step: string;
  title: string;
  subtitle: string;
  timeframe: string;
  description: string;
  whyItMatters: string;
  image: string;
  alt: string;
}
