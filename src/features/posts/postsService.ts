import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const getAllPosts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};
const getPostById = async (id: any) => {
  const res = await axios.get(API_URL + "/" + id);

  return res.data;
};
const updatePost = async (post: any) => {
  const res = await axios.put(API_URL + "/" + post.id, post);

  return res.data;
};

const postsService = {
  getAllPosts,
  getPostById,
  updatePost,
};

export default postsService;
