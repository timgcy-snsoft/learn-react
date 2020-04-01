import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import callAPI from '../DotaAPI/FetchFunction'

class LineChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      matchData: [],
      lineData: {
        labels: ['0-10', '11-20', '21-30', '31-40', '41-50', '51-60', '> 60'],
        datasets: [
          {
            labels: 'Games completed within the time',
            backgroundColor: 'rgba(255,200,255,0.75)',
            lineTension: 0,
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            data: [],
          },
        ],
      },
      isLoaded: false,
    }
  }

  componentDidMount() {
    this.setState({
      matchData: callAPI('/proMatches'),
      lineData: {
        datasets: [
          {
            data: [1, 3, 1, 3, 6, 7, 7],
          },
        ],
      },
      isLoaded: true,
    })
  }

  render() {
    console.table(this.state.matchData)
    return (
      <div>
        <Line
          data={this.state.lineData}
          options={{ scales: { yAxes: [{ ticks: { beginAtZero: true } }] } }}
        />
      </div>
    )
  }
}

export default LineChart
