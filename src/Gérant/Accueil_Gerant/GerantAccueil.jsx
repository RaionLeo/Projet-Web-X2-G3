import ActionCard from "../../Admin/Accueil_Admin/ActionCard";
import Dashboard from "../../Admin/Accueil_Admin/Dashboard";
import GerantNavbar from "./GerantNavbar";

function GerantAccueil () {
    return (
        <div className="container-fluid bg-black">
            <GerantNavbar/>
            <Dashboard title="Gérant"/>
            <ActionCard title="Suivi Réclamations" text="Vérifier les réponses de vos employées au clients avant qu'ils ne les voies" buttontext="Let's Go" display="w-50" Location="/Table2"/>
        </div>
    );
}

export default GerantAccueil