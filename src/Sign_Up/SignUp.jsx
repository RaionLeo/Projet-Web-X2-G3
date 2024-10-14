import React, {useState} from "react" ;
import logo from '../assets/logo.png'

// const registerForm = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: "",
//         phone: "",
//     });
// };
// const handlechange = (e) => {
//     setFormData({
//         ...formData,
//         [e.target.name]: e.target.value,
//     });
// };


// const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
// };

// <form onSubmit="{handleSubmit}">
// <h2>Register</h2>

// <div className="form-group">
//         <input 
//         type="text"
//         name="name"
//         placeholder="Name"
//         value={formData.name}
//         onChange={handleChange}
//         required 
//         />
// </div>

function SignUp () {

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
                <p className="fs-1 fw-bold mt-5 mb-3 text-center">Register</p>
                <form className="mt-5">
                    <label className="form-label">Name</label>
                    <input className="form-control mt-3" type="text" placeholder="Nom complet" required/>
                    <label className="form-label mt-3">E-mail</label>
                    <input className="form-control mt-3" type="email" placeholder="Entrez votre email" required/>
                    <label className="form-label mt-3">Password</label>
                    <input className="form-control mt-3" type="password" placeholder="Entrez votre mot de passe" required/>
                    <label className="form-label mt-3">Phone</label>
                    <input className="form-control mt-3" type="password" placeholder="Entrez votre Numéro de Téléphone" required/>
                    <div className="container text-center">
                        <button className="btn btn-primary my-5 px-5 fw-bold" style={styleGoldenButton}>Sign Up</button>
                        <a href="#" style={{color : 'white'}}>Already have an account? Login here</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp