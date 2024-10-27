import AddEmployee from "../../Admin/Gestion_Employee/AddEmployee";
import EmployeeTable from "../../Admin/Gestion_Employee/EmployeeTable";
import GerantNavbar from "../Accueil_Gerant/GerantNavbar";


function GerManEmp () {
    return (
    <div className="bg-black">
        <GerantNavbar/>
        <AddEmployee/>
        <EmployeeTable/>
    </div>
);
}

export default GerManEmp