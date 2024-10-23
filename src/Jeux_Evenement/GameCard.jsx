import { useNavigate } from "react-router-dom";

function GameCard () {

    const navigate = useNavigate();

    const goToQuiz = () => {
        navigate('/Quiz');
    }

    const styleGolden = {color: '#CFBD97'}
    const styleWhite = {
        color : 'white',
    }

    return (
        <div className="container text-center mb-5">
            <h1 className="d-inline-block my-5" style={styleWhite}>Mini <h1 style={styleGolden} className="d-inline-block"> Jeux</h1></h1>
            <div className="card">
                <div className="card-body">
                    <div className="card-title fs-1 my-3" style={{color:'#CFBD97'}}>QUIZ</div>
                    <div className="card-text fs-5 my-3">Participez au quiz du jour!</div>
                    <button className="btn btn-primary w-50 my-3" style={{backgroundColor:'#CFBD97', color:'white', border:'none'}} onClick={goToQuiz}>Jouer</button>
                </div>
            </div>
        </div>
    );
}

export default GameCard