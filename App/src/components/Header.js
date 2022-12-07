import { Link, useNavigate } from "react-router-dom";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <button>
          <Link to="/">Home</Link>
        </button>
      </div>
      <ul>
        <li>
          <Link to="/logout">
            <button className="btn btn-logout">Logout</button>
          </Link>
        </li>
        <li>
          <Link to="/login">
            <button className="btn btn-login"> Login</button>
          </Link>
        </li>
        <li>
          <Link to="/signup">
            <button className="btn btn-signup"> Signup</button>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
