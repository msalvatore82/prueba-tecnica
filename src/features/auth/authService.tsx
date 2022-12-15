import axios from "axios";



// const register = async (userData) => {
//   const res = await axios.post("/users/createUser", userData);
//   return res.data;
// };

const login = async (formdata: any) => {
  const res = await axios.post("/users/login", formdata);
  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
  return res.data;
};

const logout = async () => {
  const res = await axios.delete("/users/logout");
  if (res.data) {
    localStorage.removeItem("user");
  }
  return res.data;
};

const authService = {
//   register,
  login,
  logout,
};

export default authService;