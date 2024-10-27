import GerantNavbar from "../Gérant/Accueil_Gerant/GerantNavbar";

function Table2 () {
    return(
        <div className="bg-black">
            <GerantNavbar/>
            <div className="container-fluid mt-5 mb-5">
                <h1 className="text-center text-white fw-bold">Liste des Employés</h1>
                <div className="container-fluid mt-5">
                    <table className="w-100 bg-black">
                        <thead className="border-bottom text-black" style={{backgroundColor:'#CFBD97'}}>
                            <tr className="text-center">
                                <th>ID Client</th>
                                <th>Problème Client</th>
                                <th>ID Employee</th>
                                <th>Reponse Employee</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <div className="container-fluid mt-5 col-12 col-md-6">
                <input type="text" placeholder="ID de la reclamation" className="form-control"/>
                <div className="d-flex container-fluid justify-content-center mt-5">
                    <button className="btn btn-primary" style={{backgroundColor:'#CFBD97', border:'none'}} disabled>Valider</button>
                </div>
            </div>
        </div>
    );
}

export default Table2