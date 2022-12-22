import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const getAllPosts = async (userId: number) => {
  const res = await axios.get(API_URL + "/" + userId + "/posts");
  return res.data;
};
const getPostById = async (id: number) => {
  const res = await axios.get(API_URL + "/" + id);

  return res.data;
};


const postsService = {
  getAllPosts,
  getPostById,
};

export default postsService;
