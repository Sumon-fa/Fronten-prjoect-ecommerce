import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { Product } from '../../components/types/products/product';

export const getSingleProducts = createAsyncThunk(
  'getSingleProduct',
  async (id: string, thunk) => {
    try {
      const url = `https://api.escuelajs.co/api/v1/products/${id}`;
      const response: AxiosResponse<Product, Product> = await axios.get(url);

      return response.data;

      // const data: Product | Error = await jsonData.json();
    } catch (err: any) {
      return thunk.rejectWithValue({ message: err.message });
    }
  }
);
