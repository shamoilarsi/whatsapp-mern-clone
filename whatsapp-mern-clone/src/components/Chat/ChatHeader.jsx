import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

const ChatHeader = ({ title }) => {
  return (
    <div className="chatHeader__container">
      <div className="chatHeader__info">
        <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GhX3dVuJ060MywhZDXkf1ZUz9UNto-qCociSgfis5s=s60-c-rp-br100" />
        <div className="chatHeader__text">
          <h4>{title}</h4>
          <p className="chatHeader__lastseen">online</p>
        </div>
      </div>
      <div>
        <IconButton className="iconButton">
          <SearchIcon className="icon" />
        </IconButton>
        <IconButton className="iconButton">
          <MoreVertIcon className="icon" />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatHeader;
