import FullNavbar from "../Accueil_Etudiant/FullNavbar";
import EvenementJour from "./EvenementJour";
import EvenementFuture from "./EvenementsFuture";
import GameCard from "./GameCard";

function Evenements () {
    return (
        <div className="bg-black">
            <FullNavbar/>
            <EvenementJour/>
            <EvenementFuture/>
            <GameCard/>
        </div>
    );
}

export default Evenements