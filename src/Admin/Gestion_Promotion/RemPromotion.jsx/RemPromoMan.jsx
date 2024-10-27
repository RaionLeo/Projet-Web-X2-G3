import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RemPromoMan () {
    const [table, setTable] = useState([]);
    let currentDate = new Date().toJSON().slice(0, 10);

    const RemoveFromCart = (index, Id_promo) => {
        const updatedCart = table.filter((_, i) => i !== index);
        setTable(updatedCart);

        axios.post('http://localhost/Project1/webProject/backend/routers/PromoApi.php?action=delete', {promotionid : Id_promo})
            .then(response => {
                    console.log(response.data);
                    if (response.data.status === 201) {
                        alert(response.data.message);
                    }
            })
            .catch(error => {
                console.error('Error deleting data:', error);
            });
    }
    
    useEffect(() => {
        axios.post('http://localhost/Project1/webProject/backend/routers/PromoApi.php?action=promolist', {promotiondate : currentDate})
            .then(response => {
                    if(response.statusText === "OK" && response.data.promotions) {
                        setTable(response.data.promotions);
                        console.log(response.data.promotions);
                    }
                    console.log(response);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const navigate = useNavigate();

    const goToTransPromo = () => {
        navigate('/PromoTransition')
    }

    return(
        <div className="container-fluid mt-5 mb-5 bg-black"> 
            <div className="container-fluid w-50">
                <h2 className="text-center text-white fw-bold p-3" style={{borderBottom:'2px solid #CFBD97'}}>Delete Promotions</h2>
            </div>
            <div className="container-fluid mt-5">
                <table className="w-100 bg-black">
                    <thead className="border-bottom text-black" style={{backgroundColor:'#CFBD97'}}>
                        <tr className="text-center">
                            <th>Id de promotion</th>
                            <th className="py-3">Date Debut</th>
                            <th>Date fin </th>
                            <th>Taux Reduction</th>
                            <th>Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table.map((item, index) => (
                            <tr key={index} className="border-bottom text-center text-white">
                                <td>{item.promotionid}</td>
                                <td>{item.promotionstart}</td>
                                <td>{item.promotionend}</td>
                                <td>{item.promotionrate}%</td>
                                <td className="py-3"><button className="btn btn-danger" onClick={() => RemoveFromCart(index, item.promotionid)}>Supprimer</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="container-fluid col-12 col-md-6 mt-5">
                <button className="btn btn-primary p-3 w-100 mb-5 bg-black" style={{border:'1px solid #CFBD97'}} onClick={goToTransPromo}>Valider</button>
            </div>
        </div>
    );
}

export default RemPromoMan