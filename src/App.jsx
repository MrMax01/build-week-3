import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import HeroProfile from "./components/HeroProfile";
import Information from "./components/Information";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroProfile />} />
        </Routes>
      </BrowserRouter>

      <Information />
    </div>
  );
}

export default App;
