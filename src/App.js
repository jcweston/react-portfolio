import React, { Component } from 'react';
import './App.css';
import Title from './Title'
import Navbar from './Navbar'
import ContentList from './ContentList'

class App extends Component {
    state = {
      headers: ["Home","Overview","Projects","Studies","Pictures","Attributions","Contacts"],
      home: "Visible",
      overview: "Invisible",
      projects: "Invisible",
      studies: "Invisible",
      pictures: "Invisible",
      attributions: "Invisible",
      contacts: "Invisible"
    } 

    render () {
      return (
      <>
        <div className="TopBar">
          <Title />
        </div>
        <div className="Row">
          <Navbar state={this.state} onClick={this.onClick}/>
        <ContentList state={this.state} onClick={this.onClick}/>
        </div>
      </>)
    }
  
    onClick = (upperName) => {
      let name=upperName.toLowerCase()
      if (this.state[name]==="Visible") {
        let obj = {}
        obj[name]="Invisible"
        this.setState(obj)
      }
      else {
        let obj = {}
        obj[name]="Visible"
        this.setState(obj)
      }
    }
}

export default App;
