import React, { useState } from "react" ;
import { useLocation } from "react-router-dom";
import axios from 'axios';

function AddPromoPlate () {
    const location = useLocation();
    const {promostuff} = location.state || {};

    const [plate, setPlate] = useState({
        promotionid : promostuff.promotionid,
        plateid : '',
    });

    
    const handleChange = (e) => {
        setPlate({
            ...plate,
            [e.target.name]: e.target.value
        });
        console.log(promostuff.promotionid)
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost/Project1/webProject/backend/routers/PromoApi.php?action=registerplat', plate)
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
        <div className="container-fluid p-5 col-12 col-md-8 my-5"  style={{border:'1px solid #CFBD97'}}>
            <h1 className="text-center text-secondary"><span style={{color:'#CFBD97'}}>Ajouter </span>Un Plat a la <span style={{color:'#CFBD97'}}>Promotion</span></h1>
            <div className="container-fluid">
                <form className="mt-5" onSubmit={handleSubmit}>
                    <label className="form-label text-secondary">Id du plat</label>
                    <input className="form-control mt-3"
                        type="text"
                        name="plateid"
                        placeholder="ID du plat a ajouter"
                        value={plate.plateid}
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

export default AddPromoPlate