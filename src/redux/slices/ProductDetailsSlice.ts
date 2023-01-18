import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../components/types/products/product';
import { ProductDetailsState } from '../../components/types/products/productState';
import { getSingleProducts } from '../actions/ProductDetailsActions';

const initialState: ProductDetailsState = {
  product: null,
  isLoading: false,
  isError: null,
};

const productDetailsSlice = createSlice({
  name: 'singleProduct',
  initialState: initialState,
  reducers: {
    clearError(state) {
      state.isError = null;
    },
  },
  extraReducers: (build) => {
    build.addCase(
      getSingleProducts.fulfilled,
      (state, action: PayloadAction<Product>) => {
        if (!action.payload) {
          return state;
        }
        state.product = action.payload;
        state.isLoading = false;
        state.isError = null;

        return state;
      }
    );
    build.addCase(
      getSingleProducts.rejected,
      (state, action: PayloadAction<any>) => {
        state.isError = action.payload;
        state.isLoading = false;
      }
    );
    build.addCase(getSingleProducts.pending, (state, action) => {
      state.isLoading = true;
      state.isError = null;
    });
  },
});
export const productDetailsAction = productDetailsSlice.actions;

export default productDetailsSlice;
