import { Category } from './products/category';
import { Product } from './products/product';

export interface ProductCart {
  id: number;
  title: string;
  price: number;
  category: Category;
  images: string[];
  description: string;
  amount: number;
  updatedPrice: number;
}

export interface CartState {
  cartItems: ProductCart[];
  totalPrice: number;
  subTotal: number;
}
