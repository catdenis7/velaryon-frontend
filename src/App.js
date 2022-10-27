import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import "./assets/css/style.css";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "./assets/css/custom.css";

import Dashboard from "./pages/DashboardPage";
import ProspectCard from "./components/cards/ProspectCard";
import ContactCard from "./components/cards/ContactCard";
// import ClientCard from "./components/cards/ClientCard";
// import FrecuentCard from "./components/cards/FrecuentCard";
import Contact from "./components/Contact";
import Client from "./pages/ClientPage";
import Frecuent from "./components/Frecuent";
import ContactModal from "./components/ContactModal";
import DashboardPage from "./pages/DashboardPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index element={<Login />} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/sidebar" element={<Sidebar />} /> */}
          <Route path="/dashboard" element={<DashboardPage />} />
          {/* <Route path="/prospectCard" element={<ProspectCard />} /> */}
          {/* <Route path="/contactCard" element={<ContactCard />} /> */}
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/dashboard/client" element={<Client/>}/>
          <Route path="/frecuent" element={<Frecuent/>}/>
          <Route path="/contactModal" element={<ContactModal/>}/>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
