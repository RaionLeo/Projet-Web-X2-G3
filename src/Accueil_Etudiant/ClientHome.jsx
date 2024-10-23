import Footer from "../Pages_D'accueil/Footer";
import ClientAccEvent from "./ClientAccEvents";
import ClientAccPlats from "./ClientAccPlats";
import ClientAccPromo from "./ClientAccPromo";
import ClientHero from "./ClientHero";
import FullNavbar from "./FullNavbar";
import show1 from '../assets/Show1.jpg'
import GeneralPlateCard from "../Pages_D'accueil/GeneralPlateCard";
import EvenementJour from "../Jeux_Evenement/EvenementJour";


function ClientHome () {

    return (
        <>
            <div className="bg-black">
                <FullNavbar/>
                <ClientHero/>
                <ClientAccPromo/>
                <GeneralPlateCard/>
                <ClientAccEvent/>
                <Footer/>
            </div>
        </>
    );  
}

export default ClientHome