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
          <Route element={<Profile />} path="/" />
          <Route element={<Home />} path="/home" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
