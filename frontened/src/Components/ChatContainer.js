import React, { useState } from "react";
import "./myStyles.css";
import { IoMdSend } from "react-icons/io";
import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessageSelf";

const ChatContainer = ({ props }) => {
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
  var props = conversations[0];
  return (
    <div className="chatAreaContainer">
      <div className="chatArea-Header">
        <p className="con-icon">{props.name[0]}</p>
        <div className="header-text">
          <p className="con-title">{props.name}</p>
          <p className="con-timeStamp">{props.timeStamp}</p>
        </div>
      </div>
      <div className="messages-container">
        <MessageOthers />
        <MessageSelf />
        <MessageOthers />
        <MessageSelf />
      </div>
      <div className="text-input-area">
        <input placeholder="Type a Messafe" className="search-box"></input>
        <IoMdSend />
      </div>
    </div>
  );
};

export default ChatContainer;
