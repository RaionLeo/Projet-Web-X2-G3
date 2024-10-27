import CreatePlate from "./CreatePlate";
import PlateList from "./PlateList";
import { useNavigate } from "react-router-dom";

function PlateMan () {

    const navigate = useNavigate();

    const goToTransMenu = () => {
        navigate('/MenuTransition')
    }

    return(
        <div className="container-fluid bg-black">
            <CreatePlate/>
            <PlateList/>
            <div className="container-fluid col-12 col-md-6 mt-5">
                <button className="btn btn-primary p-3 w-100 mb-5 bg-black" style={{border:'1px solid #CFBD97'}} onClick={goToTransMenu}>Valider</button>
            </div>
        </div>
    );
}

export default PlateMan