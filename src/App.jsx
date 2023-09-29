import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import MyNavbar from "./components/MyNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import HomeFeed from "./components/HomeFeed";
import JobsPage from "./components/JobsPage";
import RetePage from "./components/RetePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="" element={<HomeFeed />} />
          <Route path="/feed" element={<HomeFeed />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/profile/:profileId" element={<Main />} />
          <Route path="/mynetwork" element={<RetePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
