import React, {useState} from "react" ;
import axios from 'axios';
import logo from '../assets/logo.png'
import { v4 as uuidv4} from "uuid";
import { useNavigate } from "react-router-dom";



function SignUp () {

    const navigate = useNavigate();

    const goToSignIn = () => {
        navigate('/SignIn');
    }
    const goToClientHome = () => {
        navigate('/ClientHome')
    }

    let currentDate = new Date().toJSON().slice(0, 10);

    const [client, setClient] = useState({
        clientId : 'Client' + uuidv4(),
        clientName : '',
        clientEmail : '',
        clientTel : '',
        fidelityPoints : '0',
        registryDate : currentDate,
        accountState : 'activé',
        clientSecret : '',
        clientLocation : ''
    });

    
    const handleChange = (e) => {
        setClient({
            ...client,
            [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost/Project1/webProject/backend/routers/ClientApi.php?action=register', client)
            .then(response => {
                console.log(response.data);
                if (response.data.status === 201) {
                    alert(response.data.message);
                    goToSignIn();
                }
            })
            .catch(error => {
                console.error('There was an error' , error);
            })
    };
    // 'rgba(207, 189, 151, 0.15)'

    const contstyle = {
        backgroundColor : '#000000',
        color : 'white',
        border : '1px solid #CFBD97',
        borderRadius : '20px',
        padding : '10px'
    } 
    const styleGoldenButton = {
        backgroundColor : '#CFBD97',
        color : 'black',
        border : 'none',
        padding : '10px',
        width : '100%'
    }

    return (
        <div className="container-fluid bg-black">
            <img src={logo} width={'100px'}/>
            <div className="container col-12 col-md-8 px-5" style={contstyle}>
                <p className="fs-1 fw-bold mt-5 mb-3 text-center">Create Account</p>
                <form className="mt-5" onSubmit={handleSubmit}>
                    <label className="form-label">Name</label>
                    <input className="form-control mt-3"
                        type="text"
                        name="clientName"
                        placeholder="Nom complet"
                        value={client.clientName}
                        onChange={handleChange}
                        required/>
                    <label className="form-label mt-3">E-mail</label>
                    <input className="form-control mt-3"
                        type="email"
                        name="clientEmail"
                        placeholder="Entrez votre email"
                        value={client.clientEmail}
                        onChange={handleChange}
                        required/>
                    <label className="form-label mt-3">Password</label>
                    <input className="form-control mt-3"
                        type="password"
                        name="clientSecret"
                        placeholder="Entrez votre mot de passe"
                        value={client.clientSecret}
                        onChange={handleChange}
                        required/>
                    <label className="form-label mt-3">Phone</label>
                    <input className="form-control mt-3"
                        type="tel"
                        name="clientTel"
                        placeholder="Entrez votre Numéro de Téléphone"
                        value={client.clientTel}
                        onChange={handleChange}
                        required/>
                    <label className="form-label mt-3">Location</label>
                    <input className="form-control mt-3"
                        type="text"
                        name="clientLocation"
                        placeholder="Entrez votre point de livraison"
                        value={client.clientLocation}
                        onChange={handleChange}
                        required/>
                    <div className="container text-center">
                        <button className="btn btn-primary my-5 px-5 fw-bold" style={styleGoldenButton}>Sign Up</button>
                        <a onClick={goToSignIn} href="#" style={{color : 'white'}}>Already have an account? Login here</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp