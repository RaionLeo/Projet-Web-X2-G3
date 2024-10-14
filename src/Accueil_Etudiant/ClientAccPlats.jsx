import PromoFoodCard from "./PromoFoodCard";
import food1 from "../assets/Food1.jpg"
import food2 from "../assets/Food2_2.jpg"


function ClientAccPlats () {

    const styleGolden = {color: '#CFBD97'}
    const styleWhite = {
        color : 'white',
    }
    const styleGoldenButton = {
        backgroundColor : '#CFBD97',
        color : 'white',
        border : '1px hidden',
        borderRadius : '20px',
        padding : '10px',
        width : '20%'
    }

    return (
        <div className="container-fluid">
            <h1 className="d-inline-block my-5" style={styleWhite}>Nos <h1 style={styleGolden} className="d-inline-block">Plats</h1></h1>
            <div className="row row-cols-1 row-cols-md-5 row-cols-lg-6 g-3">
                <PromoFoodCard TopImage={food1}  DiscountPrice='Bon Cassoulet' Title='Cassoulet' Text='Un bon Cassoulet'/>
                <PromoFoodCard TopImage={food2}  DiscountPrice='Bon Ndole' Title='Ndole' Text='Un bon Ndole'/>
            </div>
            <div className="container-fluid text-end mt-3">
                <button style={styleGoldenButton}>Menu</button>
            </div>
        </div>
    );
}

export default ClientAccPlats