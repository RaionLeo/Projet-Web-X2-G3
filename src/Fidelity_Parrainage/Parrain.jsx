import ParrainBtn from "./ParrainBtn";
import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

function Parrain () {

    const [parrainId, setParrainId] = useState([]);
    const [cookies] = useCookies(['clientId', 'clientName']);

    useEffect(() => {
        axios.post('http://localhost/Project1/webProject/backend/routers/ParrainApi.php?action=fetchparrainCode', {parrainid : cookies.clientId})
            .then(response => {
                    if(response.statusText === "OK" && response.data.parrain) {
                        setParrainId(response.data.parrain);
                    }else {
                        setParrainId([]);
                    }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="col-12 col-md-5 mx-0 mx-md-2 my-5" style={{backgroundColor:'#CFBD97'}}>
            <h1 className="mb-5 fw-bold text-center" style={{color:'white'}}>Parrainage</h1>
            <hr className="mb-5"/>
            <p className="mb-5 text-center fw-bold">Devenez le meilleur parrain!</p>
            <p className="mb-5 text-center">Rejoignez notre programme de parrainage en partageant votre code
                de parrainage pour des commandes et accumulez des points pour débloquer des recompenses
            </p>
            {parrainId.length === 0 ? (
                <div className="container-fluid">
                    <div className="container-fluid d-flex justify-content-center">
                        <p>Génerez votre code parrain</p>
                    </div>
                    <ParrainBtn/>
                </div>
            ):(
                <div className="container-fluid">
                    <p className="mb-4 text-center">Voici votre code Parrain</p>
                    <p className="mb-5 text-center bg-white">{parrainId.parraincode}</p>
                </div>
            )}
        </div>
    );
}

export default Parrain