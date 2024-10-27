import ActionCardContainer from "./ActionCardContainer";
import AdminNavbar from "./AdminNavbar";
import Dashboard from "./Dashboard";

function AdminAccueil () {
    return (
        <div className="container-fluid bg-black">
            <AdminNavbar/>
            <Dashboard title="Admin"/>
            <ActionCardContainer/>
        </div>
    );
}

export default AdminAccueil