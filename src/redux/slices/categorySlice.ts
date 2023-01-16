import { createSlice } from '@reduxjs/toolkit';
import { Category } from '../../components/types/products/category';
import { getCategories } from '../actions/categoryAction';

const initialState: Category[] = [];

const categorySlice = createSlice({
  name: 'category',
  initialState: initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getCategories.fulfilled, (state, action) => {
      if (action.payload && 'message' in action.payload) {
        return state;
      } else if (!action.payload) {
        return state;
      }
      return action.payload;
    });
    build.addCase(getCategories.rejected, (state, action) => {
      return state;
    });
    build.addCase(getCategories.pending, (state, action) => {
      return state;
    });
  },
});
export const categoryActions = categorySlice.actions;

export default categorySlice;
