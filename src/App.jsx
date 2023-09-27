import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import MyNavbar from "./components/MyNavbar";
import LinkedInFooter from "./components/LinkedinFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Default from "./components/Default";
import HeroProfileLoaders from "./components/loaders/HeroProfileLoader";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />

        <Routes>
          <Route path="" element={<Default />} />
          <Route path="/me" element={<Main />} />
          <Route path="/profile/:profileId" element={<Main />} />
          <Route path="/prova" element={<HeroProfileLoaders />} />
        </Routes>
        <LinkedInFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
