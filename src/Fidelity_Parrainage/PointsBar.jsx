import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import axios from "axios";

function PointsBar () {
    const [clientPts, setClientPts] = useState([]);
    const [cookies] = useCookies(['clientId', 'clientName']);

    useEffect(() => {
        axios.post('http://localhost/Project1/webProject/backend/routers/ClientApi.php?action=getpoints', {clientid : cookies.clientId})
            .then(response => {
                    if(response.statusText === "OK" && response.data.points) {
                        setClientPts(response.data.points);
                    }else {
                        setClientPts([]);
                    }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="container-fluid bg-dark d-flex justify-content-between p-3 col-12 mb-5">
            <p className="fs-2 fw-bold text-white text-start">Fidelity Points :</p>
            <p className="fs-2 fw-bold text-white text-end">{clientPts.fidelitypoints}</p>
        </div>
    );
}

export default PointsBar

