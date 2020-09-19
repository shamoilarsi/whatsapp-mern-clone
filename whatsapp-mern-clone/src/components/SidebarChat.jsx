import React from "react";
import { Avatar } from "@material-ui/core";

const SidebarChat = () => {
  return (
    <div className="sidebarchat__container">
      <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GhX3dVuJ060MywhZDXkf1ZUz9UNto-qCociSgfis5s=s60-c-rp-br100" />
      <div className="sidebarchat__text">
        <div className="sidebarchat__info">
          <h4>Myself</h4>
          <p className="sidebarchat__timestamp">12:30</p>
        </div>
        <p className="sidebarchat__lastmessage">
          The Window is Closing Fast!!! Have you joined the DANA ARMY yet?! DO
          NOT MISS THIS OPPORTUNITY!
        </p>
      </div>
    </div>
  );
};

export default SidebarChat;
