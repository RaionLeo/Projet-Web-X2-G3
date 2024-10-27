import { registerCharts } from "../../registerCharts";
import DoughnutChart from "../Charts/DoughnutChart";
import LineChart from "../Charts/LineChart";

registerCharts()

function Dashboard (props) {
    return(
        <div className="mb-5">
            <h1 className="text-center mb-5 text-white">Bienvenue <span style={{color:'#CFBD97'}}>{props.title}</span> !</h1>
            <div className="container">
                <div className="row g-5">
                    <div className="col-12 col-lg-6">
                        <LineChart/>
                    </div>
                    <div className="col-12 col-lg-6">
                        <DoughnutChart/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard