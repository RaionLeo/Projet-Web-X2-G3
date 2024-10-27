import CreateEvent from "./CreateEvent";
import EventList from "./EventList";
import { useNavigate } from "react-router-dom";

function EventMan () {

    const navigate = useNavigate();

    const goToAdminHome = () => {
        navigate('/AdminHome')
    }

    return(
        <div className="container-fluid bg-black">
            <CreateEvent/>
            <EventList/> 
            <div className="container-fluid col-12 col-md-6">
                <button className="btn btn-primary p-3 w-100 mb-5 mt-5 bg-black" style={{border:'1px solid #CFBD97'}} onClick={goToAdminHome}>Valider</button>
            </div>
        </div>
        
    );
}

export default EventMan