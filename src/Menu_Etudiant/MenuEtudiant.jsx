import FullNavbar from "../Accueil_Etudiant/FullNavbar";
import { useEffect, useState } from "react";
import MenuList from "./MenuList";
import MenuPromo from "./MenuPromo";
import Panier from "./Panier";
import PointsBar from "../Fidelity_Parrainage/PointsBar";

function MenuEtudiant () {

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const calcTotal = (plates) => {
        setTotal(plates.reduce((total,plate) => total + (plate.price*plate.quantity), 0));
    }

    const addToCart = (menuCard) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.title === menuCard.platename);

            if(existingItem) {
                return prevCart.map(item =>
                    item.title === menuCard.platename ? {...item, quantity:item.quantity+1} : item
                );
            } else {
                return [...prevCart, {...menuCard, quantity:1, title:menuCard.platename, price:menuCard.platprice}];
            }
            
        });
    }

    const addToCart2 = (promoCard) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.title === promoCard.platename);

            if(existingItem) {
                return prevCart.map(item =>
                    item.title === promoCard.platename ? {...item, quantity:item.quantity+1} : item
                );
            } else {
                return [...prevCart, {...promoCard, quantity:1, title:promoCard.platename, price:(promoCard.platprice-(promoCard.platprice*promoCard.promotionrate/100))}];
            }
            
        });
    }

    const RemoveFromCart = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
    }

    useEffect(() => {
        calcTotal(cart);
    },[cart])

    const styleGolden = {color: '#CFBD97'}
    const styleWhite = {
        color : 'white',
    }

    return(
        <div className="container-fluid bg-black">
            <FullNavbar/>
            <PointsBar/>
            <div className="row">
                <div className="col-12 col-sm-6">
                    <div className="container-fluid d-flex justify-content-center">
                        <h1 style={styleGolden} className="d-inline-block mb-5 fs-1">Menu</h1>
                    </div>
                    <MenuPromo addToCart2={addToCart2}/>
                    <MenuList addToCart={addToCart}/>
                </div>
                <div className="col-12 col-sm-6">
                    <div className="container-fluid d-flex justify-content-center">
                        <h1 style={styleGolden} className="d-inline-block mb-5 fs-1">Panier</h1>
                    </div>
                    <Panier cartItems={cart}
                    RemoveFromCart={RemoveFromCart}
                    TotalCost={total}/>
                </div>
            </div>
        </div>
    );
}

export default MenuEtudiant