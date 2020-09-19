import React from "react";
import SidebarChat from "./SidebarChat";

import { Avatar, IconButton } from "@material-ui/core";

import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__headerLeft">
          <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GhX3dVuJ060MywhZDXkf1ZUz9UNto-qCociSgfis5s=s60-c-rp-br100" />
        </div>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon className="icon" />
          </IconButton>
          <IconButton>
            <ChatIcon className="icon" />
          </IconButton>
          <IconButton>
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

      <SidebarChat />
      <SidebarChat />
      <SidebarChat />
    </div>
  );
};

export default Sidebar;
