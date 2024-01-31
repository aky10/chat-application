import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import ChatContainer from "./ChatContainer";
import Login from "./LogIn";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import Welcome from "./Welcome";

const MainContainer = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <Outlet />
      {/* <Sidebar /> */}
      {/* <Login /> */}
      {/* <Welcome /> */}
      {/* <ChatContainer props={conversations[0]} /> */}
    </div>
  );
};

export default MainContainer;
