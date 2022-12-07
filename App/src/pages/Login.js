import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "../helpers/axios";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const valueChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const { email, password } = formData;
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("submit is working");
    const user = { email, password };
    const response = await axios.post("http://localhost:5000/login", user);
    if (response.data) {
      console.log(response.data);
      console.log("hai ressponse sert", response.data);

      localStorage.setItem("user", response.data.token);
      navigate("/");
    } else {
      console.log(response);
      console.log("invalid user");
    }
  };

  return (
    <>
      <section className="heading">
        <h1>Login</h1>
      </section>
      <section className="form">
        <form action="" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              value={email}
              type="text"
              name="email"
              id="email"
              className="form-control"
              onChange={valueChange}
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              onChange={valueChange}
              value={password}
              type="password"
              name="password"
              id="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
