import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { CreateUserWithForm, User } from '../../components/types/auth/auth';

export const createUser = createAsyncThunk(
  'createUser',
  async ({ user, avatar }: CreateUserWithForm, thunk) => {
    try {
      const url = 'https://api.escuelajs.co/api/v1/files/upload';
      const response = await axios.post(
        url,
        { file: avatar },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      let data;
      if (response && 'location' in response.data) {
        data = response.data.location;
      }

      const userData: AxiosResponse<User | Error, User | Error> =
        await axios.post('https://api.escuelajs.co/api/v1/users/', {
          ...user,
          avatar: data,
        });

      return userData.data;
    } catch (err: any) {
      return thunk.rejectWithValue({ message: err.message });
    }
  }
);
