import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import "./assets/css/style.css";
import '/node_modules/bootstrap/dist/css/bootstrap.css';
// import "./scss/custom.scss";
import './assets/css/custom.css';

import Dashboard from "./components/Dashboard";
import Card from "./components/Card";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/Card" element={<Card/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
