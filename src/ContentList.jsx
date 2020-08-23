import React, { Component } from 'react';
import { Router } from '@reach/router'
import ToDo from './Apps/ToDo'
import Home from './ContentBoxes/Home'
import Background from './ContentBoxes/Background'
import Projects from './ContentBoxes/Projects.jsx'
import Studies from './ContentBoxes/Studies'
import Attributions from './ContentBoxes/Attributions'
import Contact from './ContentBoxes/Contact'
import Blackjack from './Apps/Blackjack.jsx';
import ApiCallApp from './Apps/APICallApp/ApiCallApp'

class ContentList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Router className="Column , ContentList">
              <Home 
                path='/' 
                className='ContentBox'
                id="Home" />

              <Background 
                path='/background' 
                className='ContentBox'
                id="Background" />

              <Projects 
                path='/projects' 
                className='ContentBox'
                id="Projects" />

              <Studies 
                path='/studies' 
                className='ContentBox'
                id="Studies" />
              
              <Attributions 
                path='/attributions' 
                className='ContentBox'
                id="Attributions" />
              
              <Contact 
              path='/contact' 
              className='ContentBox'
              id="Contact" />

              <Blackjack path='/blackjack' />

              <ToDo path='/toDo' />

              <ApiCallApp path='/api/*' />
              
            </Router>
         );
    }
}
 
export default ContentList;