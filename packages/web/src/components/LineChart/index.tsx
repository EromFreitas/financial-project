import React from 'react'
import { Line } from 'react-chartjs-2'

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart'
    }
  },
  scales: {
    xAxes: [
      {
        type: 'time',
        distribution: 'linear'
      }
    ]
  }
}

const LineChart: React.FC = ({ CdbPrices }) => {
  const dataForGraph = CdbPrices.map(cdbPrice => ({
    x: cdbPrice.date,
    y: cdbPrice.unitPrice
  }))

  const data = {
    labels: [],
    datasets: [
      {
        label: 'Valor do CDB',
        fill: true,
        data: dataForGraph,
        borderColor: '#868af5',
        backgroundColor: '#5c60f5'
      }
    ]
  }

  return <Line options={options} data={data} />
}

export default LineChart
