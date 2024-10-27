import AdminNavbar from "../Accueil_Admin/AdminNavbar";
import AddEmployee from "./AddEmployee";
import EmployeeTable from "./EmployeeTable";

function EmployeeMan () {
    return (
    <div className="bg-black">
        <AdminNavbar/>
        <AddEmployee/>
        <EmployeeTable/>
    </div>
);
}

export default EmployeeMan