import { useState, useEffect } from "react";
import axios from "axios";

function CommandeTable () {

    const [commandes, setCommandes] = useState([]);
    let currentDate = new Date().toJSON().slice(0, 10);
    
    useEffect(() => {
        axios.post('http://localhost/Project1/webProject/backend/routers/CommandeApi.php?action=getunconfirmed',{commandedate : currentDate})
            .then(response => {
                    if(response.statusText === "OK" && response.data.commandes) {
                        setCommandes(response.data.commandes);
                        console.log(response.data.commades);
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
            <h2 className="text-center text-white fw-bold my-5">Livraisons a faire</h2>
            </div>
            <div className="container-fluid mt-5">
                <table className="w-100 bg-black">
                    <thead className="border-bottom text-white" style={{backgroundColor:'#CFBD97'}}>
                        <tr className="text-center">
                            <th className="py-3">ID Commande</th>
                            <th>ID client</th>
                            <th>Localisation</th>
                            <th>Prix total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {commandes.map((item, index) => (
                            <tr key={index} className="border-bottom text-center text-secondary">
                                <td className="py-3">{item.commandeid}</td>
                                <td >{item.clientid}</td>
                                <td>{item.clientlocation}</td>
                                <td>{item.commandetotal} FCFA</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CommandeTable