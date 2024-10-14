import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import GeneralHome from "./Pages_D'accueil/GeneralHome";
import SignUp from "./Sign_Up/SignUp";
import SignIn from "./Sign_In/SignIn";
import ClientHome from "./Accueil_Etudiant/ClientHome";

function App() {

  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Acceuil/>}></Route>
    //   </Routes>
    // </Router>
    <ClientHome/>
  );
}

export default App
