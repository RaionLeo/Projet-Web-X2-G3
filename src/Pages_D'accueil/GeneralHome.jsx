import Footer from "./Footer";
import GeneralHero from "./GeneralHero";
import GeneralNavbar from "./GeneralNavbar";
import GeneralPlateCard from "./GeneralPlateCard";

function GeneralHome () {

    return(
        <>
            <div className="bg-black">
                <GeneralNavbar/>
                <GeneralHero/>
                <GeneralPlateCard/>
                <Footer/>
            </div>
        </>
    );
}

export default GeneralHome