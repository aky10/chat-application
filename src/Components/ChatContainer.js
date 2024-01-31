import React from "react";
import "./myStyles.css";
import { IoMdSend } from "react-icons/io";
import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessageSelf";

const ChatContainer = ({ props }) => {
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
