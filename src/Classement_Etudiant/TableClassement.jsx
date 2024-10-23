import { useState, useEffect } from "react";
import axios from "axios";

function TableClassement () {

    const [classement, setClassement] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost/Project1/webProject/backend/routers/ClassementApi.php?action=getclassement')
            .then(response => {
                    if(response.statusText === "OK" && response.data.classement) {
                        setClassement(response.data.classement);
                        console.log(response.data.classement);
                    }
                    console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return(
        <div className="container-fluid">
            <h1 className="text-center text-white fw-bold">LeaderBoard</h1>
            <div className="container-fluid mt-5">
                <table className="w-100 bg-white">
                    <thead className="border-bottom text-white" style={{backgroundColor:'#CFBD97'}}>
                        <tr className="text-center">
                            <th>Rang</th>
                            <th>Nom du client</th>
                            <th>Nombres total de commandes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classement.map((item, index) => (
                            <tr key={index} className="border-bottom text-center">
                                <td>{index+1}</td>
                                <td>{item.clientname}</td>
                                <td>{item.totalcommande}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TableClassement