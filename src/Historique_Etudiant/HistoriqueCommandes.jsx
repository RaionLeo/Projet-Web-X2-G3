import FullNavbar from "../Accueil_Etudiant/FullNavbar";
import TableHistorique from "./TableHistorique";

function HistoriqueCommandes () {
    return(
        <div className="container-fluid bg-black">
            <FullNavbar/>
            <TableHistorique/>
        </div>
    );
}

export default HistoriqueCommandes
