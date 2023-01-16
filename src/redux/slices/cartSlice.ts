import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, ProductCart } from '../../components/types/cartState';

const initialState: CartState = {
  cartItems: [],
  totalPrice: 0,
  subTotal: 0,
};

const cartSlice = createSlice({
  name: 'category',
  initialState: initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ProductCart>) {
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.cartItems[existingCartItemIndex];
      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: action.payload.amount + existingCartItem.amount,
          updatedPrice:
            existingCartItem.updatedPrice + action.payload.updatedPrice,
        };
        updatedItems = [...state.cartItems];
        updatedItems[existingCartItemIndex] = updatedItem;
        state.cartItems = updatedItems;
        state.totalPrice = state.cartItems.reduce(
          (acc, cur) => acc + cur.updatedPrice,
          0
        );
        state.subTotal = state.totalPrice - (state.totalPrice * 24) / 100;
      } else {
        state.cartItems = state.cartItems.concat(action.payload);

        state.totalPrice = state.cartItems.reduce(
          (acc, cur) => acc + cur.updatedPrice,
          0
        );
        state.subTotal = state.totalPrice - (state.totalPrice * 24) / 100;
      }
    },
    changeQty(state, action: PayloadAction<ProductCart>) {
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.cartItems[existingCartItemIndex];
      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: action.payload.amount,
          updatedPrice: existingCartItem.price * action.payload.amount,
        };
        updatedItems = [...state.cartItems];
        updatedItems[existingCartItemIndex] = updatedItem;
        state.cartItems = updatedItems;
        state.totalPrice = state.cartItems.reduce(
          (acc, cur) => acc + cur.updatedPrice,
          0
        );
        state.subTotal = state.totalPrice - (state.totalPrice * 24) / 100;
      } else {
        state.cartItems = state.cartItems.concat(action.payload);

        state.totalPrice = state.cartItems.reduce(
          (acc, cur) => acc + cur.updatedPrice,
          0
        );
        state.subTotal = state.totalPrice - (state.totalPrice * 24) / 100;
      }
    },

    removeCartItem(state, action: PayloadAction<number>) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.totalPrice = 0;
      state.subTotal = 0;
    },
    checkOut(state, action) {},
  },
  extraReducers: (build) => {},
});
export const cartActions = cartSlice.actions;

export default cartSlice;
