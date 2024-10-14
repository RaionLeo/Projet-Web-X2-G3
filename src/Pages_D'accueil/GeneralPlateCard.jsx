import FoodCard from "./FoodCard";
import food1 from "../assets/Food1.jpg"
import food2 from "../assets/Food2_2.jpg"

function GeneralPlateCard () {

    const styleGolden = {color: '#CFBD97'}
    const styleWhite = {
        color : 'white',
    }

    return (
        <div className="container-fluid mt-5">
            <h1 className="d-inline-block mb-5" style={styleWhite}>Nos <h1 style={styleGolden} className="d-inline-block">Plats</h1></h1>
            <div class="container-fluid">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-3">
                    <FoodCard TopImage={food1} Title='Cassoulet' Text='Un bon Cassoulet'/>
                    <FoodCard TopImage={food2} Title='Ndole' Text='Un bon Ndole'/>
                </div>
            </div>
        </div>
    );
}

export default GeneralPlateCard