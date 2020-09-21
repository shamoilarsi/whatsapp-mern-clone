import React from "react";
import SidebarChat from "./SidebarChat";

import { Avatar, IconButton } from "@material-ui/core";

import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import axios from "../axios";

import "../styles/sidebar.css";

const Sidebar = ({ rooms, setSelectedRoom, messages }) => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__headerLeft">
          <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GhX3dVuJ060MywhZDXkf1ZUz9UNto-qCociSgfis5s=s60-c-rp-br100" />
        </div>
        <div className="sidebar__headerRight">
          <IconButton className="iconButton">
            <DonutLargeIcon className="icon" />
          </IconButton>
          <IconButton
            className="iconButton"
            onClick={() => {
              const name = prompt("Enter Name of Room");
              if (name)
                axios.post("/new/room", {
                  name,
                });
            }}
          >
            <ChatIcon className="icon" style={{ color: "#2196F3" }} />
          </IconButton>
          <IconButton className="iconButton">
            <MoreVertIcon className="icon" />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__searchContainer">
        <div className="sidebar__search">
          <SearchIcon className="icon" />
          <input placeholder="Search or start new chat" />
        </div>
      </div>
      {rooms.map((room, idx) => {
        if (!messages[room._id]) messages[room._id] = [];
        const lastMessageObject =
          messages[room._id][messages[room._id].length - 1];

        return (
          <SidebarChat
            key={idx}
            id={room._id}
            name={room.name}
            lastMessageObject={lastMessageObject}
            setSelectedRoom={setSelectedRoom}
          />
        );
      })}
    </div>
  );
};

export default Sidebar;
