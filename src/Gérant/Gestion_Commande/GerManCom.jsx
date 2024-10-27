import CommandeTable from "../../Employee/Gestion_Commandes/CommandTable";
import GerantNavbar from "../Accueil_Gerant/GerantNavbar";

function GerManCom () {
    return (
        <div className="bg-black">
            <GerantNavbar/>
            <CommandeTable/>
        </div>
    );
}

export default GerManCom