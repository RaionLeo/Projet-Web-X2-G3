import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function GerantNavbar() {

    const [, , removeCookie] = useCookies(['userId', 'userName']);

    const styleGoldenButton = {
        backgroundColor : '#CFBD97',
        color : 'black',
        border : 'none',
    }

    const navigate = useNavigate();

    const goToGerantHome = () => {
        navigate('/GerantHome')
    }

    const goToCommandeMan = () => {
        navigate('/GerManCom')
    }

    const goToEmployeeMan = () => {
        navigate('/GerManEmp')
    }

    const Logout = () => {
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
                                <a className="nav-link fs-5" onClick={goToGerantHome}>Accueil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5" onClick={Logout}>Deconnexion</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5" onClick={goToEmployeeMan}>Gestion Employés</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><button className="btn btn-warning" style={styleGoldenButton} onClick={goToCommandeMan}>Gestion des Commandes</button></a>
                            </li>
                        </ul>
                    </div>
                </ul>
            </div>
        </nav>
    );
}

export default GerantNavbar