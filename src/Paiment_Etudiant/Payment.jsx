import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FullNavbar from "../Accueil_Etudiant/FullNavbar";
import Footer from "../Pages_D'accueil/Footer";
import { v4 as uuidv4} from "uuid";

function Payment () {
    const [paidfor, setPaidFor] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const paypalRef = useRef(null);

    const location = useLocation();
    const {total} = location.state || {total:0}; 
    const {cartstuff} = location.state || [];
    const {commandID} = location.state || {commandID:''}
    let currentDate = new Date().toJSON().slice(0, 10);

    const Product = {
        description : 'Un bon miam miam',
        price : total
    }

    useEffect(() => {
        if (!document.querySelector("script[src='https://www.paypal.com/sdk/js?client-id=AcfgDTaeOx7bl36H8__wGzkP5kIRinIIMCm3prWY0Nh6G2oiM_l4bk2utqUYJ2Q5vDy7Xnd24YzBBWbk']")) {
            const script = document.createElement("script");
            script.src = 'https://www.paypal.com/sdk/js?client-id=AcfgDTaeOx7bl36H8__wGzkP5kIRinIIMCm3prWY0Nh6G2oiM_l4bk2utqUYJ2Q5vDy7Xnd24YzBBWbk';
            script.addEventListener('load', () => setLoaded(true));
            document.body.appendChild(script);
        } else {
            setLoaded(true);
        }
    }, []);

    useEffect(() => {
        if (loaded && paypalRef.current && window.paypal) {
            window.paypal
                .Buttons({
                    createOrder: (data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    description: Product.description,
                                    amount: {
                                        currency_code: "FCFA",
                                        value: Product.price,
                                    },
                                },
                            ],
                        });
                    },
                    onApprove: async (data, actions) => {
                        const order = await actions.order.capture();
                        setPaidFor(true);
                        console.log(order);
                    },
                    onError: (errr) => {
                        console.error("PayPal Checkout onError:", err);
                        setSdkError("Something went wrong with the payment process.");
                    }
                })
                .render(paypalRef.current);
        }else if (!loaded) {
            console.log("PayPal SDK is not loaded yet.");
        }
    }, [loaded, Product.price]);

    //To be continued

    const [reclamation, setReclamation] = useState({
        reclamationid : 'Rec' + uuidv4(),
        commandeid : commandID,
        reclamationdate : currentDate,
        reclamationdescription : ''
    });

    
    const handleChange = (e) => {
        setPlate({
            ...reclamation,
            [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost/Project1/webProject/backend/routers/ReclamationApi.php?action=register', reclamation)
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
        <div className="bg-black">
            <FullNavbar/>
            {paidfor ? (
                <div>
                    <h1>Merci pour votre commande!</h1>
                    <form className="mt-5" onSubmit={handleSubmit}>
                        <label className="form-label text-secondary">Commentaire ou Reclamation</label>
                        <input className="form-control mt-3"
                            type="text"
                            name="reclamationdescription"
                            placeholder="Votre commentaire"
                            value={reclamation.reclamationdescription}
                            onChange={handleChange}
                            required/>
                        <div className="container text-center">
                            <button className="btn btn-primary my-5 px-5 fw-bold" style={{backgroundColor:'#CFBD97', border:'none'}}>Ajouter</button>
                        </div>
                    </form>
                </div>
            ):(
                <div className="container-fluid bg-black pt-5">
                    <div className="row">
                        <div className="col-12 col-md-6 bg-white mx-0 mx-md-5">
                            <h1 className="text-center mb-5 fw-bold" style={{color:'#CFBD97'}}>Moyen de paiement</h1>
                            <hr className="mb-5"/>
                            <p className="text-center mb-5">Veuillez sélectionner un moyen de paiment</p>
                            <div ref={paypalRef}></div>
                        </div>
                        <div className="col-12 col-md-4 mx-0 mx-md-3 my-3 my-md-0" style={{backgroundColor:'#CFBD97'}}>
                            <h1 className="text-center mb-5 fw-bold" style={{color:'white'}}>Bill</h1>
                            <hr className="mb-5"/>
                            <table className="w-100">
                                <tbody>
                                    {cartstuff.map((item, index) => (
                                        <tr key={index} className="border-bottom">
                                            <td>{item.title}</td>
                                            <td>{item.price} FCFA</td>
                                            <td>{item.quantity}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <p>Delivery Fee : 300 FCFA</p>
                            <p>Total : {total} FCFA</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Payment;