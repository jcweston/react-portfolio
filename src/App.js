import React, { Component } from 'react';
import './App.css';
import Title from './Title'
import Navbar from './Navbar'
import ContentList from './ContentList'

class App extends Component {
    state = {
      headers: ["Home","Background","Projects","Studies","Pictures","Attributions","Contacts"],
      home: "Visible",
      background: "Invisible",
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
            <Navbar 
            state={this.state} 
            onClick={this.onClick}
            onClickHome={this.onClickHome}/>
            <ContentList 
            state={this.state} 
            onClick={this.onClick}/>
        </div>
      </>)
    }
  
    onClick = (upperName) => {
      let name=upperName.toLowerCase()
      let obj = {}
      if (this.state[name]==="Visible") {
        obj[name]="Invisible"
      }
      else {
        obj[name]="Visible"
      }
      obj.home="Invisible"
      this.setState(obj)
    }

    onClickHome = (upperName) => {
      let obj={}
      this.state.headers.forEach((x)=>{
        obj[x.toLowerCase()]="Invisible"
      })
      obj.home="Visible"
      this.setState(obj)
    }
}

export default App;
