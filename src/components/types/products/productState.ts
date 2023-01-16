import { Product } from './product';

export interface ProductState {
  products: Product[];
  isLoading: boolean;
  isError: any;
}

export interface ProductDetailsState {
  product: Product | null;

  isLoading: boolean;
  isError: any;
}
