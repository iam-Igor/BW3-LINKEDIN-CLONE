import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Profile from "./components/Profile";
import Mynav from "./components/Mynav";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatBox from "./components/Chatbox";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Mynav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:userID" element={<Profile />} />
        </Routes>
        <ChatBox />
      </BrowserRouter>
    </div>
  );
}

export default App;
