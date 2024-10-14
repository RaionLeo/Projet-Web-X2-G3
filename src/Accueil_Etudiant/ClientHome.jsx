import Footer from "../Pages_D'accueil/Footer";
import ClientAccEvent from "./ClientAccEvents";
import ClientAccPlats from "./ClientAccPlats";
import ClientAccPromo from "./ClientAccPromo";
import ClientHero from "./ClientHero";
import FullNavbar from "./FullNavbar";
import show1 from '../assets/Show1.jpg'


function ClientHome () {

    return (
        <>
            <div className="bg-black">
                <FullNavbar/>
                <ClientHero/>
                <ClientAccPromo/>
                <ClientAccPlats/>
                <ClientAccEvent EventImage={show1} EventDescription="Evenement Fun, Venez tous!"/>
                <Footer/>
            </div>
        </>
    );  
}

export default ClientHome