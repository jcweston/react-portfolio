import React, { Component } from 'react';
import './App.css';
import Title from './Title'
import Navbar from './Navbar'
import ContentList from './ContentList'

//test//

class App extends Component {
    state = {
      headers: ["Home","Background","Projects","Studies","Attributions","Contact"],
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
            headers={this.state.headers} />
            <ContentList />
        </div>
      </>)
    }
  
}

export default App;
