import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GeneralHome from "./Pages_D'accueil/GeneralHome";
import SignUp from "./Sign_Up/SignUp";
import SignIn from "./Sign_In/SignIn";
import ClientHome from "./Accueil_Etudiant/ClientHome";
import MenuEtudiant from "./Menu_Etudiant/MenuEtudiant";
import Payment from "./Paiment_Etudiant/Payment";
import Evenements from "./Jeux_Evenement/Evenements";
import Quiz from "./Page_Quiz/Quiz";
import FullFidelityPage from "./Fidelity_Parrainage/FullFidelityPage";
import HistoriqueCommandes from "./Historique_Etudiant/HistoriqueCommandes";
import ClassementClient from "./Classement_Etudiant/ClassementClients";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<GeneralHome/>}></Route>
        <Route path="/SignUp" element={<SignUp/>}></Route>
        <Route path="/SignIn" element={<SignIn/>}></Route>
        <Route path="/ClientHome" element={<ClientHome/>}></Route>
        <Route path="/MenuEtudiant" element={<MenuEtudiant/>}></Route>
        <Route path="/Payment" element={<Payment/>}></Route>
        <Route path="/Evenements" element={<Evenements/>}></Route>
        <Route path="/Quiz" element={<Quiz/>}></Route>
        <Route path="/Fidelity" element={<FullFidelityPage/>}></Route>
        <Route path="/Historique" element={<HistoriqueCommandes/>}></Route>
        <Route path="/Classement" element={<ClassementClient/>}></Route>
      </Routes>
    </Router>
  );
}

export default App
