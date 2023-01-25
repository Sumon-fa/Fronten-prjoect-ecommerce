import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  AuthState,
  CurrentUser,
  Token,
} from '../../components/types/auth/auth';
import { getCurrentUser, login } from '../actions/authAction';

import { createUser } from '../actions/userActions';

const initialState: AuthState = {
  token: localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token') || '{}')
    : null,
  isLoading: false,
  isError: null,
  isSuccess: false,
  currentUser: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    logout(state) {
      state.isSuccess = false;
      state.token = null;
      state.isLoading = false;
      state.isError = null;
      state.currentUser = '';
      localStorage.removeItem('token');
      localStorage.removeItem('auth');
    },
    clearError(state) {
      state.isError = null;
    },
  },
  extraReducers: (build) => {
    build.addCase(login.fulfilled, (state, action: PayloadAction<Token>) => {
      if (!action.payload) {
        return state;
      }
      state.isSuccess = true;

      state.isLoading = false;
      state.isError = null;
      state.token = action.payload;
      return state;
    });
    build.addCase(login.rejected, (state, action: PayloadAction<any>) => {
      state.isError = action.payload;
    });
    build.addCase(createUser.pending, (state, action) => {
      state.isLoading = true;
      state.isError = null;
    });
    build.addCase(
      getCurrentUser.fulfilled,
      (state, action: PayloadAction<CurrentUser>) => {
        if (!action.payload) {
          return state;
        }
        state.isSuccess = true;
        state.currentUser = action.payload;
        state.isLoading = false;
        state.isError = null;

        return state;
      }
    );
    build.addCase(
      getCurrentUser.rejected,
      (state, action: PayloadAction<any>) => {
        state.isError = action.payload;
        state.currentUser = '';
        state.isLoading = false;
      }
    );
    build.addCase(getCurrentUser.pending, (state, action) => {
      state.isLoading = true;
      state.isError = null;
    });
  },
});
export const authActions = authSlice.actions;

export default authSlice;
