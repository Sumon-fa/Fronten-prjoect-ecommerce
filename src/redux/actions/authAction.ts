import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { CurrentUser, Token } from '../../components/types/auth/auth';

export const login = createAsyncThunk(
  'login',
  async (user: { email: string; password: string }, thunk) => {
    try {
      const url = `https://api.escuelajs.co/api/v1/auth/login`;
      const response: AxiosResponse<Token, Token> = await axios.post(url, user);
      return response.data;
    } catch (err: any) {
      return thunk.rejectWithValue({ message: err.message });
    }
  }
);
export const getCurrentUser = createAsyncThunk(
  'currentUser',
  async (data, thunkApi) => {
    try {
      const token: Token = JSON.parse(localStorage.getItem('token') || '');
      const url = `https://api.escuelajs.co/api/v1/auth/profile`;

      const response: AxiosResponse<CurrentUser, CurrentUser> = await axios.get(
        url,
        {
          headers: {
            Authorization: `Bearer ${token.access_token}`,
          },
        }
      );

      return response.data;
    } catch (err: any) {
      return thunkApi.rejectWithValue({ message: err.message });
    }
  }
);
