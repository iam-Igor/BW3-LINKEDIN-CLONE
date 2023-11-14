import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Profile from "./components/Profile";
import Mynav from "./components/Mynav";
import Myfooter from "./components/Myfooter";

function App() {
  return (
    <div className="App">
      <Mynav />
      <Profile />
      <Myfooter />
    </div>
  );
}

export default App;
