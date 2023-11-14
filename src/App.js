import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Profile from "./components/Profile";
import Mynavbar from "./components/MyNavbar";
import Mynav from "./components/Mynav";

function App() {
  return (
    <div className="App">
      {/* <Mynavbar /> */}
      <Mynav />
      <Profile />
    </div>
  );
}

export default App;
