import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";
import { InitialStateUser  } from "../../types/Types";


const initialState: InitialStateUser = {
  user: "" ,
  friends: [],
  friend: { 
  lat:"",
  lng: "",
  street: "",
  suite: "",
  city: "",
  zipcode: "",
  geo: "",
  name: "",
  catchPhrase: "",
  bs: "",
  id: 0,
  username: "",
  email: "",
  address: "",
  phone: "",
  website: "",
  company: "",
  },
};


export const getAllFriends = createAsyncThunk(
  "posts/getAllFriends",
  async () => {
    try {
      return await authService.getAllFriends();
    } catch (error) {
      console.error(error);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user: object) => {
  try {
    return await authService.login(user);
  } catch (error) {
    console.error(error);
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    return await authService.logout()
  } catch (error) {
    console.error(error);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState: {user: "", friends: [], friend: {}}, 
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user  = action.payload;
      })
      .addCase(getAllFriends.fulfilled, (state, action) => {
        state.friends = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
         state.user = ""
      });
  },
});

export default authSlice.reducer;
