import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';

function SignIn () {

    const navigate = useNavigate();

    const goToSignUp = () => {
        navigate('/SignUp');
    }
    const goToClientHome = () => {
        navigate('/ClientHome');
    }

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[cookies, setCookie] = useCookies(['client']);

    const handleLogin = (e) => {
        e.preventDefault();

        axios.post('http://localhost/Project1/webProject/backend/routers/ClientApi.php?action=login', {email, password})
            .then(response =>{
                console.log(response.data);
                if(response.data.status === 'Success') {
                    setCookie('clientId', response.data.client_id, {path: '/', sameSite : 'None', secure: true});
                    setCookie('clientName', response.data.client_name, {path : '/', sameSite: 'None', secure: true});
                    alert('Login successful');
                    goToClientHome();
                }
                else {alert('login failed');}
            })
            .catch(error =>{
                console.error('There was an error during login:', error);
            })
    }

    const contstyle = {
        backgroundColor : 'rgba(207, 189, 151, 0.15)',
        color : 'white',
        border : '1px hidden',
        borderRadius : '20px',
        paddingBottom : '10px'
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
            <div className="container col-12 col-md-6 px-5" style={contstyle}>
                <p className="fs-1 fw-bold mt-5 mb-3 text-center">Login</p>
                <form className="mt-5" onSubmit={handleLogin}>
                    <label className="form-label mt-3">E-mail</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control mt-3" type="email" placeholder="Entrez votre email" required/>
                    <label className="form-label mt-3">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="form-control mt-3" type="password" placeholder="Entrez votre mot de passe" required/>
                    <div className="container text-end mt-3">
                        <a href="#" style={{color : 'white', textDecoration : 'none'}}>Forgot Password ?</a>
                    </div>
                    <div className="container text-center">
                        <button className="btn btn-primary my-5 px-5 fw-bold" style={styleGoldenButton}>Sign In</button>
                        <a onClick={goToSignUp} href="#" style={{color : 'white'}}>Create a new account? Click here</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignIn