import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const getAllPosts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// const getPostById = async (id)=>{
//     const res = await axios.get(API_URL +"/posts/getPostById/" + id)
//     return res.data
// }

// const getPostByName = async(title)=>{
//   const res = await axios.get(API_URL + "/posts/getPostByName/" + title)
//   return res.data
// }

const destroyPostById = async(id: number)=>{
  const res = await axios.delete("/posts/destroyPostById/")
  return res.data
}

const postsService = {
  getAllPosts,
//   getPostById,
//   getPostByName,
  destroyPostById
};

export default postsService;