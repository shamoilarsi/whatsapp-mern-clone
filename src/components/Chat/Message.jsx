import React from "react";

const Message = ({ sender, message, time, isReceived }) => {
  return (
    <div
      className={`chat__messageBox ${
        isReceived && "chat__messageBox__received"
      }`}
    >
      {!isReceived && <h5>{sender}</h5>}
      <p>{message}</p>
      <b className="chat__messageBox__timestamp">{time}</b>
    </div>
  );
};

export default Message;
