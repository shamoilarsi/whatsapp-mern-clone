import React from "react";

const Message = ({ sender, message, time, isReceived }) => {
  return (
    <div
      className={`chat__messageBox ${
        isReceived && "chat__messageBox__received"
      }`}
    >
      <h5>{sender}</h5>
      <p>{message}</p>
      <p className="chat__messageBox__timestamp">{time}</p>
    </div>
  );
};

export default Message;
