import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { AuthState } from '../components/types/auth/auth';
import { CartState } from '../components/types/cartState';
import authSlice from './slices/authSlice';
import cartSlice from './slices/cartSlice';
import categorySlice from './slices/categorySlice';
import productDetailsSlice from './slices/productDetailsSlice';
import productSlice from './slices/productSlice';
import userSlice from './slices/userSlice';

let preCart: CartState = {
  cartItems: [],
  totalPrice: 0,
  subTotal: 0,
};
let preUser: AuthState = {
  token: '',
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
  preUser.currentUser = JSON.parse(getUser);
}
const token = localStorage.getItem('token');
if (!!token) {
  preUser.token = JSON.parse(token);
}
const preloadedState = {
  cart: preCart,
  auth: preUser,
};
const saveState = (state: RootState) => {
  try {
    const cartReducer = JSON.stringify(state.cart);
    localStorage.setItem('cart', cartReducer);
    const userReducer = JSON.stringify(state.auth.currentUser);
    localStorage.setItem('currentUser', userReducer);
    const authToken = JSON.stringify(state.auth.token);
    localStorage.setItem('token', authToken);
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
