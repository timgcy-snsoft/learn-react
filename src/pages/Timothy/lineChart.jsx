import React, { Component } from 'react'
import { Line, defaults } from 'react-chartjs-2'
import callAPI from '../DotaAPI/FetchFunction'

// defaults.global.animation = false

class LineChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      matchData: this.props.publicMatches,
      lineData: {
        labels: ['0-10', '11-20', '21-30', '31-40', '41-50', '51-60', '> 60'],
        datasets: [
          {
            // label: 'Games completed within the time',
            fill: false,
            lineTension: 0,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
          },
        ],
      },
      isLoaded: false,
    }
  }

  async componentDidMount() {
    this.setState({
      isLoaded: true,
    })
    this.matchTimeCount()
  }

  matchTimeCount() {
    var gp1 = 0,
      gp2 = 0,
      gp3 = 0,
      gp4 = 0,
      gp5 = 0,
      gp6 = 0,
      gp7 = 0
    const matches = this.props.publicMatches
    console.table(matches)
    // for (const i in matches) {
    //   if (Math.floor(matches[i].duration / 60) > 60) gp7++
    //   else if (
    //     Math.floor(matches[i].duration / 60) > 50 &&
    //     Math.floor(matches[i].duration) >= 60
    //   )
    //     gp6++
    //   else if (
    //     Math.floor(matches[i].duration / 60) > 40 &&
    //     Math.floor(matches[i].duration) >= 50
    //   )
    //     gp5++
    //   else if (
    //     Math.floor(matches[i].duration / 60) > 30 &&
    //     Math.floor(matches[i].duration) >= 40
    //   )
    //     gp4++
    //   else if (
    //     Math.floor(matches[i].duration / 60) > 20 &&
    //     Math.floor(matches[i].duration) >= 30
    //   )
    //     gp3++
    //   else if (
    //     Math.floor(matches[i].duration / 60) > 10 &&
    //     Math.floor(matches[i].duration) >= 20
    //   )
    //     gp2++
    //   else gp1++
    // }
    // this.setState({
    //   lineData: {
    //     datasets: [
    //       {
    //         data: [gp1, gp2, gp3, gp4, gp5, gp6, gp7],
    //       },
    //     ],
    //   },
    // })
  }

  render() {
    if (!this.state.isLoaded)
      return (
        <div style={{ alignItem: 'center', justifyContent: 'center' }}>
          Loading...
        </div>
      )
    return (
      <div>
        <h4 style={{ margin: 'auto' }}>
          Chart of total number of matches within time range
        </h4>
        <Line
          data={this.state.lineData}
          options={{
            legend: { display: false },
            scales: {
              yAxes: [
                {
                  ticks: { beginAtZero: true },
                  scaleLabel: {
                    display: true,
                    labelString: 'Count',
                  },
                },
              ],
              xAxes: [
                {
                  scaleLabel: {
                    display: true,
                    labelString: 'Duration (mins)',
                  },
                },
              ],
            },
          }}
        />
      </div>
    )
  }
}

export default LineChart
