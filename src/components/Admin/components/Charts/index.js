import React, {Component} from 'react';
import {Bar,Line} from 'react-chartjs-2';
import baseUnits from './units';
import axios from 'axios';

let port=5555;

class charts extends Component{
  constructor(props){
    super(props)
    this.state={
      chartData:props.chartData
    }
  }

  getChartData(apiData){
    this.setState({
      chartData:{
        labels:apiData.labels,
        datasets:[
          {
            label:apiData.datasets[0].label,
            data:apiData.datasets[0].data,
            lineTension:0,
            backgroundColor:"purple",
            borderColor:"purple",
            fill:false,
          },
          {
            label:apiData.datasets[1].label,
            data:apiData.datasets[1].data,
            lineTension:0,
            backgroundColor:"pink",
            borderColor:"pink",
            fill:false,
          },
        ],
      }
    })
  }

  async componentWillMount(){
    let startTime=new Date('Sept 10 2017');
    let endTime=new Date();
    let units=1;
    const response=await axios.get(`http://localhost:${port}/api/ChartData/${startTime.getTime()}/${endTime.getTime()}?units=86400000&offset=18000000`);
    this.getChartData(response.data);
  }

  render(){
    return <div>
      <Line data={this.state.chartData} />
    </div>
  }
}

export default charts;
