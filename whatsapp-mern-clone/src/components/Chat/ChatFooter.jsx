import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";
import SendIcon from "@material-ui/icons/Send";

import axios from "../../axios";

const ChatFooter = ({ roomId, user: userName }) => {
  const [input, setInput] = useState("");
  const onSend = (e) => {
    e.preventDefault();
    axios.post("/new/message", {
      message: input,
      userName,
      timestamp: new Date().toLocaleString(),
      roomId,
    });
    setInput("");
  };
  return (
    <div className="chatFooter__container">
      <div className="chatFooter__icons">
        <IconButton className="iconButton">
          <InsertEmoticonIcon className="icon" />
        </IconButton>
        <IconButton className="iconButton">
          <AttachFileIcon className="icon" />
        </IconButton>
      </div>
      <form className="chatFooter__form" onSubmit={onSend}>
        <input
          className="chatFooter__input"
          placeholder="Enter message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          style={{ display: "none" }}
          type="submit"
          value="Submit"
        ></button>
      </form>

      {input === "" ? (
        <IconButton className="iconButton">
          <MicIcon className="icon" />
        </IconButton>
      ) : (
        <IconButton onClick={onSend}>
          <SendIcon className="icon" style={{ color: "#2196F3" }} />
        </IconButton>
      )}
    </div>
  );
};

export default ChatFooter;
