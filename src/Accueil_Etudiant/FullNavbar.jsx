import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function FullNavbar() {

    const styleGoldenButton = {
        backgroundColor : '#CFBD97',
        color : 'black',
        border : 'none',
    }

    // const navigate = useNavigate();

    // const goToHome = () => {
    //     navigate('/');
    // }
    // const goToCER = () => {
    //     navigate('/Fidelite');
    // }
    // const goToFav = () => {
    //     navigate('/Historiaue');
    // }
    // const goToGestion = () => {
    //     navigate('/Classement');
    // }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-black mb-5">
            <div className="container-fluid col-md-2">
                <a href="#" className="navbar-brand">
                    <img src={logo} width={'100px'}/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle Navigation" aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse col-md-10" id="navbarNav">
                <ul className="navbar-nav">
                    <div className="container">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link fs-5">Accueil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5">Fidélité</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5">Historique</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5">Classement</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5">Deconnexion</a>
                            </li>
                        </ul>
                    </div>
                    <li className="nav-item">
                        <a className="nav-link"><button className="btn btn-warning px-5" style={styleGoldenButton}>Menu</button></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default FullNavbar