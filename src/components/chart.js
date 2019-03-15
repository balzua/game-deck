import React from 'react';
import {connect} from 'react-redux';
import {Radar} from 'react-chartjs-2';

export function Chart(props) {
  const chartData = {
    labels: props.labels,
    datasets: [{
        data: props.data,
        backgroundColor: 'rgba(22,123,233, 0.3)',
        borderColor: 'rgba(22,123,233, 0.7)'
    }]
  };

  const chartOptions = {
    legend: {
      display: false,
    },
    responsive: true
  };

  return (
    <div className="chart">
      <Radar data={chartData} options={chartOptions}/>
    </div>
  );
};

export const mapStateToProps = state => ({
  labels: ['Action', 'Puzzle', 'Role-Playing', 'Fighting', 'Shooter', 'Sports/Simulation'],
  data: Object.values(state.app.library.chartScores)
});

export default connect(mapStateToProps)(Chart);