import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4} from "uuid";

function Panier ({cartItems, RemoveFromCart, TotalCost}) {
    const [clientPts, setClientPts] = useState(null); // Set initial to null to avoid undefined errors
    const [newTotal, setNewTotal] = useState(1);
    const [cookies] = useCookies(['clientId', 'clientName']);
    
    useEffect(() => {
        axios.post('http://localhost/Project1/webProject/backend/routers/ClientApi.php?action=getpoints', {clientid : cookies.clientId})
            .then(response => {
                if(response.status === 200 && response.data.points) {
                    setClientPts(response.data.points); // Correctly set points
                } else {
                    setClientPts({ fidelitypoints: 0 }); // Set default if no points
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [cookies.clientId]); // Add dependencies to rerun on change

    const deductPoints = () => {
        if (!clientPts || clientPts.fidelitypoints === 0) {
            alert("No points available");
            return;
        }
        const pointsToMoney = (clientPts.fidelitypoints / 15) * 1000; // Convert points to money
        let updatedPoints = clientPts.fidelitypoints;
        let updatedTotal = TotalCost + 300;

        if (pointsToMoney < updatedTotal) {
            updatedTotal -= pointsToMoney;
            updatedPoints = 0;
        } else {
            updatedPoints -= ((updatedTotal / 1000) * 15);
            updatedTotal = 0;
        }

        setNewTotal(updatedTotal); 
        setClientPts({ ...clientPts, fidelitypoints: updatedPoints });

        axios.post('http://localhost/Project1/webProject/backend/routers/ClientApi.php?action=changepoints', {
            clientId: cookies.clientId,
            fidelityPoints: Math.round(updatedPoints)
        })
        .then(response => {
            if (response.data.status === 201) {
                console.log(response.data.message);
            }
        })
        .catch(error => {
            console.error('Error updating points:', error);
        });
    };

    const addpoints = (finalcost) => {
        axios.post('http://localhost/Project1/webProject/backend/routers/ClientApi.php?action=changepoints', {
            clientId: cookies.clientId,
            fidelityPoints: Math.round((finalcost/1000))
        })
        .then(response => {
            if (response.data.status === 201) {
                console.log(response.data.message);
            }
        })
        .catch(error => {
            console.error('Error updating points:', error);
        });
    }

    const navigate = useNavigate();

    const goToPayment = () => {
        
        const finalTotal = newTotal !== 1 ? newTotal : TotalCost;

        axios.post('http://localhost/Project1/webProject/backend/routers/CommandeApi.php?action=register', {
            commandeId : 'Commande' + uuidv4(),
            clientId : cookies.clientId,       
            commandeTotal : Math.floor(finalTotal),
            commandePoints : Math.round(finalTotal / 1000),
            commandeDate : new Date().toJSON().slice(0, 10),   
            commandeConfirm : 0
        })
        .then(response => {
            console.log(response);
            if (response.data.status === 201) {
                console.log(response.data.message);
            }
        })
        .catch(error => {
            console.error('Error updating points:', error);
        });

        addpoints(finalTotal);
        
        navigate('/Payment', { state: { total: Math.floor(finalTotal), cartstuff: cartItems } });
    };

    return (
        <div className="container-fluid bg-white">
            <table className="w-100">
                <thead className="border-bottom">
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item, index) => (
                        <tr key={index} className="border-bottom">
                            <td>{item.title}</td>
                            <td>{item.price} FCFA</td>
                            <td>{item.quantity}</td>
                            <td><button className="btn btn-danger" onClick={() => RemoveFromCart(index)}>-</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="container-fluid mt-5">
                <h1>Card Total</h1>
                <p>Sum Total: {TotalCost} FCFA</p>
                <p>Delivery Fee: 300 FCFA</p>
                <p>Total: {newTotal !== 1 ? newTotal : TotalCost} FCFA</p>
                {TotalCost > 300 && (
                    <div>
                        <button className="btn btn-primary mb-3 mx-2" style={{backgroundColor:'#CFBD97',border:'none'}} onClick={goToPayment}>
                            Commander
                        </button>
                        <button className="btn btn-primary mb-3" onClick={deductPoints}>
                            Utilisez les Points de Fidélité
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Panier;