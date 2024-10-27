import LineChart from "../../Admin/Charts/LineChart";
import { registerCharts } from "../../registerCharts";
import { useCookies } from "react-cookie";

registerCharts()

function DashboardEmp () {

    const [cookies] = useCookies(['employeeId', 'employeeName']);

    return(
        <div className="mb-5">
            <h1 className="text-center mb-5 text-white">Bienvenue <span style={{color:'#CFBD97'}}>{cookies.employeeName}</span> !</h1>
            <div className="container">
                <div className="row g-5">
                    <div className="col-12 col-lg-6">
                        <LineChart/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardEmp