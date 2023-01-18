import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { Category } from '../../components/types/products/category';

export const getCategories = createAsyncThunk(
  'getCategories',
  async (data, thunk) => {
    try {
      const url = 'https://api.escuelajs.co/api/v1/categories?offset=0&limit=4';
      const response: AxiosResponse<Category[], Category[]> = await axios.get(
        url
      );

      return response.data;
    } catch (err: any) {
      return thunk.rejectWithValue({ message: err.message });
    }
  }
);
