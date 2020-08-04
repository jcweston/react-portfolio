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

class ContentList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let state=this.props.state
        let check=this.props.checkPriority
        return ( 
            <Router className="Column , ContentList">
              <Home 
                path='/home' 
                className={`ContentBox , ${state.home}`} 
                id="Home" />

              <Background path='/background' className={`ContentBox , ${state.background}${check("background")}`} id="Background" />

              <Projects path='/projects' className={`ContentBox , ${state.projects}${check("projects")}`}id="Projects" />

              <Studies path='/studies' className={`ContentBox , ${state.studies}${check("studies")}`} id="Studies" />
              
              <Attributions path='/attributions' className={`ContentBox , ${state.attributions}${check("attributions")}`} id="Attributions" />
              
              <Contact path='/contact' className={`ContentBox , ${state.contact}${check("contact")}`} id="Contact" />

              <Blackjack path='/blackjack' />

              <ToDo path='/toDo' />
              
            </Router>
         );
    }
}
 
export default ContentList;