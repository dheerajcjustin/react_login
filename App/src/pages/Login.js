import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const creadatiolChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const { email, password } = formData;
  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    console.log(userData);
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
