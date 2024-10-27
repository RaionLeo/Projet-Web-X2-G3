import React, { useState, useEffect } from "react" ;
import axios from 'axios';
import { v4 as uuidv4} from "uuid";

function AddEmployee () {

    let currentDate = new Date().toJSON().slice(0, 10);

    const [employee, setEmployee] = useState({
        employeeId : 'Employee' + uuidv4(),
        employeeName : '',
        employeeEmail : '',
        registryDate : currentDate,
        employeeSecret : ''
    });

    
    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost/Project1/webProject/backend/routers/EmployeeApi.php?action=register', employee)
            .then(response => {
                console.log(response.data);
                if (response.data.status === 201) {
                    alert(response.data.message);
                }
            })
            .catch(error => {
                console.error('There was an error' , error);
            })
    };

    return(
        <div className="container-fluid p-5 col-12 col-md-8"  style={{border:'1px solid #CFBD97'}}>
            <h1 className="text-center text-secondary"><span style={{color:'#CFBD97'}}>Ajouter </span>Un <span style={{color:'#CFBD97'}}> Employé</span></h1>
            <div className="container-fluid">
                <form className="mt-5" onSubmit={handleSubmit}>
                    <label className="form-label text-secondary">Name</label>
                    <input className="form-control mt-3"
                        type="text"
                        name="employeeName"
                        placeholder="Nom complet"
                        value={employee.employeeName}
                        onChange={handleChange}
                        required/>
                    <label className="form-label mt-3 text-secondary">E-mail</label>
                    <input className="form-control mt-3"
                        type="email"
                        name="employeeEmail"
                        placeholder="Entrez votre email"
                        value={employee.employeeEmail}
                        onChange={handleChange}
                        required/>
                    <label className="form-label mt-3 text-secondary">Password</label>
                    <input className="form-control mt-3"
                        type="password"
                        name="employeeSecret"
                        placeholder="Entrez votre mot de passe"
                        value={employee.employeeSecret}
                        onChange={handleChange}
                        required/>
                    <div className="container text-center">
                        <button className="btn btn-primary my-5 px-5 fw-bold" style={{backgroundColor:'#CFBD97', border:'none'}}>Ajouter</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddEmployee