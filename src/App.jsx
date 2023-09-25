import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import MyNavbar from "./component/MyNavbar";
import MyAside from "./components/MyAside";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyAside />
    </div>
  );
}

export default App;
