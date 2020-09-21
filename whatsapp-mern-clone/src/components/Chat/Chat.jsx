import React from "react";
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import Message from "./Message";

import "../../styles/chat.css";

const Chat = ({ messages, room, user }) => {
  return (
    <div className="chat__container">
      <ChatHeader title={room.name} />
      <div className="chat__main">
        <div className="chat__chats">
          {messages &&
            messages.map(({ message, timestamp, userName }, idx) => (
              <Message
                key={idx}
                sender={userName}
                message={message}
                time={timestamp}
                isReceived={userName === user}
              />
            ))}
        </div>
      </div>
      <ChatFooter roomId={room.id} user={user} />
    </div>
  );
};

export default Chat;
