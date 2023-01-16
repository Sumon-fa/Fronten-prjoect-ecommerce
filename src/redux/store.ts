import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { CartState } from '../components/types/cartState';
import { ProductState } from '../components/types/products/productState';
import authSlice from './slices/authSlice';
import cartSlice from './slices/cartSlice';
import categorySlice from './slices/categorySlice';
import productDetailsSlice from './slices/ProductDetailsSlice';
import productSlice from './slices/productSlice';
import userSlice from './slices/userSlice';

let preCart: CartState = {
  cartItems: [],
  totalPrice: 0,
  subTotal: 0,
};
const getCart = localStorage.getItem('cart');
if (!!getCart) {
  preCart = JSON.parse(getCart);
}
const preloadedState = {
  cart: preCart,
};
const saveState = (state: RootState) => {
  try {
    const cartReducer = JSON.stringify(state.cart);
    localStorage.setItem('cart', cartReducer);
  } catch (e) {
    console.log(e);
  }
};

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    categories: categorySlice.reducer,
    product: productDetailsSlice.reducer,
    auth: authSlice.reducer,
    user: userSlice.reducer,
    cart: cartSlice.reducer,
  },
  preloadedState: preloadedState,
});
store.subscribe(() => saveState(store.getState()));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
