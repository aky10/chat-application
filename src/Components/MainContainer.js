import React from "react";
import ChatContainer from "./ChatContainer";
import "./myStyles.css";
import Sidebar from "./Sidebar";

const MainContainer = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <ChatContainer />
    </div>
  );
};

export default MainContainer;
