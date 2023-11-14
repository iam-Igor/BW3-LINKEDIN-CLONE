import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Profile from "./components/Profile";
import Mynavbar from "./components/MyNavbar";

function App() {
  return (
    <div className="App">
      <Mynavbar />
      <Profile />
    </div>
  );
}

export default App;
