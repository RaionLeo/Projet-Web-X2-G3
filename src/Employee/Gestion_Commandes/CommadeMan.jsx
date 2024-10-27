import EmployeeNavbar from "../Accueil_Employee/EmployeeNavbar";
import CommandeTable from "./CommandTable";
import FinishCommande from "./FinishCommande";

function CommandeMan () {
    return (
    <div className="bg-black">
        <EmployeeNavbar/>
        <CommandeTable/>
        <FinishCommande/>
    </div>
);
}

export default CommandeMan