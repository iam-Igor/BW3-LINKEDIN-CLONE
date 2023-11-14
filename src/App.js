import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Profile from "./components/Profile";
import Mynavbar from "./components/MyNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Mynavbar />
      <Routes>
        <Route path="/profile/:userID" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
