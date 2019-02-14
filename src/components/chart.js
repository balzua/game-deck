import React from 'react';
import {Radar} from 'react-chartjs-2';

export default class Chart extends React.Component {

  render() {
    const chartData = {
      labels: ['Action', 'Adventure', 'Role-Playing', 'Puzzle', 'Shooter'],
      datasets: [{
          data: [100, 60, 85, 20, 40]
      }]
    };
    
    const chartOptions = {
      legend: {
        display: false
      }
    };
    
    return (
      <div className="chart">
        <Radar data={chartData} options={chartOptions}/>
      </div>
    );
  }
};