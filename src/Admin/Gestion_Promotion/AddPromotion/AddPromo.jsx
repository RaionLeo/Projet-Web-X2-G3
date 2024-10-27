import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4} from "uuid";

function AddPromo () {

    const navigate = useNavigate();

    const [promo, setPromo] = useState({
        promotionid : 'Promo' + uuidv4(),
        promotionstart : '',
        promotionend : '',
        promotionrate : ''
    }) 

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost/Project1/webProject/backend/routers/PromoApi.php?action=register', promo)
        .then(response => {
            console.log(response.data);
            if (response.data.status === 201) {
                alert(response.data.message);
                goToAddPromoMan();
            }
        })
        .catch(error => {
            console.error('There was an error' , error);
        })
    }

    const handleChange = (e) => {
        setPromo({
            ...promo,
            [e.target.name]: e.target.value
        });
    };

    const goToAddPromoMan = () => {
        navigate('/AddPromoMan', { state: { promostuff: promo } })
    }

    return(
        <div className="container-fluid bg-black">
            <div className="container-fluid p-5 col-12 col-md-8 my-5 bg-black"  style={{border:'1px solid #CFBD97'}}>
                <h1 className="text-center text-secondary"><span style={{color:'#CFBD97'}}>Créer </span>Une <span style={{color:'#CFBD97'}}>Promotion</span></h1>
                <div className="container-fluid">
                    <form className="mt-5" onSubmit={handleSubmit}>
                        <label className="form-label mt-3 text-secondary">Date de début</label>
                        <input className="form-control mt-3"
                            type="text"
                            name="promotionstart"
                            placeholder="YYYY-MM-DD"
                            value={promo.promotionstart}
                            onChange={handleChange}
                            required/>
                        <label className="form-label mt-3 text-secondary">Date de fin</label>
                        <input className="form-control mt-3"
                            type="text"
                            name="promotionend"
                            placeholder="YYYY-MM-DD"
                            value={promo.promotionend}
                            onChange={handleChange}
                            required/>
                        <label className="form-label mt-3 text-secondary">Reduction</label>
                        <span className="d-flex align-items-center">
                            <input className="form-control"
                                type="text"
                                name="promotionrate"
                                placeholder="Ex : 20"
                                value={promo.promotionrate}
                                onChange={handleChange}
                                required/>
                                <p className="fs-3 mt-2 mx-2 text-secondary">%</p>
                        </span>
                        <div className="container text-center">
                            <button className="btn btn-primary my-5 px-5 fw-bold" style={{backgroundColor:'#CFBD97', border:'none'}}>Créer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddPromo