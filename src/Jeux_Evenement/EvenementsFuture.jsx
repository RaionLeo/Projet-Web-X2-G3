import EventCard from "./EventCard";
import { useState, useEffect } from "react";
import axios from "axios";

function EvenementFuture () {
    const [event, setEvent] = useState([]);
    let currentDate = new Date().toJSON().slice(0, 10);


    useEffect(() => {
        axios.post('http://localhost/Project1/webProject/backend/routers/FutureEventApi.php?action=futureEvents', {eventdate : currentDate})
            .then(response => {
                    if(response.statusText === "OK" && response.data.events) {
                        setEvent(response.data.events);
                        console.log(response.data.events);
                    }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const styleGolden = {color: '#CFBD97'}
    const styleWhite = {
        color : 'white',
    }

    return (
        <div className="container-fluid mb-3">
            <h1 className="d-inline-block my-5" style={styleWhite}>Evenement a <h1 style={styleGolden} className="d-inline-block">Venir</h1></h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                {event.length > 0 ? (
                    event.map((eventCard, index) => (
                    <EventCard key={index} title={eventCard.eventname} date={eventCard.eventdate} text={eventCard.eventdescription}
                    display='d-none'/>
                ))
                ) : (
                    <p>Il n'y a pas d'évenements a venir</p>
                )}
            </div>
        </div>
    );
}

export default EvenementFuture