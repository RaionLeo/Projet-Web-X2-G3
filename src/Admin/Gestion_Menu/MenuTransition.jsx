import AdminNavbar from "../Accueil_Admin/AdminNavbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4} from "uuid";

function MenuTransition () {

    const [menus, setMenu] = useState([]);
    let currentDate = new Date().toJSON().slice(0, 10);
    const [menu, setAMenu] = useState({
        menuId : 'Menu' + uuidv4(),
        menudate : currentDate 
    }) 

    const navigate = useNavigate();

    const goToAddMenu = () => {
        navigate("/AddMenu", { state: { menustuff: menu } });
    }

    const goToAddPlates = () => {
        navigate("/AddPlates");
    }

    useEffect(() => {
        axios.post('http://localhost/Project1/webProject/backend/routers/MenuApi.php?action=getmenu', {menudate : currentDate})
            .then(response => {
                    if(response.statusText === "OK" && response.data.menus) {
                        setMenu(response.data.menus);
                        console.log(response.data.menus);
                        console.log('hi')
                    }
                    console.log(response.data.menus); //shows something
                    console.log(menus); // Shows nothing
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleCreation = () => {
        if(menus.length === 0) {
            axios.post('http://localhost/Project1/webProject/backend/routers/MenuApi.php?action=register', menu)
            .then(response => {
                console.log(response.data);
                if (response.data.status === 201) {
                    alert(response.data.message);
                    goToAddMenu();
                }
            })
            .catch(error => {
                console.error('There was an error' , error);
            })
        } else {
            alert("Il y'a déja un menu du jour");
        }
    }
    const handleModification = () => {
        if(menus.length > 0) {
            axios.post('http://localhost/Project1/webProject/backend/routers/MenuApi.php?action=delete', {menuid : menus[0].menuid})
            .then(response => {
                    console.log(response.data);
                    if (response.data.status === 201) {
                        alert(response.data.message);
                    }
            })
            .catch(error => {
                console.error('Error deleting data:', error);
            });
        } else {
            alert("Il n'ya pas encore de menu du jour")
        }
    }

    return (
        <div className="container-fluid bg-black" >
            <AdminNavbar/>
            <div className="container-fluid col-12 col-md-10 col-lg-8 p-5" style={{border:'1px solid #CFBD97'}}>
                <h1 className="text-center p-5 text-secondary">Que Souhaitez Vous Faire<span style={{color:'#CFBD97'}}> ?</span></h1>
                <div className="container-fluid d-lg-flex">
                    <div className="container-fluid col-12 col-lg-4 mb-5 mb-lg-0 mx-0 mx-lg-3">
                        <button className="btn btn-primary py-3 w-100" style={{backgroundColor:'#CFBD97',border:'none'}} onClick={handleCreation}>Créer le Menu du jour</button>
                    </div>
                    <div className="container-fluid col-12 col-lg-4 mb-5 mb-lg-0">
                        <button className="btn btn-danger w-100 py-3" style={{backgroundColor:'black',border:'1px solid #CFBD97'}} onClick={handleModification}>Supprimer le Menu du jour</button>
                    </div>
                    <div className="container-fluid col-12 col-lg-4">
                        <button className="btn btn-danger w-100 py-3" style={{backgroundColor:'black',border:'1px solid #FFFFFF'}} onClick={goToAddPlates}>Ajouter Plat ou Boisson</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuTransition