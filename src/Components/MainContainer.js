import React, { useState } from "react";
import ChatContainer from "./ChatContainer";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import Welcome from "./Welcome";

const MainContainer = () => {
  const [conversations, setConversation] = useState([
    {
      name: "Test1",
      lastMessage: "Last Messge #1",
      timeStamp: "today",
    },
    {
      name: "Test2",
      lastMessage: "Last Messge #2",
      timeStamp: "today",
    },
    {
      name: "Test3",
      lastMessage: "Last Messge #3",
      timeStamp: "today",
    },
  ]);
  return (
    <div className="main-container">
      <Sidebar />
      <Welcome />
      {/* <ChatContainer props={conversations[0]} /> */}
    </div>
  );
};

export default MainContainer;
