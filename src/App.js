import React, { Component } from 'react';
import './App.css';
import Title from './Title'
import Navbar from './Navbar'
import ContentList from './ContentList'

class App extends Component {
    state = {
      headers: ["Home","Background","Projects","Studies","Attributions","Contact"],
      home: "Visible",
      background: "Invisible",
      projects: "Invisible",
      studies: "Invisible",
      pictures: "Invisible",
      attributions: "Invisible",
      contact: "Invisible",
      open:""
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
            onClick={this.onClick} />
            <ContentList 
            state={this.state} 
            onClick={this.onClick}
            checkPriority={this.checkPriority}/>
        </div>
      </>)
    }
  
    onClick = (upperName) => {
      let name=upperName.toLowerCase()
      let obj = {}
      this.state.headers.forEach(x => {
        let y=x.toLowerCase()
        obj[y]="Invisible"
      });
      obj[name]=`Visible`
      this.setState(obj)
    }

    checkPriority = (name) => {
      if (this.state.priority===name) {
        return ` , Priority`
      } else {return ""}
    }
}

export default App;
