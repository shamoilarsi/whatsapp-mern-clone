import React from "react";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat/Chat";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <div className="background">
        <div className="backgroundTop"></div>
      </div>
      <div className="app__container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
