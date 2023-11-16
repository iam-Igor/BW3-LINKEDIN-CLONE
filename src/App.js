import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Profile from "./components/Profile";
import Mynav from "./components/Mynav";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatBox from "./components/Chatbox";
import PageNotFound from "./components/PageNotFound";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoUpButton from "./components/GoUpButton";
export const notify = () =>
  toast.info(
    <div>
      <strong>Stefano</strong> ti ha inviato una richiesta di collegamento.
    </div>,
    {
      transition: Flip,
      autoClose: 2000,
    }
  );

function App() {
  return (
    <div className="App position-relative">
      <BrowserRouter>
        <ToastContainer />
        <Mynav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:userID" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <GoUpButton />
        <ChatBox />
      </BrowserRouter>
    </div>
  );
}

export default App;
