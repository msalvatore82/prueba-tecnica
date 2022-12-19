import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const getAllPosts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

const postsService = {
  getAllPosts,
};

export default postsService;