import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import MyNavbar from "./components/MyNavbar";
import LinkedInFooter from "./components/LinkedinFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import HomeFeed from "./components/HomeFeed";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="" element={<HomeFeed />} />
          <Route path="/feed" element={<HomeFeed />} />
          <Route path="/profile/:profileId" element={<Main />} />
        </Routes>
        <LinkedInFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
