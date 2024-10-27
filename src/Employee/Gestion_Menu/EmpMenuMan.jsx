import MenuTable from "../../Admin/Gestion_Menu/MenuTable";
import EmployeeNavbar from "../Accueil_Employee/EmployeeNavbar";

function EmpMenuMan () {
    return(
        <div className="container-fluid bg-black">
            <EmployeeNavbar/>
            <div className="container-fluid">
                <MenuTable/>
            </div>
        </div>
    )
}

export default EmpMenuMan