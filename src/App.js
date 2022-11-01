import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import "./assets/css/style.css";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "./assets/css/custom.css";
import Client from "./pages/ClientPage";
import ContactModal from "./components/ContactModal";
import DashboardPage from "./pages/DashboardPage";
import Frecuent from "./pages/FrecuentPage";
import ContactPage from "./pages/ContactPage";
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route index element={<Login />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/contact/:id" element={<ContactPage/>} />
                    <Route path="/dashboard/client" element={<Client />} />
                    <Route path="/dashboard/frecuent" element={<Frecuent />} />
                    <Route path="/contactModal" element={<ContactModal />} />
                </Routes>

            </div>
        </BrowserRouter>
    );
}

export default App;
