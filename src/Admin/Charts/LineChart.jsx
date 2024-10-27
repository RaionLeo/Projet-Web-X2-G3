import { Line } from "react-chartjs-2"


const LineChart = () => {

    const options = {
  
      responsive: true,
  
      plugins: {
  
        legend: {
  
          position: "top",
  
        },
  
        title: {
  
          display: true,
  
          text: "Chiffre d'affaire",
  
        },
  
      },
  
    }
  
  
  const labels = ["September", "October", "November", "December", "January", "February", "March", "April", "May", "June", "July"]
  
  
  const Sales = [120, 135, 125, 145, 160, 150, 170 ,140 ,145 ,135 ,160]
  
  
  const data = {
  
      labels,
  
      datasets: [
  
        {
  
          label: "Ventes",
  
          data: Sales,
  
          borderColor: "rgb(255, 99, 255)",
  
          backgroundColor: "rgba(255, 99, 255)",
  
        },
  
      ],
  
    }
  
  
  return (
    <>
        <h2 className="text-secondary">Charte des Plats Vendus</h2>
        <Line options={options} data={data} />
    </>
);
  
  }
  

  export default LineChart
  
  
  