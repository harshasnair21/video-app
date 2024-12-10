import React from "react";
import "./index.css";
const Signin = () => {
  return (
    <div className="signin-container">
      <div className="wrapper">
        <div className="title">Sign In</div>
        <div className="subtitle">to continue to Youtube</div>
        <input placeholder="username" />
        <input placeholder="password" type="password" />
        <button>Sign In</button>
        <div className="title">or</div>
        <input placeholder="username" />
        <input placeholder="email" />
        <input placeholder="password" type="password" />
        <button>Sign Up</button>
      </div>
      <div className="more">
        English(USA)
        <span>Help</span>
        <span>Privacy</span>
        <span>Terms</span>
      </div>
    </div>
  );
};

export default Signin;
