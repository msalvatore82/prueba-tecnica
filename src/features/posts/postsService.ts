import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";
const API_URL_POST = "https://jsonplaceholder.typicode.com/posts"

const getAllPosts = async (userId: number) => {
  const res = await axios.get(API_URL + "/" + userId + "/posts");
  return res.data;
};
const getPostById = async (id: number) => {
  const res = await axios.get(API_URL + "/" + id);

  return res.data;
};
const updatePost = async (post: any) => {
  const res = await axios.put(API_URL_POST + "/" + post.id, post);

  return res.data;
};

const postsService = {
  getAllPosts,
  getPostById,
  updatePost,
};

export default postsService;
