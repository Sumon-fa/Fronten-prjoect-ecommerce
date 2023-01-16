import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserState } from '../../components/types/auth/auth';
import { createUser } from '../actions/userActions';

const initialState: UserState = {
  user: {},
  isLoading: false,
  isError: null,
  isSuccess: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    clearError(state) {
      state.isError = null;
    },
    clearSuccess(state) {
      state.isSuccess = false;
    },
  },
  extraReducers: (build) => {
    build.addCase(
      createUser.fulfilled,
      (state, action: PayloadAction<User | Error>) => {
        if (action.payload && 'message' in action.payload) {
          state.isLoading = false;
          state.isError = action.payload;
          state.isSuccess = false;

          return state;
        } else if (!action.payload) {
          return state;
        }
        state.user = action.payload;
        state.isLoading = false;
        state.isError = null;
        state.isSuccess = true;
        console.log('ddd', state.user);
        return state;
      }
    );
    build.addCase(createUser.rejected, (state, action: PayloadAction<any>) => {
      state.isError = action.payload;
      state.isLoading = false;
      state.isSuccess = false;
    });
    build.addCase(createUser.pending, (state, action) => {
      state.isLoading = true;
      state.isError = null;
      state.isSuccess = false;
    });
  },
});
export const userActions = userSlice.actions;

export default userSlice;
