import React, { useState } from "react";
import "./myStyles.css";
import { FaUser } from "react-icons/fa";
import { MdGroupAdd } from "react-icons/md";
import { HiUserAdd } from "react-icons/hi";
import { IoIosAddCircle } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import SbChats from "./SbChats";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
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
    <div className="sidebar-container">
      <div className="sb-header">
        <div className="other-icons">
          <FaUser />
          <HiUserAdd />
          <IoIosAddCircle />
        </div>
      </div>
      <div className="sb-search">
        <IoMdSearch />
        <input className="search-box" placeholder="Search" />
      </div>
      <div className="sb-chats">
        {conversations.map((conv) => (
          <SbChats props={conv} key={conversations.name} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
