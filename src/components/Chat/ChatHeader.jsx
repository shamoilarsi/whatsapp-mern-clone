import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

const ChatHeader = ({ room }) => {
  return (
    <div className="chatHeader__container">
      <div className="chatHeader__info">
        <Avatar src={`https://avatars.dicebear.com/api/human/${room.id}.svg`} />
        <div className="chatHeader__text">
          <h4>{room.name}</h4>
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
