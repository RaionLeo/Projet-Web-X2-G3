import { useCookies } from "react-cookie";
import React, {useState} from "react" ;
import axios from 'axios';
import { v4 as uuidv4} from "uuid";

function ParrainBtn () {

    const [cookies] = useCookies(['clientId', 'clientName']);

    const [parrain, setParrain] = useState({
        parrainId : cookies.clientId,
        parrainCode : uuidv4()

    });
    
    const handleClick = (e) => {
        axios.post('http://localhost/Project1/webProject/backend/routers/ParrainApi.php?action=register', parrain)
            .then(response => {
                console.log(response.data);
                if (response.data.status === 201) {
                    alert(response.data.message);
                }
            })
            .catch(error => {
                console.error('There was an error' , error);
            })
    };

    return (
        <div className="container-fluid d-flex justify-content-center my-5">
            <button className="btn btn-primary w-50" style={{backgroundColor:'white', color:'#CFBD97', border:'none'}} onClick={handleClick}>Générer</button>
        </div>
    );
}

export default ParrainBtn