import ActionCard from "../../Admin/Accueil_Admin/ActionCard";
import DashboardEmp from "./DashboardEmp";
import EmployeeNavbar from "./EmployeeNavbar";

function EmployeeAccueil () {
    return (
        <div className="container-fluid bg-black">
            <EmployeeNavbar/>
            <DashboardEmp/>
            <ActionCard title="Suivi Réclamations" text="Donner des réponse a la clientèle" buttontext="Let's Go" display="w-50" Location="/Table1"/>
        </div>
    );
}

export default EmployeeAccueil