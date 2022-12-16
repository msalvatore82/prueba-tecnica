import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

// const user = JSON.parse(localStorage.getItem("user"));

interface Friend {
  lat:string,
  lng: string;
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: string;
  name: string;
  catchPhrase: string;
  bs: string;
  id: number;
  username: string;
  email: string;
  address: string;
  phone: string;
  website: string;
  company: string;
}
interface InitialState {
  user:string
  friends: [],
  friend: Friend,
  
}

const initialState : InitialState = {
  user: "" ,
  friends: [],
  friend: { 
    lat: "",
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

// export const register = createAsyncThunk("auth/register", async (user) => {
//   try {
//     return await authService.register(user);
//   } catch (error) {
//     console.error(error);
//   }
// });

export const login = createAsyncThunk("auth/login", async (user) => {
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
  initialState: {user: "", friends: [], friend: {}}, // initialState: antes estaba asi y funcionaba todo menos el navigate
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
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
