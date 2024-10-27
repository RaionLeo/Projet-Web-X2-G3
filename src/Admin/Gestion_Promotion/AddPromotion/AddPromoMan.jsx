import PlateList from "../../Gestion_Menu/PlateList";
import AddPromoPlate from "./AddPromoPlate";
import PromoPlateList from "./PromoPlateList";
import { useNavigate } from "react-router-dom";

function AddPromoMan () {

    const navigate = useNavigate();

    const goToTransPromo = () => {
        navigate('/PromoTransition')
    }

    return (
        <div className="container-fluid bg-black">
            <PlateList/>
            <AddPromoPlate/>
            <PromoPlateList/>
            <div className="container-fluid col-12 col-md-6">
                <button className="btn btn-primary p-3 w-100 mb-5 bg-black" style={{border:'1px solid #CFBD97'}} onClick={goToTransPromo}>Valider</button>
            </div>
        </div>
    );
}

export default AddPromoMan