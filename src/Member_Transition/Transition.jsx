import logo from '../assets/logo.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Transition () {

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

    const [selectVal, setSelectVal] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setSelectVal(e.target.value);
        console.log(selectVal)
    }

    const handleSubmit = (e) => {
        if (selectVal === 'Employee') {
            
            navigate('/EmployeeSignIn')
        }
        if (selectVal === 'Gerant') {
            navigate('/GerantSignIn')
        }
        if (selectVal === 'Admin') {
            navigate('/AdminSignIn')
        }
    }

    return (
        <div className="container-fluid bg-black">
            <img src={logo} width={'100px'}/>
            <div className="container col-12 col-md-6 px-5" style={contstyle}>
                <p className="fs-1 fw-bold mt-5 mb-3 text-center">Qui êtes vous ?</p>
                <form className="mt-5" onSubmit={handleSubmit}>
                    <select className='form-select' onChange={handleChange} required>
                        <option value='Employee'>Employé</option>
                        <option value='Gerant'>Gérant</option>
                        <option value='Admin'>Administrateur</option>
                    </select>
                    <button className='btn btn-primary mt-5' style={styleGoldenButton}>Confirmer</button>
                </form>
            </div>
        </div>
    );
}

export default Transition