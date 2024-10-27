import React, { useState } from "react" ;
import axios from 'axios';
import { v4 as uuidv4} from "uuid";

function CreatePlate () {

    const [plate, setPlate] = useState({
        plateid : 'Plat' + uuidv4(),
        platename : '',
        platedescription : '',
        platimage : null,
        platprice : 0
    });

    
    const handleChange = (e) => {
        setPlate({
            ...plate,
            [e.target.name]: e.target.value
        });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) { // Check if a file is selected
            const reader = new FileReader();
            reader.onloadend = () => {
                setPlate(prevPlate => ({
                    ...prevPlate,
                    platimage: reader.result.split(',')[1] // Get base64 string
                }));
            };
            reader.readAsDataURL(file);
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost/Project1/webProject/backend/routers/PlateApi.php?action=register', plate)
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
        <div className="container-fluid p-5 col-12 col-md-6 my-5"  style={{border:'1px solid #CFBD97'}}>
            <h1 className="text-center text-secondary"><span style={{color:'#CFBD97'}}>Ajouter </span>Un <span style={{color:'#CFBD97'}}>Plat</span></h1>
            <div className="container-fluid">
                <form className="mt-5" onSubmit={handleSubmit}>
                    <label className="form-label mt-3 text-secondary">Nom du plat</label>
                    <input className="form-control mt-3"
                        type="text"
                        name="platename"
                        placeholder="Nom du plat"
                        value={plate.platename}
                        onChange={handleChange}
                        required/>
                    <label className="form-label mt-3 text-secondary">Description</label>
                    <input className="form-control mt-3"
                        type="text"
                        name="platedescription"
                        placeholder="Description du plat"
                        value={plate.platedescription}
                        onChange={handleChange}
                        required/>
                    <label className="form-label mt-3 text-secondary">Prix</label>
                    <input className="form-control mt-3"
                        type="text"
                        name="platprice"
                        placeholder="Prix du plat"
                        value={plate.platprice}
                        onChange={handleChange}
                        required/>
                    <label className="form-label mt-3 text-secondary">Image du plat</label>
                    <input className="form-control mt-3"
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageUpload} 
                        required 
                        />
                    <div className="container text-center">
                        <button className="btn btn-primary my-5 px-5 fw-bold" style={{backgroundColor:'#CFBD97', border:'none'}}>Ajouter</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreatePlate