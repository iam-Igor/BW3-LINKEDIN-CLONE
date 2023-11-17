import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Profile from "./components/Profile";
import Mynav from "./components/Mynav";
import Home from "./components/Home";
import Notifiche from "./components/Notifiche";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatBox from "./components/Chatbox";
import PageNotFound from "./components/PageNotFound";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoUpButton from "./components/GoUpButton";
import Test2 from "./components/Test2";
import MyJobsOffers from "./components/MyJobsOffers";

import JobsPage from "./components/JobsPage";
import Net from "./components/Net";
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
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/jobs/offers" element={<MyJobsOffers />} />
          <Route path="/net/" element={<Net />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/Notifiche/" element={<Notifiche />} />
        </Routes>
        <GoUpButton />
        <ChatBox />
      </BrowserRouter>
    </div>
  );
}

export default App;
