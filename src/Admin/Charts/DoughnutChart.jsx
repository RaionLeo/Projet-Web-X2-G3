

import { Doughnut } from "react-chartjs-2"


const DoughnutChart = () => {

  const labels = ["Avec Parrains", "Sans Parrains"]

  const dataValues = [50,50]


const data = {

    labels,

    datasets: [

      {

        data: dataValues,

        backgroundColor: [

          "rgba(53, 162, 235)",

          "rgba(255, 99, 132)",

          
        ],

        borderColor: [

          "rgb(53, 162, 235)",

          "rgb(255, 99, 132)",

        ],

        borderWidth: 1,

      },

    ],

  }


const options = {

    responsive: true,

    maintainAspectRatio: true,

    aspectRatio: 2,

    plugins: {

      legend: {

        position: "top",

      },

      title: {

        display: true,

        text: "Parrainage",

      },

    },

  }


return (
    <>
    <h2 className="text-secondary">Charte de Parrainage</h2>
    <Doughnut data={data} options={options} />
    </>
);

}


export default DoughnutChart


