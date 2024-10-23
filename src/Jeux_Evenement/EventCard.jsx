import { useNavigate } from "react-router-dom"

function EventCard (props) {

    const navigate = useNavigate();

    const goToEvents = () => {
        navigate('/Evenements');
    }

    const styleGoldenButton = {
        backgroundColor : '#CFBD97',
        color : 'white',
        border : '1px hidden',
        borderRadius : '10px',
        textAlign : 'center',
        padding : '10px',
        marginTop : '30px'

    }
    return (
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <div className="card-title fs-1" style={{color:'#CFBD97'}}>{props.title}</div>
                    <div className="card-text" style={{color:'#CFBD97'}}>{props.date}</div>
                    <div className="card-text fs-5">{props.text}</div>
                    <button className={props.display} style={styleGoldenButton} onClick={goToEvents}>Voir les Evenements</button>
                </div>
            </div>
        </div>
    );
}

export default EventCard