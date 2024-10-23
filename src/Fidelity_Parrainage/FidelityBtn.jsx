import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import axios from "axios";

function FidelityBtn ({idParrain}) {

    const [cookies] = useCookies(['clientId', 'clientName']);

    const [filleul, setFilleul] = useState({
        filleulId: cookies.clientId,
        parrainId: ''
    });

    useEffect(() => {
        if (idParrain.parrainid) {
            setFilleul(prevState => ({
                ...prevState,
                parrainId: idParrain.parrainid
            }));
        }
    }, [idParrain]);
    
    const handleClick = (e) => {
        console.log(filleul.parrainId);
        console.log(idParrain.parrainid);
        if (filleul.filleulId !== filleul.parrainId) {
            axios.post('http://localhost/Project1/webProject/backend/routers/FilleulApi.php?action=register', filleul)
            .then(response => {
                console.log(response.data);
                if (response.data.status === 201) {
                    alert(response.data.message);
                }
            })
            .catch(error => {
                console.error('There was an error' , error);
            })
        }
    };

    return(
        <div className="container-fluid d-flex justify-content-center my-5">
            <button className="btn btn-primary w-50" style={{backgroundColor:'#CFBD97', color:'white', border:'none'}} onClick={handleClick}>Soumettre</button>
        </div>
    );
}

export default FidelityBtn