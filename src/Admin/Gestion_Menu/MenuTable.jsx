import { useState, useEffect } from "react";
import axios from "axios";

function MenuTable () {
    const [table, setTable] = useState([]);
    let currentDate = new Date().toJSON().slice(0, 10);

    const RemoveFromCart = (index, Id_plat) => {
        const updatedCart = table.filter((_, i) => i !== index);
        setTable(updatedCart);

        axios.post('http://localhost/Project1/webProject/backend/routers/MenuApi.php?action=deleteplat', {plateid : Id_plat})
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
        axios.post('http://localhost/Project1/webProject/backend/routers/MenuApi.php?action=getmenu', {menudate : currentDate})
            .then(response => {
                    if(response.statusText === "OK" && response.data.menus) {
                        setTable(response.data.menus);
                        console.log(response.data.menus);
                    }
                    console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return(
        <div className="container-fluid mt-5 mb-5">
            <h2 className="text-center text-white fw-bold">Menu du Jour</h2>
            <div className="container-fluid mt-5">
                <table className="w-100 bg-black">
                    <thead className="border-bottom text-black" style={{backgroundColor:'#CFBD97'}}>
                        <tr className="text-center">
                            <th className="py-3">Nom du plat</th>
                            <th>Description </th>
                            <th>Prix du plat</th>
                            <th>Retirer Le plat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table.map((item, index) => (
                            <tr key={index} className="border-bottom text-center text-white">
                                <td>{item.platename}</td>
                                <td>{item.platedescription}</td>
                                <td>{item.platprice}FCFA</td>
                                <td className="py-3"><button className="btn btn-danger" onClick={() => RemoveFromCart(index, item.plateid)}>Supprimer</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MenuTable