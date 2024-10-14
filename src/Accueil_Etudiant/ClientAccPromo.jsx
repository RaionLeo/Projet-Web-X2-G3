import PromoFoodCard from "./PromoFoodCard";
import food1 from "../assets/Food1.jpg"
import food2 from "../assets/Food2_2.jpg"


function ClientAccPromo () {

    const styleGolden = {color: '#CFBD97'}
    const styleWhite = {
        color : 'white',
    }

    return (
        <div className="container-fluid">
            <h1 className="d-inline-block my-5" style={styleWhite}>En <h1 style={styleGolden} className="d-inline-block">Promotion</h1></h1>
            <div class="row row-cols-1 row-cols-md-5 row-cols-lg-6 g-3">
                <PromoFoodCard TopImage={food1} FullPrice='1000FCFA' Discount='-20%' DiscountPrice={1000-(1000*20/100) + 'FCFA'} Title='Cassoulet' Text='Un bon Cassoulet'/>
                <PromoFoodCard TopImage={food2} FullPrice='1200FCFA' Discount='-10%' DiscountPrice={1000-(1000*20/100) + 'FCFA'} Title='Ndole' Text='Un bon Ndole'/>
            </div>
        </div>
    );
}

export default ClientAccPromo