import FullNavbar from "../Accueil_Etudiant/FullNavbar";
import TableClassement from "./TableClassement";

function ClassementClient () {
    return(
        <div className="container-fluid bg-black">
            <FullNavbar/>
            <TableClassement/>
        </div>
    );
}

export default ClassementClient