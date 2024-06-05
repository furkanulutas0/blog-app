import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  currentUser: object | null;
  message: string | null;
  loading: boolean;
  expiresAt: number;
}

const initialState: UserState = {
  currentUser: null,
  message: null,
  loading: false,
  expiresAt: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.message = null;
      state.expiresAt = Date.now() + 1000 * 60 * 60; // 1 saat
    },
    signInFailure: (state, action) => {
      state.message = action.payload;
      state.loading = false;
    },
    signOutSuccess: (state) => {
      state.currentUser = null;
    },
    //diğer signout reducerları eklenecek
  },
});

export const { signInStart, signInSuccess, signInFailure, signOutSuccess } =
  userSlice.actions;

export default userSlice.reducer;
