import { useState, useEffect } from "react";
import axios from "axios";

function EventList () {

    const [events, setEvents] = useState([]);
    let currentDate = new Date().toJSON().slice(0, 10);
    
    useEffect(() => {
        axios.post('http://localhost/Project1/webProject/backend/routers/EventApi.php?action=read', {eventdate : currentDate})
            .then(response => {
                    if(response.statusText === "OK" && response.data.events) {
                        setEvents(response.data.events);
                        console.log(response.data.events);
                    }
                    console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const RemoveFromCart = (index, Id) => {
        const updatedCart = events.filter((_, i) => i !== index);
        setEvents(updatedCart);

        axios.post('http://localhost/Project1/webProject/backend/routers/EventApi.php?action=delete', {eventid : Id})
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

    return(
        <div className="container-fluid">
            <div className="container-fluid w-50">
            <h2 className="text-center text-white fw-bold my-5">Evenements</h2>
            </div>
            <div className="container-fluid mt-5">
                <table className="w-100 bg-black">
                    <thead className="border-bottom text-white" style={{backgroundColor:'#CFBD97'}}>
                        <tr className="text-center">
                            <th className="py-3">Nom de L'Evenement</th>
                            <th>Description</th>
                            <th>Date de L'Evenement</th>
                            <th>Retirer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map((item, index) => (
                            <tr key={index} className="border-bottom text-center text-white">
                                <td className="py-3">{item.eventname}</td>
                                <td>{item.eventdescription}</td>
                                <td>{item.eventdate}</td>
                                <td className="py-3"><button className="btn btn-danger" onClick={() => RemoveFromCart(index, item.eventid)}>Supprimer</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default EventList