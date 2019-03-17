import React from 'react';
import {connect} from 'react-redux';
import {Doughnut} from 'react-chartjs-2';

export function Chart(props) {
  const chartData = {
    labels: props.labels,
    datasets: [{
        data: props.data,
        backgroundColor: [
          '#2396FD',
          '#2CBC2B',
          '#F0203D',
          '#7C0DE5',
          '#FFEC11',
          '#FF5613'
        ]
    }]
  };

  const chartOptions = {
    legend: {
      display: true,
      position: 'right',
      labels: {
        fontColor: '#FFFFFF'
      }
    },
    responsive: true
  };

  return (
    <div className="chart">
      <Doughnut data={chartData} options={chartOptions}/>
    </div>
  );
};

export const mapStateToProps = state => ({
  labels: ['Action', 'Puzzle', 'Role-Playing', 'Fighting', 'Shooter', 'Sports/Simulation'],
  data: Object.values(state.app.library.chartScores)
});

export default connect(mapStateToProps)(Chart);