import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import EmployeeMan from "../Gestion_Employee/EmployeeMan";

function AdminNavbar() {

    const [, , removeCookie] = useCookies(['userId', 'userName']);

    const styleGoldenButton = {
        backgroundColor : '#CFBD97',
        color : 'black',
        border : 'none',
    }

    const navigate = useNavigate();

    const goToAdminHome = () => {
        navigate('/AdminHome')
    }

    const goToEmployeeMan = () => {
        navigate('/EmployeeMan')
    }

    const goToTransMenu = () => {
        navigate('/MenuTransition')
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
                                <a className="nav-link fs-5" onClick={goToAdminHome}>Accueil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5" onClick={Logout}>Deconnexion</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5" onClick={goToEmployeeMan}>Gestion Employés</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"><button className="btn btn-warning" style={styleGoldenButton} onClick={goToTransMenu}>Gestion des Menus</button></a>
                            </li>
                        </ul>
                    </div>
                </ul>
            </div>
        </nav>
    );
}

export default AdminNavbar