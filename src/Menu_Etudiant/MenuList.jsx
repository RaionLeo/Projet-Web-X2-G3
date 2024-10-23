import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import MenuFoodCard from "./MenuFoodCard";


function MenuList ({addToCart}) {

    const [menus, setMenu] = useState([]);
    let currentDate = new Date().toJSON().slice(0, 10);


    useEffect(() => {
        axios.post('http://localhost/Project1/webProject/backend/routers/MenuApi.php?action=menus', {menudate : currentDate})
            .then(response => {
                    if(response.statusText === "OK" && response.data.menus) {
                        setMenu(response.data.menus);
                        console.log(response.data.menus);
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
                {menus.length > 0 ? (
                    menus.map((menuCard, index) => (
                    <MenuFoodCard key={index} Topimage={`data:image/jpeg;base64,${menuCard.platimage}`} price={menuCard.platprice} title={menuCard.platename}
                        addToCart={() => addToCart(menuCard)}/>
                ))
                ) : (
                    <p>Le menu du jour arrive bientot!</p>
                )}
            </div>
        </div>
    );
}

export default MenuList;