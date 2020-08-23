import React, { Component } from 'react';
import Header from './Header'

import Graph from './Graph'
import Table from './Table'


import axios from 'axios';
import { Router } from '@reach/router'
import Incident from './Incident'
import NewIncident from './NewIncident';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoading: true,
      data:[],
      page:1,
     }
    
  }
  render() { 
    return ( 
      <div className="App">
      <Header />
      <Router>
       <Incident path="incident/:id"/>
        <Table 
          path="/" 
          page={this.state.page}
         navButtonHandler={this.navButtonHandler}
         typeSearch={this.typeSearch}
         isLoading = {this.state.isLoading}
         data = {this.state.data.incidents}/>
        <Graph path="/graph"/>
        
      </Router>
      
      
    </div> 
    );
  }

  componentDidMount() {
    this.getData()
  }

  typeSearch = (type) => {
    this.setState({
      page:1,
      isLoading:true,
      },this.getData(type))
  }

  getData = (type="type") => {
    let typeString="&incident_type="+type
    if(type==="type") {
      typeString=""
    }
    const url = `https://bikewise.org:443/api/v2/incidents?page=${this.state.page}${typeString}&proximity_square=100`


    axios.get(url)
      .then(res => {
        //console.log(res)
        this.setState({
          data:res.data,
          isLoading:false
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  navButtonHandler = (number,active) => {
    if (active) {
      this.setState({
      isLoading:true,
      page:this.state.page+number
      },this.getData())
    }
  }



}
 

export default App;
