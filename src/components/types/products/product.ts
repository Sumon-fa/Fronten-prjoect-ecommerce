import { Category } from './category';

export interface ProductsProps {
  heading?: string;
  products: Product[];
}
export interface Product {
  id: number;
  title: string;
  price: number;
  category: Category;
  images: string[];
  description: string;
}
