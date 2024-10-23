import FidelityBtn from "./FidelityBtn";
import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

function Fidelity () {

    const [parrainCode, setParrainCode] = useState('');
    const [parrainId, setParrainId] = useState('');
    const [fParrain, setFParrain] = useState('');

    const [cookies] = useCookies(['clientId', 'clientName']);

    const handleChange = (e) => {
        setParrainCode(e.target.value);
    }

    useEffect(() => {
        axios.post('http://localhost/Project1/webProject/backend/routers/FilleulApi.php?action=fetchparrainid', {filleulid : cookies.clientId})
            .then(response => {
                    if(response.statusText === "OK" && response.data.parrain) {
                        setFParrain(response.data.parrain);
                    }else {
                        setFParrain([]);
                    }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);


    useEffect(() => {
        axios.post('http://localhost/Project1/webProject/backend/routers/ParrainApi.php?action=fetchparrainId', {parraincode : parrainCode})
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
    }, [parrainCode]);

    return (
        <div className="col-12 col-md-5 bg-white mx-0 mx-md-5 my-5">
            <h1 className="mb-5 fw-bold text-center" style={{color:'#CFBD97'}}>Fidélité</h1>
            <hr className="mb-5"/>
            <p className="mb-5 text-center fw-bold">Plus vous commandez plus vous gagnerez</p>
            <p className="mb-5 text-center">Augmentez vos points de fidélité en commandant d'avantage et
                accumulez des point pour débloquer des récompenses
            </p>
            <div className="container-fluid">
                {fParrain.length === 0 ? (
                    <div className="container-fluid">
                        <div className="container-fluid d-flex justify-content-center">
                            <input className="form-control w-75" type='text' placeholder="Entrer le code Parrain" value={parrainCode} onChange={handleChange}/>
                        </div>
                        <FidelityBtn idParrain={parrainId}/>
                        {console.log(parrainCode)}
                        {console.log(parrainId)}
                    </div>
                ):(
                    <div className="container-fluid">
                        <p className="mb-4 text-center">Votre Parrain est l'utilisateur :</p>
                        <p className="mb-5 text-center" style={{backgroundColor:'#CFBD97', color:'white'}}>{fParrain.parrainid}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Fidelity