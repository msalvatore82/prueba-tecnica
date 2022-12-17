import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import avatar from "../../Assets/super/avatar1.png";
import { login } from "../../features/auth/authSlice";
import "./login.scss";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const dispatch = useDispatch();

  const clearState = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    clearState();
    Navigate("/");
  };

  return (
    <div className="login-container">
      <img src={avatar} alt="" srcset="" className="avatar" />
      <form onSubmit={onSubmit} className="form">
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          className="input-name"
          placeholder="Name"
        />
        <input
          className="input-password"
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <button type="submit" className="button-login">
          iNICIAR SESION
        </button>
      </form>
    </div>
  );
};
export default Login;
