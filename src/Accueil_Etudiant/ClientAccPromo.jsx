import PromoFoodCard from "./PromoFoodCard";
import food1 from "../assets/Food1.jpg"
import food2 from "../assets/Food2_2.jpg"
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


function ClientAccPromo () {

    const [promotions, setPromotion] = useState([]);
    let currentDate = new Date().toJSON().slice(0, 10);


    useEffect(() => {
        axios.post('http://localhost/Project1/webProject/backend/routers/PromoApi.php?action=promotions', {promotiondate : currentDate})
            .then(response => {
                if(response.data.promotions){
                    setPromotion(response.data.promotions);
                    console.log(promotions);
                    console.log(response.data.promotions)
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const styleGolden = {color: '#CFBD97'}
    const styleWhite = {
        color : 'white',
    }

    return (
        <div className="container-fluid mb-3">
            <h1 className="d-inline-block my-5" style={styleWhite}>En <h1 style={styleGolden} className="d-inline-block">Promotion</h1></h1>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
                {promotions.length > 0 ? (
                    promotions.map((promocard, index) => (
                    <PromoFoodCard key={index} TopImage={'data:image/jpeg;base64,${promocard.platimage}'} FullPrice={promocard.platprice} Discount={'-' + promocard.promotionrate + '%'} DiscountPrice={promocard.platprice-(promocard.platprice*promocard.promotionrate/100) + 'FCFA'} Title={promocard.platename} Text={promocard.platedescription} display='d-none'/>
                ))
                ) : (
                    <p>Pas de Promotions aujourdhui!</p>
                )}
            </div>
        </div>
    );
}

export default ClientAccPromo