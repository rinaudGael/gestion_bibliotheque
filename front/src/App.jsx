import { BrowserRouter as Router, Routes, Route , Navigate} from "react-router-dom";
import { UserProvider } from "./hooks/userContext";

import Login from "./pages/Login";
import UserPage from "./pages/frontOffice/UserPage";
import SignUp from "./pages/SignUp";
import Emprunter from "./pages/frontOffice/Emprunter";
import Demande from "./pages/frontOffice/Demande";
import Historique from "./pages/frontOffice/Historique";
import Admin from "./pages/backOffice/Admin";
import Statistic from "./pages/backOffice/Statistic";
import GestUser from "./pages/backOffice/GestUser";
import GestCont from "./pages/backOffice/GestCont";
import GestPret from "./pages/backOffice/GestPret";

import "./index.css";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>

          {/* PUBLIC */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/utilisateurs" element={<UserPage />} />
          <Route path="/emprunter" element={<Emprunter />} />
          <Route path="/demande" element={<Demande />} />
          <Route path="/historique" element={<Historique />} />
          {/* ADMIN (LAYOUT AVEC SIDEBAR) */}
          <Route path="/admin" element={<Admin />}>
            <Route index element={<Navigate to="statistics" replace/>}/>
            <Route index element={<Statistic />} />
            <Route path="statistics" element={<Statistic />} />
            <Route path="gestion_utilisateurs" element={<GestUser />} />
            <Route path="gestion_contenu" element={<GestCont />} />
            <Route path="gestion_pret" element={<GestPret />} />
          </Route>

        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
