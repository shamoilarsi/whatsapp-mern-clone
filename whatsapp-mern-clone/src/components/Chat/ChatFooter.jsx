import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";
import SendIcon from "@material-ui/icons/Send";

const ChatFooter = () => {
  const [input, setInput] = useState("");
  const onSend = (e) => {
    e.preventDefault();
    alert(input);
    setInput("");
  };
  return (
    <div className="chatFooter__container">
      <div className="chatFooter__icons">
        <IconButton>
          <InsertEmoticonIcon className="icon" />
        </IconButton>
        <IconButton>
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
      <IconButton>
        {input === "" ? (
          <MicIcon className="icon" />
        ) : (
          <SendIcon className="icon" />
        )}
      </IconButton>
    </div>
  );
};

export default ChatFooter;
