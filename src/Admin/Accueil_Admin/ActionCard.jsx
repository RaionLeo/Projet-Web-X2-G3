import { useNavigate } from "react-router-dom"

function ActionCard (props) {

    const navigate = useNavigate();

    const goToAction = () => {
        navigate(props.Location);
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
            <div className="card bg-black" style={{border:'1px solid #CFBD97'}}>
                <div className="card-body">
                    <div className="card-title fs-1" style={{color:'#CFBD97'}}>{props.title}</div>
                    <div className="card-text fs-5 text-white">{props.text}</div>
                    <div className="container-fluid d-flex justify-content-center">
                        <button className={props.display} style={styleGoldenButton} onClick={goToAction}>{props.buttontext}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActionCard