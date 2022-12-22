import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postsService";
import { Post, InitialState } from "../../types/Types";


const initialState: InitialState = {
  posts: [],
  isLoading: false,
  post: {
    id: 0,
    userId: 0,
    title: "",
    body: "",
  },
};

export const getAllPosts = createAsyncThunk("posts/getAllPosts", async (userId: number) => {
  try {
    return await postsService.getAllPosts(userId);
  } catch (error) {
    console.error(error);
  }
});

export const destroyPostById = createAsyncThunk(
  "posts/destroyPostById",
  async (id: number) => {
    try {
      return id;
    } catch (error) {
      console.error(error);
    }
  }
);
export const getPostById = createAsyncThunk("posts/getPostById", async (id: number) => {
  try {
    return await postsService.getPostById(id);
  } catch (error) {
    console.error(error);
  }
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })

      .addCase(destroyPostById.fulfilled, (state, action) => {
        state.posts = state.posts.filter(
          (post: Post) => post.id !== action.payload
        );
      })
      .addCase(getPostById.fulfilled, (state, action) => {
        state.post = action.payload;
      })
  },
});

export const { reset } = postsSlice.actions;
export default postsSlice.reducer;
