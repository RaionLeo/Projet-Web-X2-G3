import { useState, useEffect } from "react";
import axios from "axios";

function PlateList () {

    const [plates, setPlates] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost/Project1/webProject/backend/routers/PlateApi.php?action=read')
            .then(response => {
                    if(response.statusText === "OK" && response.data.plates) {
                        setPlates(response.data.plates);
                        console.log(response.data.plates);
                    }
                    console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return(
        <div className="container-fluid">
            <div className="container-fluid w-50">
            <h2 className="text-center text-white fw-bold my-5">Plats Disponibles</h2>
            </div>
            <div className="container-fluid mt-5">
                <table className="w-100 bg-black">
                    <thead className="border-bottom text-white" style={{backgroundColor:'#CFBD97'}}>
                        <tr className="text-center">
                            <th className="py-3">ID du Plat</th>
                            <th>Nom du plat</th>
                            <th>Prix du plat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plates.map((item, index) => (
                            <tr key={index} className="border-bottom text-center text-secondary">
                                <td className="py-3">{item.plateid}</td>
                                <td>{item.platename}</td>
                                <td>{item.platprice}FCFA</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PlateList