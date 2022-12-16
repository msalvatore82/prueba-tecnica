import axios from "axios";

// const register = async (userData) => {
//   const res = await axios.post("/users/createUser", userData);
//   return res.data;
// };

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
};

export default authService;
