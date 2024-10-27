import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

function AdminSignIn () {

    const navigate = useNavigate();

    const goToAdminHome = () => {
        navigate('/AdminHome');
    }

    const [password, setPassword] = useState('');
    const [id, setId] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        axios.post('http://localhost/Project1/webProject/backend/routers/AdminApi.php?action=login', {id, password})
            .then(response =>{
                console.log(response.data);
                if(response.data.status === 'Success') {
                    alert('Login successful');
                    goToAdminHome();
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
    }

    return (
        <div className="container-fluid bg-black">
            <div className="container col-12 col-md-6 px-5" style={contstyle}>
                <p className="fs-1 fw-bold mt-5 mb-3 text-center">Admin Login</p>
                <form className="mt-5 text-center" onSubmit={handleLogin}>
                    <input value={id} onChange={(e) => setId(e.target.value)} className="form-control mt-3" type="text" placeholder="Entrez votre ID administrateur" required/>
                    <label className="form-label mt-5 fw-bold">Code Secret Admin</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="form-control mt-3" type="password" required/>
                    <div className="container text-center">
                        <button className="btn btn-primary my-5 px-5 fw-bold w-100 w-md-50" style={styleGoldenButton}>Valider</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AdminSignIn