import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import MyNavbar from "./component/MyNavbar";
import MyAside from "./components/MyAside";
import LinkedInFooter from "./components/LinkedinFooter";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyAside />
      <LinkedInFooter />
    </div>
  );
}

export default App;
