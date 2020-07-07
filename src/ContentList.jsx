import React, { Component } from 'react';
import Subheader from './Subheader'
import Project from './Project'

class ContentList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let state=this.props.state
        let check=this.props.checkPriority
        return ( 
            <div className="Column , ContentList">
              <div className={`ContentBox , ${state.home}`} id="Home">
              <h2 className="BoxHeader">Home</h2>
                <p> Welcome to my portfolio website.</p>
                <p>Please follow the buttons to the left to view my projects, learn more about me, and find my contact information.</p>
              </div>

              <div className={`ContentBox , ${state.background}${check("background")}`} id="Background">
                <h2 className="BoxHeader">Background</h2>
                <Subheader name="Trainee Web Developer" />
                  <p>Career changer, dedicated to building new skills and developing a strong portfolio</p>
                  <p>Quick learner with a new passion for web development</p>
                <Subheader name="Technical Experience" />
                  <p>Eight years of experience in the chemical industry</p>
                  <p>Comfortable using and maintaining a large variety of analytical and process equipment</p>
                  <p>Communicated with customers and sales teams to deliver high-quality technical projects</p>
                  <Subheader name="Degree" />
                  <p>I hold a Bachelor's Degree in Chemistry with Forensic Science from Keele University</p>
                  
              </div>

              <div className={`ContentBox , ${state.projects}${check("projects")}`}id="Projects">
              <h2 className="BoxHeader">Projects</h2>
                <Subheader name="To-Do List" />
                  <div className="ContentRow">
                  <Project 
                      image="Clipboard" 
                      link="https://jamesweston.netlify.app/to-do-list%20app/to-do%20list" 
                      gitHub="X" />
                    <p className="ProjectText">One of the first small apps I completed using HTML, Javascript and CSS.<br></br>A simple to-do list, with local storage and sort functions.</p>
                  </div>
                <Subheader name="Blackjack" />
                  <div className="ContentRow">
                    <Project 
                      image="Blackjack" 
                      link="https://jamesweston.netlify.app/blackjack/blackjack" 
                      gitHub="X" />
                    <p className="ProjectText">Another HTML/Javascript mini-app.<br></br>A complete (single-player) replayable game of blackjack, with a local storage win/loss log.</p>
                  </div>
                <Subheader name="Portfolio Version 1" />
                  <div className="ContentRow">
                    <Project 
                      image="Portfolio" 
                      link="https://jamesweston.netlify.app/" 
                      gitHub="https://github.com/jcweston/Portfolio-Website" />
                    <p className="ProjectText">A previous version of this portfolio.<br></br>A functioning, though still work-in-progress, website built using HTML, Javascript and CSS.<br></br>Completely rebuilt into my current portfolio while learning to use React.</p>
                  </div>
                <Subheader name="Spaceship Designer" />
                <div className="ContentRow">
                    <Project 
                      image="Spaceship" 
                      link="X" 
                      gitHub="X" />
                  <p className="ProjectText">My first major project using React, this app also required me to become very familiar with HTML Canvas.<br></br>An app designed for science-fiction fans, the Spaceship Designer takes input from a few slider bars and generates a detailed cutaway spaceship image, which can be randomized for variety, then saved as a jpeg image.</p>
                  </div>
              </div>

              <div className={`ContentBox , ${state.studies}${check("studies")}`} id="Studies">
              <h2 className="BoxHeader">Studies</h2>
                <Subheader name="FreeCodeCamp Certifications" />
                <p>My knowledge of JavaScript, HTML and CSS fundamentals began with FreeCodeCamp courses, where I gained the below certifications:</p>
                <a href="https://www.freecodecamp.org/certification/jamesweston/javascript-algorithms-and-data-structures"><p>Javascript Algorithms and Data Structures</p></a>
                
              </div>

              <div className={`ContentBox , ${state.attributions}${check("attributions")}`} id="Attributions">
              <h2 className="BoxHeader">Attributions</h2>
                <Subheader name="Placeholder" />
                <p> Icons attributed to <a href="https://fontawesome.com/license">Fontawesome.io</a></p>
                <p>Thanks to Ian Willshaw for design advice</p>
              </div>
              <div className={`ContentBox , ${state.contact}${check("contact")}`} id="Contact">
              <h2 className="BoxHeader">Contact</h2>
                <h5>Email: <a href="mailto:j.c.weston@outlook.com">j.c.weston@outlook.com</a></h5>
                <h5>Facebook: <a href="https://www.facebook.com/james.c.weston">www.facebook.com/james.c.weston</a></h5>
                <h5>LinkedIn: <a href="https://www.linkedin.com/in/james-weston-00709593">www.linkedin.com/in/james-weston-00709593</a></h5>
              </div>
            </div>
         );
    }
}
 
export default ContentList;