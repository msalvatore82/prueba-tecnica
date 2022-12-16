import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import posts from "../features/posts/postsSlice"
import auth from "../features/auth/authSlice"

export const store = configureStore({
  reducer: {
    posts,
    auth
   
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
