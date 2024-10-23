import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function FullNavbar() {

    const [, , removeCookie] = useCookies(['userId', 'userName']);

    const styleGoldenButton = {
        backgroundColor : '#CFBD97',
        color : 'black',
        border : 'none',
    }

    const navigate = useNavigate();

    const goToClientHome = () => {
        navigate('/ClientHome')
    }

    const goToClientMenu = () => {
        navigate('/MenuEtudiant');
    }

    const goToFidelity = () => {
        navigate('/Fidelity');
    }

    const goToHistory = () => {
        navigate('/Historique');
    }

    const goToClassement = () => {
        navigate('/Classement');
    }

    const Logout = () => {
        removeCookie('userId');
        removeCookie('userName')
        alert("Vous êtes déconnecté!")
        navigate('/')
    }

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
            <div className="collapse navbar-collapse col-md-10 d-md-flex justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <div className="container">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link fs-5" onClick={goToClientHome}>Accueil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5" onClick={goToFidelity}>Fidélité</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5" onClick={goToHistory}>Historique</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5" onClick={goToClassement}>Classement</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5" onClick={Logout}>Deconnexion</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={goToClientMenu}><button className="btn btn-warning px-5" style={styleGoldenButton}>Menu</button></a>
                            </li>
                        </ul>
                    </div>
                </ul>
            </div>
        </nav>
    );
}

export default FullNavbar