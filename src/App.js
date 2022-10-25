import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import "./assets/css/style.css";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "./assets/css/custom.css";

import Dashboard from "./components/Dashboard";
import ProspectCard from "./components/ProspectCard";
import ContactCard from "./components/ContactCard";
import ClientCard from "./components/ClientCard";
import FrecuentCard from "./components/FrecuentCard";
import Contact from "./components/Contact";
import Client from "./components/Client";
import Frecuent from "./components/Frecuent";
import ContactModal from "./components/ContactModal";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/ProspectCard" element={<ProspectCard />} />
          <Route path="/ContactCard" element={<ContactCard />} />
          <Route path="/ClientCard" element={<ClientCard />} />
          <Route path="/FrecuentCard" element={<FrecuentCard />} />
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Client" element={<Client/>}/>
          <Route path="/Frecuent" element={<Frecuent/>}/>
          <Route path="/ContactModal" element={<ContactModal/>}/>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
