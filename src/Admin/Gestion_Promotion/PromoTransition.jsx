import AdminNavbar from "../Accueil_Admin/AdminNavbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4} from "uuid";

function PromoTransition () {

    const navigate = useNavigate();

    const goToAddPromo = () => {
        navigate("/AddPromo");
    }

    const goToRemPromo = () => {
        navigate("/RemPromoMan");
    }

    return (
        <div className="container-fluid bg-black" >
            <AdminNavbar/>
            <div className="container-fluid col-12 col-md-10 col-lg-8 p-5" style={{border:'1px solid #CFBD97'}}>
                <h1 className="text-center p-5 text-secondary">Que Souhaitez Vous Faire<span style={{color:'#CFBD97'}}> ?</span></h1>
                <div className="container-fluid d-lg-flex">
                    <div className="container-fluid col-12 col-lg-4 mb-5 mb-lg-0 mx-0 mx-lg-3">
                        <button className="btn btn-primary py-3 w-100" style={{backgroundColor:'#CFBD97',border:'none'}} onClick={goToAddPromo}>Créer Une Promotion</button>
                    </div>
                    <div className="container-fluid col-12 col-lg-4 mb-5 mb-lg-0">
                        <button className="btn btn-danger w-100 py-3" style={{backgroundColor:'black',border:'1px solid #CFBD97'}} onClick={goToRemPromo}>Supprimer Une Promotion</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PromoTransition