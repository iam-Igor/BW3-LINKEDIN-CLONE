import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Profile from "./components/Profile";
import Mynavbar from "./components/MyNavbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Mynavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:userID" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
