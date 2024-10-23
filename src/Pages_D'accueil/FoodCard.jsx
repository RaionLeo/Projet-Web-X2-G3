import { useNavigate } from "react-router-dom";

function FoodCard (props) {

    const navigate = useNavigate();

    const goToClientMenu = () => {
        navigate('/MenuEtudiant');
    }

    const styleGoldenButton = {
        backgroundColor : '#CFBD97',
        color : 'white',
        border : 'none',
    }
    const styleWhite = {
        color : 'white'
    }
    const styleBorderGold = {
        borderColor : '#CFBD97',
    }

    return (
        <div className="col">
            <div className="card" style={styleBorderGold}>
                <img src={props.TopImage} className="card-image-top"/>
                <div className="card-body bg-black">
                    <div className="card-title fs-4 fw-bold mt-3" style={styleWhite}>{props.Title}</div>
                    <div className="card-text fw-lighter mt-3" style={styleWhite}>{props.Text}</div>
                    <div className="row mt-3 mb-3">
                        <div className="col text-center">
                            <a onClick={goToClientMenu} className="btn btn-secondary p-3" style={styleGoldenButton}>Voir Le Menu</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoodCard