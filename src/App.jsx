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
import Transition from "./Member_Transition/Transition";
import AdminSignIn from "./Admin/SignIn_Admin/AdminSignin";
import AdminAccueil from "./Admin/Accueil_Admin/AdminAccueil";
import EmployeeMan from "./Admin/Gestion_Employee/EmployeeMan";
import MenuTransition from "./Admin/Gestion_Menu/MenuTransition";
import MenuMan from "./Admin/Gestion_Menu/MenuMan";
import PlateMan from "./Admin/Gestion_Menu/PlateMan";
import EventMan from "./Admin/Gestion_Evenements/EventMan";
import PromoTransition from "./Admin/Gestion_Promotion/PromoTransition";
import AddPromo from "./Admin/Gestion_Promotion/AddPromotion/AddPromo";
import AddPromoMan from "./Admin/Gestion_Promotion/AddPromotion/AddPromoMan";
import RemPromoMan from "./Admin/Gestion_Promotion/RemPromotion.jsx/RemPromoMan";
import EmployeeSignIn from "./Employee/SignIn_Employee/EmployeeSignIn";
import EmployeeAccueil from "./Employee/Accueil_Employee/EmployeeAccueil";
import CommandeMan from "./Employee/Gestion_Commandes/CommadeMan";
import EmpMenuMan from "./Employee/Gestion_Menu/EmpMenuMan";
import GerantSignIn from "./Gérant/SignIn_Gerant/GerantSignIn";
import GerantAccueil from "./Gérant/Accueil_Gerant/GerantAccueil";
import GerManEmp from "./Gérant/Gestion_Employee/GerManEmp";
import GerManCom from "./Gérant/Gestion_Commande/GerManCom";
import Table1 from "./Tables/Table1";
import Table2 from "./Tables/Table2";
import Table3 from "./Tables/Table3";

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
        <Route path="/Transition" element={<Transition/>}></Route>
        <Route path="/AdminSignIn" element={<AdminSignIn/>}></Route>
        <Route path="/AdminHome" element={<AdminAccueil/>}></Route>
        <Route path="/EmployeeMan" element={<EmployeeMan/>}></Route>
        <Route path="/MenuTransition" element={<MenuTransition/>}></Route>
        <Route path="/AddMenu" element={<MenuMan/>}></Route>
        <Route path="/AddPlates" element={<PlateMan/>}></Route>
        <Route path="/EventMan" element={<EventMan/>}></Route>
        <Route path="/PromoTransition" element={<PromoTransition/>}></Route>
        <Route path="/AddPromo" element={<AddPromo/>}></Route>
        <Route path="/AddPromoMan" element={<AddPromoMan/>}></Route>
        <Route path="/RemPromoMan" element={<RemPromoMan/>}></Route>
        <Route path="/EmployeeSignIn" element={<EmployeeSignIn/>}></Route>
        <Route path="/EmployeeHome" element={<EmployeeAccueil/>}></Route>
        <Route path="/CommandeMan" element={<CommandeMan/>}></Route>
        <Route path="/EmpMenuMan" element={<EmpMenuMan/>}></Route>
        <Route path="/GerantSignIn" element={<GerantSignIn/>}></Route>
        <Route path="/GerantHome" element={<GerantAccueil/>}></Route>
        <Route path="/GerManEmp" element={<GerManEmp/>}></Route>
        <Route path="/GerManCom" element={<GerManCom/>}></Route>
        <Route path="/Table1" element={<Table1/>}></Route>
        <Route path="/Table2" element={<Table2/>}></Route>
        <Route path="/Table3" element={<Table3/>}></Route>
      </Routes>
    </Router>
  );
}

export default App
