import React from "react";
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import Message from "./Message";

import "../../styles/chat.css";

const Chat = () => {
  return (
    <div className="chat__container">
      <ChatHeader />
      <div className="chat__main">
        <div className="chat__chats">
          <Message
            sender="sender name"
            message=" looooooong message"
            time="12:45"
          />
          <Message
            sender="sender name"
            isReceived
            message="another looooooong message"
            time="12:46"
          />
        </div>
      </div>
      <ChatFooter />
    </div>
  );
};

export default Chat;
