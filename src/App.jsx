import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyAside from "./components/MyAside";
import LinkedInFooter from "./components/LinkedinFooter";
import HeroProfile from "./components/HeroProfile";
import Information from "./components/Information";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <MyAside />
        <Routes>
          <Route path="/" element={<HeroProfile />} />
        </Routes>
        <LinkedInFooter />
        <Information />
      </BrowserRouter>
    </div>
  );
}

export default App;
