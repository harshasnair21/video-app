import React from "react";
import Menu from "./components/menu";
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Video from "./pages/video";
import Signin from "./pages/signin";
const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Menu />
        <div className="main">
          <Navbar />
          <div className="wrapper">
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="signin" element={<Signin />} />
                <Route path="video">
                  <Route path=":id" element={<Video />} />
                </Route>
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
