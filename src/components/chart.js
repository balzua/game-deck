import React from 'react';
import {connect} from 'react-redux';
import {Radar} from 'react-chartjs-2';

export function Chart(props) {
  const chartData = {
    labels: props.labels,
    datasets: [{
        data: props.data
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
  labels: Object.keys(state.chartScores),
  data: Object.values(state.chartScores)
});

export default connect(mapStateToProps)(Chart);