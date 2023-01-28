import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import axiosInstance from '../../common/axiosInstance';
import { Product } from '../../components/types/products/product';

export const getAllProducts = createAsyncThunk(
  'getAllProducts',
  async (data, thunkApi) => {
    try {
      const response: AxiosResponse<Product[], Product[]> =
        await axiosInstance.get('/products');

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
      /*  const jsonData = await fetch(url);

      const data: Product[] | Error = await jsonData.json();

      return data;*/
      const response: AxiosResponse<Product[], Product[]> =
        await axiosInstance.get(`/products/?title=${title}`);

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
      const response: AxiosResponse<Product[], Product[]> =
        await axiosInstance.get(`/products/?categoryId=${id}`);

      return response.data;
    } catch (err: any) {
      return thunkApi.rejectWithValue({ message: err.message });
    }
  }
);
