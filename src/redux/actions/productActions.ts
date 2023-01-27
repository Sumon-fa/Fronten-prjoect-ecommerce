import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { Product } from '../../components/types/products/product';

export const getAllProducts = createAsyncThunk(
  'getAllProducts',
  async (data, thunkApi) => {
    try {
      const url = `https://api.escuelajs.co/api/v1/products/`;

      const response: AxiosResponse<Product[], Product[]> = await axios.get(
        url
      );

      return response.data;
    } catch (err: any) {
      return thunkApi.rejectWithValue({ message: err.message });
    }
  }
);
export const getProductsByTitle = createAsyncThunk(
  'getProductsByTitle',
  async (title: string, thunkApi) => {
    try {
      const url = `https://api.escuelajs.co/api/v1/products/?title=${title}`;

      /*  const jsonData = await fetch(url);

      const data: Product[] | Error = await jsonData.json();

      return data;*/
      const response: AxiosResponse<Product[], Product[]> = await axios.get(
        url
      );

      return response.data;
    } catch (err: any) {
      return thunkApi.rejectWithValue({ message: err.message });
    }
  }
);
export const getProductsByCategoryId = createAsyncThunk(
  'getProductsByCategoryId',
  async (id: string, thunkApi) => {
    try {
      const url = `https://api.escuelajs.co/api/v1/products/?categoryId=${id}`;

      const response: AxiosResponse<Product[], Product[]> = await axios.get(
        url
      );

      return response.data;
    } catch (err: any) {
      return thunkApi.rejectWithValue({ message: err.message });
    }
  }
);
