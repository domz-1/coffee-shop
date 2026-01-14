export interface Review {
  user: string;
  rating: number;
  comment: string;
}
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  image: string;
  category: string;
  author: string;
  gallery: string[];
  reviews: Review[];
}
export interface CartItem extends Product {
  quantity: number;
}
