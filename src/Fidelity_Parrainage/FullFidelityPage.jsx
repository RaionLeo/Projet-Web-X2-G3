import FullNavbar from "../Accueil_Etudiant/FullNavbar";
import Footer from "../Pages_D'accueil/Footer";
import Fidelity from "./Fidelity";
import Parrain from "./Parrain";
import PointsBar from "./PointsBar";

function FullFidelityPage () {
    return (
        <div className="bg-black">
            <FullNavbar/>
            <PointsBar/>
            <div className="row row-cols-1 row-cols-md-2 d-flex">
                <Fidelity/>
                <Parrain/>
            </div>
            <Footer/>
        </div>
    );
}

export default FullFidelityPage