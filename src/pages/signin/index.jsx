import React, { useState } from "react";
import "./index.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../../redux/slices/userSlice";

import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
const Signin = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      const res = await axios.post("/auth/signin", {
        name,
        password,
      });
      const firstLetter = name.charAt(0).toUpperCase();
      const placeholderImage = `https://ui-avatars.com/api/?name=${firstLetter}&background=random&color=fff`;
      console.log("response from login api-", res);
      const updatedUserData = {
        ...res.data,
        img: placeholderImage,
      };
      dispatch(loginSuccess(updatedUserData));
    } catch (err) {
      dispatch(loginFailure());
      console.error("Error response:", err.response); // Log error details
    }
  };
  const signInWithGoogle = async () => {
    dispatch(loginStart());
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Google user result: ", result);
        const firstLetter = result.user.displayName.charAt(0).toUpperCase();
        const placeholderImage = `https://ui-avatars.com/api/?name=${firstLetter}&background=random&color=fff`;
        console.log("Generated image URL: ", placeholderImage);
        axios
          .post("/auth/google", {
            name: result.user.displayName,
            email: result.user.email,
            img: placeholderImage,
          })
          .then((res) => {
            console.log(res);
            dispatch(loginSuccess(res.data));
            navigate("/");
          });
      })
      .catch((error) => {
        dispatch(loginFailure());
      });
  };
  return (
    <div className="signin-container">
      <div className="wrapper">
        <div className="title">Sign In</div>
        <div className="subtitle">to continue to Youtube</div>
        <input
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Sign In</button>
        <div className="title">or</div>
        <div className="google-signin">
          <button onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
        <div className="title">or</div>
        <input
          placeholder="username"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
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
