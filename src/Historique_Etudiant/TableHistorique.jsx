import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

function TableHistorique () {

    const [history, setHistory] = useState([]);
    const [cookies] = useCookies(['clientId', 'clientName']);
    const [total, setTotal] = useState(0)

    const calcTotal = (commandes) => {
        setTotal(commandes.reduce((total,commande) => total + (commande.commandetotal), 0));
    }
    
    useEffect(() => {
        axios.post('http://localhost/Project1/webProject/backend/routers/CommandeApi.php?action=getcommande', {clientid : cookies.clientId})
            .then(response => {
                    if(response.statusText === "OK" && response.data.history) {
                        setHistory(response.data.history);
                        console.log(response.data.history);
                    }
                    console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        if (history.length > 0) {
            calcTotal(history);
        }
    }, [history]);

    return(
        <div className="container-fluid">
            <h1 className="text-center text-white fw-bold"><span style={{color:'#CFBD97'}}>Historique </span> des Commandes</h1>
            <div className="container-fluid mt-5">
                <table className="w-100 bg-black">
                    <thead className="border-bottom text-white" style={{backgroundColor:'#CFBD97'}}>
                        <tr className="text-center">
                            <th className="py-3">Id Commande</th>
                            <th>Prix Total</th>
                            <th>Points Gagnés</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((item, index) => (
                            <tr key={index} className="border-bottom text-center text-secondary">
                                <td className="text-start">{item.commandeid}</td>
                                <td className="py-3">{item.commandetotal} FCFA</td>
                                <td>{item.commandepoints}</td>
                                <td>{item.commandedate}</td>
                            </tr>
                        ))}
                    </tbody>
                    <p className="text-white mt-5">Total des paiements : {total} FCFA</p>
                </table>
            </div>
        </div>
    );
}

export default TableHistorique