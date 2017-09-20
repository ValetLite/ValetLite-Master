import React, {Component} from 'react';
import Charts from './components/Charts'
import Employees from './components/Employees'
import Stats from './components/Stats'


class adminPage extends Component{
  render(){
    return <div>
        <h1>Admin Page</h1>
        <Charts />
        <Stats />
        <Employees />
      </div>
  }
}

export default adminPage
