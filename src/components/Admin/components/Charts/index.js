import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class charts extends Component{
  // return <Line data={chartData} options={chartOptions} width="600" height="250"/>
  constructor(props){
    super(props)
    this.state={
      chartData:props.chartData
    }
  }

  getChartData(){
    this.setState({
      chartData:{
        labels:[
          'Monday','Tuesday','Wednesday','Thursday','Friday'
        ],
        datasets:[{
            label:"Cars Parking",
            data:[50,27,88,24,33],
            lineTension:0,
            backgroundColor:"purple",
            borderColor:"purple",
            fill:false,
          },
          {
            label:"Cars Leaving",
            data:[89,10,20,43,57],
            lineTension:0,
            backgroundColor:"brown",
            borderColor:"brown",
            fill:false,
          }

        ]
      }


    })
  }

  componentWillMount(){
    this.getChartData();
  }

  render(){
    return <div>
      <Line data={this.state.chartData} />

    </div>

  }

}

export default charts;
