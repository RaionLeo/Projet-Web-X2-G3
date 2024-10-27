import EmployeeNavbar from "../Employee/Accueil_Employee/EmployeeNavbar";

function Table1 () {
    return(
        <div className="bg-black">
            <EmployeeNavbar/>
            <div className="container-fluid mt-5 mb-5">
                <h1 className="text-center text-white fw-bold">Liste des Employés</h1>
                <div className="container-fluid mt-5">
                    <table className="w-100 bg-black">
                        <thead className="border-bottom text-black" style={{backgroundColor:'#CFBD97'}}>
                            <tr className="text-center">
                                <th>ID Reclamation</th>
                                <th>ID Client</th>
                                <th>Date de poste</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <div className="container-fluid mt-5 col-12 col-md-6">
                <input type="text" placeholder="ID de la reclamation" className="form-control"/>
                <div className="d-flex container-fluid justify-content-center mt-5">
                    <button className="btn btn-primary" style={{backgroundColor:'#CFBD97', border:'none'}} disabled>Envoyer</button>
                </div>
            </div>
        </div>
    );
}

export default Table1