import { useState, useEffect } from "react";
import axios from "axios";

function EmployeeTable () {

    const [table, setTable] = useState([]);

    const RemoveFromCart = (index, Id) => {
        const updatedCart = table.filter((_, i) => i !== index);
        setTable(updatedCart);

        axios.post('http://localhost/Project1/webProject/backend/routers/EmployeeApi.php?action=delete', {employeeid : Id})
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
        axios.get('http://localhost/Project1/webProject/backend/routers/EmployeeApi.php?action=employeelist')
            .then(response => {
                    if(response.statusText === "OK" && response.data.employee) {
                        setTable(response.data.employee);
                        console.log(response.data.employee);
                    }
                    console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return(
        <div className="container-fluid mt-5 mb-5">
            <h1 className="text-center text-white fw-bold">Liste des Employés</h1>
            <div className="container-fluid mt-5">
                <table className="w-100 bg-black">
                    <thead className="border-bottom text-black" style={{backgroundColor:'#CFBD97'}}>
                        <tr className="text-center">
                            <th className="py-3">Nom de L'employé</th>
                            <th>Email </th>
                            <th>Date d'enregistrement</th>
                            <th>Retirer L'employé</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table.map((item, index) => (
                            <tr key={index} className="border-bottom text-center text-white">
                                <td>{item.employeename}</td>
                                <td>{item.employeeemail}</td>
                                <td>{item.registrydate}</td>
                                <td className="py-3"><button className="btn btn-danger" onClick={() => RemoveFromCart(index, item.employeeid)}>Supprimer</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default EmployeeTable