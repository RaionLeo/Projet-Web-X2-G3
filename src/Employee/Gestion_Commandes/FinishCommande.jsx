import React, { useState } from "react" ;
import { useLocation } from "react-router-dom";
import axios from 'axios';

function FinishCommande () {

    const [commandeid, setCommandeid] = useState('');
    const [confirm, setConfirm] = useState(false)

    const handleChange = (e) => {
        setCommandeid(e.target.value);
    };

    const handleconfirm = () => {
        setConfirm(true)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(confirm)
        
        axios.post('http://localhost/Project1/webProject/backend/routers/CommandeApi.php?action=update', {
            commandeId : commandeid,
            commandeConfirm: confirm
        })
        .then(response => {
            if (response.data.status === 201) {
                alert(response.data.message);
            }
        })
        .catch(error => {
            console.error('Error updating points:', error);
        });
    };

    return(
        <div className="container-fluid p-5 col-12 col-md-8 my-5"  style={{border:'1px solid #CFBD97'}}>
            <h1 className="text-center text-secondary"><span style={{color:'#CFBD97'}}>Confirmer </span>Une <span style={{color:'#CFBD97'}}>Livraison</span></h1>
            <div className="container-fluid">
                <form className="mt-5" onSubmit={handleSubmit}>
                    <label className="form-label text-secondary">Id du plat</label>
                    <input className="form-control mt-3"
                        type="text"
                        name="commandeid"
                        placeholder="ID commande a confirmer"
                        value={commandeid}
                        onChange={handleChange}
                        required/>
                    <div className="container text-center">
                        <button className="btn btn-primary my-5 p-3 w-50 " style={{backgroundColor:'#CFBD97', border:'none'}} onClick={handleconfirm}>Effectué</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FinishCommande