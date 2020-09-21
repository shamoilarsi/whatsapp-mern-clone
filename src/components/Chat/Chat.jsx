import React from "react";
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import Message from "./Message";

import "../../styles/chat.css";

const Chat = ({ messages, room, user }) => {
  let lastSeen = null;

  if (messages && messages.length > 0)
    lastSeen = messages[messages.length - 1].timestamp.substring(0, 24);
  return (
    <div className="chat__container">
      <ChatHeader room={room} lastSeen={lastSeen} />
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
