import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../helpers/axios";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    userName: "",
  });
  const valueChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const { email, password, passwordConfirm, userName } = formData;
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("hai inside the submit ");

    console.log(
      "🚀 ~ file: Signup.js:45 ~ onSubmit ~ email, userName, password ",
      email,
      userName,
      password
    );
    if (userName.trim() === "") {
      console.log("name inside the submit ");

      return;
    }
    if (email.trim() === "") {
      console.log("email inside the submit ");

      return;
    }
    if (password !== passwordConfirm) {
      console.log("password inside the submit ");

      return;
    }
    console.log("hai inside the submit ");
    axios
      .post("/signup", {
        userName,
        email,
        password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        // alert("Error Occured");
      });
  };

  return (
    <>
      <section className="heading">
        <h1>Sign up</h1>
      </section>
      <section className="form">
        <form action="" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              value={userName}
              type="text"
              name="userName"
              id="userName"
              className="form-control"
              onChange={valueChange}
              placeholder="Name"
            />
          </div>
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
            <input
              onChange={valueChange}
              value={passwordConfirm}
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              className="form-control"
              placeholder="Password Confirm"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Signup
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
