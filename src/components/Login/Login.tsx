import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {useNavigate } from "react-router-dom";
import { AppDispatch } from "../../app/store";
import avatar from "../../Assets/super/avatar1.png";
import { login } from "../../features/auth/authSlice";
import "./login.scss";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e: { target: { name: string; value: string; }; }) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const dispatch = useDispatch<AppDispatch>();

  const clearState = () => {
    setFormData({
      email: "",
      password: "",
    });
  };

  const onSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    dispatch(login(formData));
    clearState();
    navigate("/");
  };

  return (
  <div className="login-box"> 
    <div className="login-container">
      <img src={avatar} alt="" className="avatar" />
      <form onSubmit={onSubmit} className="form">
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          className="input-name"
          placeholder="Correo electronico"
        />
        <input
          className="input-password"
          placeholder="Contraseña"
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
  </div>
  );
};
export default Login;
