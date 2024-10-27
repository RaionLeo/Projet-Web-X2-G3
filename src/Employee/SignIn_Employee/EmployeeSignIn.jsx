import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';

function EmployeeSignIn () {

    const navigate = useNavigate();

    const goToEmployeeHome = () => {
        navigate('/EmployeeHome');
    }

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[cookies, setCookie] = useCookies(['employee']);

    const handleLogin = (e) => {
        e.preventDefault();

        axios.post('http://localhost/Project1/webProject/backend/routers/EmployeeApi.php?action=login', {email, password})
            .then(response =>{
                console.log(response.data);
                if(response.data.status === 'Success') {
                    setCookie('employeeId', response.data.employee_id, {path: '/', sameSite : 'None', secure: true});
                    setCookie('employeeName', response.data.employee_name, {path : '/', sameSite: 'None', secure: true});
                    alert('Login successful');
                    goToEmployeeHome();
                }
                else {alert('login failed');}
            })
            .catch(error =>{
                console.error('There was an error during login:', error);
            })
    }

    const contstyle = {
        backgroundColor : '#000000',
        color : 'white',
        border : '1px solid #CFBD97',
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
            <div className="container col-12 col-md-8 px-5" style={contstyle}>
                <p className="fs-1 fw-bold mt-5 mb-3 text-center">Login Employé</p>
                <form className="mt-5" onSubmit={handleLogin}>
                    <label className="form-label mt-3">E-mail</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control mt-3" type="email" placeholder="Entrez votre email" required/>
                    <label className="form-label mt-3">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="form-control mt-3" type="password" placeholder="Entrez votre mot de passe" required/>
                    <div className="container text-center">
                        <button className="btn btn-primary my-5 px-5 fw-bold" style={styleGoldenButton}>Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EmployeeSignIn