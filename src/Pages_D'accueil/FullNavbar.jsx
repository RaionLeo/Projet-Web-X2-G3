import logo from "./assets/logo.png";
import { useNavigate } from "react-router-dom";

function FullNavbar() {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }
    const goToCER = () => {
        navigate('/CERs');
    }
    const goToFav = () => {
        navigate('/CERsFav');
    }
    const goToGestion = () => {
        navigate('/Gestion');
    }

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid col-md-3">
                <a href="#" className="navbar-brand">
                    <img src={logo}/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle Navigation" aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse col-md-9" id="navbarNav">
                <ul className="navbar-nav">
                    <div className="container">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link fs-5" onClick={goToHome}>Accueil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5" onClick={goToCER}>CERs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5" onClick={goToFav}>Mes CER Favoris</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5" onClick={goToGestion}>Gestion de CER</a>
                            </li>
                        </ul>
                    </div>
                    <li className="nav-item">
                        <a className="nav-link"><button className="btn btn-warning">Connexion</button></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar