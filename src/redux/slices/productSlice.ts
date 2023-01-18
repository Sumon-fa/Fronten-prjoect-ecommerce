import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../components/types/products/product';
import { ProductState } from '../../components/types/products/productState';
import {
  getAllProducts,
  getProductsByCategoryId,
  getProductsByTitle,
} from '../actions/productActions';

const initialState: ProductState = {
  products: [],
  isLoading: false,
  isError: null,
};

const productSlice = createSlice({
  name: 'allProduct',
  initialState: initialState,
  reducers: {
    clearError(state) {
      state.isError = null;
    },
  },
  extraReducers: (build) => {
    build.addCase(
      getAllProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        if (!action.payload) {
          return state;
        }
        state.products = action.payload;
        state.isLoading = false;
        state.isError = null;
        return state;
      }
    );
    build.addCase(
      getAllProducts.rejected,
      (state, action: PayloadAction<any>) => {
        state.isError = action.payload;
        state.isLoading = false;
      }
    );
    build.addCase(getAllProducts.pending, (state, action) => {
      state.isLoading = true;
      state.isError = null;
    });
    build.addCase(
      getProductsByTitle.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        if (!action.payload) {
          return state;
        }
        state.products = action.payload;
        state.isLoading = false;
        state.isError = null;
        return state;
      }
    );
    build.addCase(
      getProductsByTitle.rejected,
      (state, action: PayloadAction<any>) => {
        state.isError = action.payload;
        state.isLoading = false;
      }
    );
    build.addCase(getProductsByTitle.pending, (state, action) => {
      state.isLoading = true;
      state.isError = null;
    });
    build.addCase(
      getProductsByCategoryId.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        if (!action.payload) {
          return state;
        }
        state.products = action.payload;
        state.isLoading = false;
        state.isError = null;
        return state;
      }
    );
    build.addCase(
      getProductsByCategoryId.rejected,
      (state, action: PayloadAction<any>) => {
        state.isError = action.payload;
        state.isLoading = false;
      }
    );
    build.addCase(getProductsByCategoryId.pending, (state, action) => {
      state.isLoading = true;
      state.isError = null;
    });
  },
});
export const productActions = productSlice.actions;

export default productSlice;
