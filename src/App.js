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
import PrivateRoute from "./routers/PrivateRouter";
import PublicRoute from "./routers/PublicRouter";
import AuthContextProvider from "./context/AuthContext";
import Logout from "./components/Logout";
import PromotionsPage from "./pages/PromotionPage";
function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<PublicRoute />}>
              <Route index element={<Login />} />
            </Route>
            <Route path="/dashboard" element={<PrivateRoute />}>
              <Route path="logout" element={<Logout />} />
              <Route index element={<DashboardPage />} />
              <Route path="contact/:id" element={<ContactPage />} />
              <Route path="client/:id" element={<Client />} />
              <Route path="frecuent/:id" element={<Frecuent />} />
              <Route path="contactModal" element={<ContactModal />} />
              <Route path="promotions" element={<PromotionsPage />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
