import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
  });
  const creadatiolChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const { email, password, passwordConfirm, name } = formData;

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
      name,
      passwordConfirm,
    };
    console.log(userData);
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
              value={name}
              type="text"
              name="name"
              id="name"
              className="form-control"
              onChange={creadatiolChange}
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
              onChange={creadatiolChange}
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              onChange={creadatiolChange}
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
              onChange={creadatiolChange}
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
