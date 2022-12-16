import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const getAllFriends = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

const login = async (formdata: any) => {
  if (formdata) {
    localStorage.setItem("user", JSON.stringify(formdata));
  }
  return formdata;
};

const logout = async () => {
  localStorage.removeItem("user");
};

const authService = {
  //   register,
  login,
  logout,
  getAllFriends
};

export default authService;
