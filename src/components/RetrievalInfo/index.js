import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar2';
import axios from 'axios';

let port =5555;

export default class RetrievalInfo extends Component{
  constructor(props){
    super(props)
    let carId=props.location.pathname.substr(props.location.pathname.lastIndexOf('/')+1)
    this.state={
      carId:carId,
      idPresent:carId!=="",
      validId:true,
    }
  }

  async componentWillMount(){
    if(this.state.idPresent){
      const response=await axios.get(`http://localhost:${port}/api/vehicle/${this.state.carId}`)
      console.log(response);
      if(response.data.length===0){
        console.log("That is not a valid car ID");
        this.setState({
          validId:false,
        })
      }else{
        let theDatas=response.data[0];
        let testData={a:1,b:2,c:3}
        this.setState({
          ...theDatas
        })
      }
    }else {
      console.log("No car id was set");
    }
  }



  render(){
    return (
      <div id='landing-container'>
        <div id='landing-form'>
          <div className='landing-flex'>
            <h4>Retrieval</h4>
          </div>

          <div className='landing-flex'>
            {this.state.year}
            {this.state.color}
            {this.state.make}
            {this.state.model}
            {this.state.space}
            {this.state.owner}
            {this.state.plate}
            {this.state.photo}
          </div>
        </div>
        <NavBar selectedIndex={0} />
      </div>
    );
  }
}
