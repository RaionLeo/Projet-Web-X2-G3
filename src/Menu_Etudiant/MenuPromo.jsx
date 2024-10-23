import PromoFoodCard from "../Accueil_Etudiant/PromoFoodCard.jsx";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


function MenuPromo ({addToCart2}) {

    const [promotions, setPromotion] = useState([]);
    let currentDate = new Date().toJSON().slice(0, 10);


    useEffect(() => {
        axios.post('http://localhost/Project1/webProject/backend/routers/PromoApi.php?action=promotions', {promotiondate : currentDate})
            .then(response => {
                if(response.data.promotions) {
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
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                {promotions.length > 0 ? (
                    promotions.map((promocard, index) => (
                    <PromoFoodCard key={index} TopImage={`data:image/jpeg;base64,${promocard.platimage}`} FullPrice={promocard.platprice} Discount={'-' + promocard.promotionrate + '%'} DiscountPrice={promocard.platprice-(promocard.platprice*promocard.promotionrate/100) + 'FCFA'} Title={promocard.platename} Text={promocard.platedescription}
                        addToCart2={() => addToCart2(promocard)}/>
                ))
                ) : (
                    <p>Pas de Promotions aujourdhui!</p>
                )}
            </div>
        </div>
    );
}

export default MenuPromo;