import AdminNavbar from "../Admin/Accueil_Admin/AdminNavbar";

function Table3 () {
    return(
        <div className="bg-black">
            <AdminNavbar/>
            <div className="container-fluid mt-5 mb-5">
                <h1 className="text-center text-white fw-bold">Rapport Réclamations</h1>
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
        </div>
    );
}

export default Table3