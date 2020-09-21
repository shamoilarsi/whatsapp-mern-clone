import React from "react";
import { Avatar } from "@material-ui/core";

const SidebarChat = ({ id, name, lastMessageObject, setSelectedRoom }) => {
  return (
    <div
      className="sidebarchat__container"
      onClick={() => setSelectedRoom({ id, name })}
    >
      <Avatar src={`https://avatars.dicebear.com/api/human/${id}.svg`} />
      <div className="sidebarchat__text">
        <div className="sidebarchat__info">
          <h4> {name} </h4>
          <p className="sidebarchat__timestamp">
            {lastMessageObject?.timestamp.substring(0, 24) || ""}
          </p>
        </div>
        {lastMessageObject?.message && (
          <p className="sidebarchat__lastmessage">
            {`${lastMessageObject?.userName}: ${lastMessageObject?.message}`}
          </p>
        )}
      </div>
    </div>
  );
};
export default SidebarChat;
