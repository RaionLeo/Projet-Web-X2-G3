import { useNavigate } from "react-router-dom";
import AddPlate from "./AddPlate";
import MenuTable from "./MenuTable";
import PlateList from "./PlateList";

function MenuMan () {

    const navigate = useNavigate();

    const goToTransMenu = () => {
        navigate('/MenuTransition')
    }

    return (
    <div className="container-fluid bg-black">
        <div className="container-fluid col-10 col-md-8 col-lg-5">
            <h1 className="text-center text-white fw-bold p-3" style={{borderBottom:'1px solid #CFBD97'}}>Création Menu Jour</h1>
        </div>
        <div className="container-fluid">
            <PlateList/>
            <AddPlate/>
            <MenuTable/>
        </div>
        <div className="container-fluid col-12 col-md-6">
            <button className="btn btn-primary p-3 w-100 mb-5 bg-black" style={{border:'1px solid #CFBD97'}} onClick={goToTransMenu}>Valider</button>
        </div>
    </div>
);
}

export default MenuMan