import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { AuthState } from '../components/types/auth/auth';
import { CartState } from '../components/types/cartState';
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
let preUser: AuthState = {
  token: localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token') || '{}')
    : null,
  isLoading: false,
  isError: null,
  isSuccess: false,
  currentUser: '',
};
const getCart = localStorage.getItem('cart');
if (!!getCart) {
  preCart = JSON.parse(getCart);
}
const getUser = localStorage.getItem('currentUser');
if (!!getUser) {
  preUser = JSON.parse(getUser);
}
const preloadedState = {
  cart: preCart,
  auth: preUser,
};
const saveState = (state: RootState) => {
  try {
    const cartReducer = JSON.stringify(state.cart);
    localStorage.setItem('cart', cartReducer);
    const authReducer = JSON.stringify(state.auth.currentUser);
    localStorage.setItem('auth', authReducer);
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
