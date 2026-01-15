export interface Review {
  user: string;
  rating: number;
  comment_en: string;
  comment_ar: string;
}
export interface Product {
  id: number;
  name_en: string;
  name_ar: string;
  description_en: string;
  description_ar: string;
  price: number;
  discount: number;
  image: string;
  category_en: string;
  category_ar: string;
  author_en: string;
  author_ar: string;
  gallery: string[];
  reviews: Review[];
}
export interface CartItem extends Product {
  quantity: number;
}
