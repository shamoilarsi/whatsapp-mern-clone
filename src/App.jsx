import React, { useState, useEffect } from "react";
import Pusher from "pusher-js";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat/Chat";
import axios from "./axios";
import "./styles/App.css";

function App() {
  const [rooms, setRooms] = useState([]);
  const [messages, setMessages] = useState({});
  const [selectedRoom, setSelectedRoom] = useState({});
  const [user, setUser] = useState("unknown");

  useEffect(() => {
    (async () => {
      const rooms = await axios.get("/rooms");
      setRooms(rooms.data);
      setSelectedRoom({ ...rooms.data[0], id: rooms.data[0]._id });

      const messages = await axios.get("/messages");
      const messageData = messages.data;

      const finalMessages = {};
      messageData.forEach((message) => {
        if (!finalMessages[message.roomId]) finalMessages[message.roomId] = [];
        finalMessages[message.roomId] = [
          ...finalMessages[message.roomId],
          message,
        ];
      });
      setMessages(finalMessages);
    })();
    const user = prompt(
      "IMPORTANT - \nThis clone was built to improve my skills.\nSecurity was not the main motive here.\n\nIcons that have a function are colored differently. \n\nEnter Username: "
    );
    if (user) setUser(user);
  }, []);

  useEffect(() => {
    const pusher = new Pusher("4ab3888798ddaa49a82e", {
      cluster: "ap2",
    });

    const pusherRooms = pusher.subscribe("rooms");
    pusherRooms.bind("inserted", (data) => {
      setRooms((rooms) => [...rooms, data]);
    });

    const pusherMessages = pusher.subscribe("messages");
    pusherMessages.bind("inserted", (data) => {
      setMessages((messages) => {
        return { ...messages, [data.roomId]: [...messages[data.roomId], data] };
      });
    });

    return () => {
      pusher.unsubscribe();
    };
  }, []);

  return (
    <div className="app">
      <div className="background">
        <div className="backgroundTop"> </div>
      </div>

      <div className="app__container">
        <Sidebar
          rooms={rooms}
          messages={messages}
          setSelectedRoom={(room) => setSelectedRoom(room)}
        />
        {messages && (
          <Chat
            user={user}
            messages={messages[selectedRoom.id]}
            room={selectedRoom}
          />
        )}
      </div>
    </div>
  );
}

export default App;
