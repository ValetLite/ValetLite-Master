import React, {Component} from 'react';
import {Bar,Line} from 'react-chartjs-2';
import baseUnits from './units';
import axios from 'axios';

let port=5555;

class charts extends Component{
  constructor(props){
    super(props)

    let start=new Date();
    start.setDate(start.getDate()-7);
    let end=new Date();
    this.state={
      chartData:props.chartData,
      currentUnit:baseUnits.DAY,
      currentOffset:baseUnits.offsets.DAY,
      currentStart:start,
      currentEnd:end,

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

  async handleClick(startDay,endDay,units,offset){
    this.setState({
      currentUnit:units,
      currentOffset:offset,
      currentStart:startDay,
      currentEnd:endDay,
    })
    setTimeout(async()=>{

      const response=await axios.get(`http://localhost:${port}/api/ChartData/${this.state.currentStart.getTime()}/${this.state.currentEnd.getTime()}?units=${this.state.currentUnit}&offset=${this.state.currentOffset}`);
      this.getChartData(response.data);
    },1)
  }

  async componentWillMount(){
    const response=await axios.get(`http://localhost:${port}/api/ChartData/${this.state.currentStart.getTime()}/${this.state.currentEnd.getTime()}?units=${this.state.currentUnit}&offset=${this.state.currentOffset}`);
    this.getChartData(response.data);
  }

  render(){
    return <div>
      <button onClick={this.handleClick.bind(this,new Date(new Date().getTime()-30*baseUnits.DAY),new Date(),baseUnits.DAY, baseUnits.offsets.DAY)}>Last Month</button>
      <button onClick={this.handleClick.bind(this,new Date(new Date().getTime()-7*baseUnits.DAY),new Date(),baseUnits.DAY,baseUnits.offsets.DAY)}>Last Week</button>
      <button onClick={this.handleClick.bind(this,new Date(new Date().getTime()-3*baseUnits.DAY),new Date(),baseUnits.HOUR, baseUnits.offsets.HOUR)}>Last 3 days</button>
      <button onClick={this.handleClick.bind(this,new Date(),new Date(),baseUnits.HOUR, baseUnits.offsets.HOUR)}>Last 24 hours</button>
      <Line data={this.state.chartData} />
    </div>
  }
}

export default charts;
