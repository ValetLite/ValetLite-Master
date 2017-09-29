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
      employees:[],
      selectedEmployees:"",
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

  updateEmployees(selectEmployees){
    this.setState({
      selectedEmployees:selectEmployees,
    })
    this.callApi();
  }

  callApi(){
    setTimeout(async()=>{
      let response={};
      if(this.state.selectedEmployees.length===0){
        response=await axios.get(`http://localhost:${port}/api/ChartData/${this.state.currentStart.getTime()}/${this.state.currentEnd.getTime()}?units=${this.state.currentUnit}&offset=${this.state.currentOffset}`);
      }else{
        response=await axios.get(`http://localhost:${port}/api/ChartData/${this.state.currentStart.getTime()}/${this.state.currentEnd.getTime()}?units=${this.state.currentUnit}&offset=${this.state.currentOffset}&employees=${this.state.selectedEmployees}`);
      }
      this.getChartData(response.data);
    },1)
  }

  async handleClick(startDay,endDay,units,offset){
    this.setState({
      currentUnit:units,
      currentOffset:offset,
      currentStart:startDay,
      currentEnd:endDay,
    })
    this.callApi();
  }

  async componentWillMount(){
    const response=await axios.get(`http://localhost:${port}/api/ChartData/${this.state.currentStart.getTime()}/${this.state.currentEnd.getTime()}?units=${this.state.currentUnit}&offset=${this.state.currentOffset}`);
    this.getChartData(response.data);
    const employees=await axios.get(`http://localhost:5555/api/valets`);
    this.setState({employees:employees.data});
    let allBox=document.getElementsByClassName("allCheckBox")[0];
    allBox.checked=true;
    let boxes=Array.from(document.getElementsByClassName("employeeCheckBox"));
    boxes.forEach(cur=>{cur.checked=true});

  }

  checkboxClicked(theEmployee,event,other){
    let boxes=Array.from(document.getElementsByClassName("employeeCheckBox"));
    let allBox=document.getElementsByClassName("allCheckBox")[0];

    if(theEmployee==="none"){
      allBox.checked=false;
      boxes.forEach(cur=>cur.checked=false);
    }

    if(allBox.checked){
      if(theEmployee==="all"){
        boxes.forEach(cur=>{cur.checked=true});
      }else{
        if(!event.target.checked){
          allBox.checked=false;
        }
      }
    }
    if(allBox.checked){
      this.setState({
        selectedEmployees:""
      })
    }else{
      let employeeString='';
      boxes.forEach(cur=>{
        if(cur.checked){
          if(employeeString.length!==0){
            employeeString+=',';
          }
          employeeString+=cur.id;
        }
      })
      if(employeeString.length===0){
        employeeString='null'
      }
      this.setState({selectedEmployees:employeeString});
    }
    this.callApi();
  }

  render(){
    const workers=this.state.employees.map(cur=><div><input className="employeeCheckBox" id={cur.id}  onClick={this.checkboxClicked.bind(this,cur.id)} type="checkbox"/><label> {cur.name} </label></div>);
    return <div>
      <button onClick={this.handleClick.bind(this,new Date(new Date().getTime()-30*baseUnits.DAY),new Date(),baseUnits.DAY, baseUnits.offsets.DAY)}>Last Month</button>
      <button onClick={this.handleClick.bind(this,new Date(new Date().getTime()-7*baseUnits.DAY),new Date(),baseUnits.DAY,baseUnits.offsets.DAY)}>Last Week</button>
      <button onClick={this.handleClick.bind(this,new Date(new Date().getTime()-3*baseUnits.DAY),new Date(),baseUnits.HOUR, baseUnits.offsets.HOUR)}>Last 3 days</button>
      <button onClick={this.handleClick.bind(this,new Date(),new Date(),baseUnits.HOUR, baseUnits.offsets.HOUR)}>Last 24 hours</button>
      <Line data={this.state.chartData} />
      <div><button onClick={this.checkboxClicked.bind(this,"none")}>Clear All</button></div>
      <div><input type="checkbox" onClick={this.checkboxClicked.bind(this,"all")} className="allCheckBox" /><label>All</label></div>
      {workers}
    </div>
  }
}

export default charts;
