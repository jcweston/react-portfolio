import React, { Component } from 'react';
import ContentBox from './ContentBox'
import Header from './Header'
import Subheader from './Subheader'
import Project from './Project'

class ContentList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let state=this.props.state
        return ( 
            <div className="Column , ContentList">
              <div className={`ContentBox , ${state.home}`} id="Home">
              <h2 className="BoxHeader">Home</h2>
                <p> Welcome to my portfolio website.</p>
                <p>Please follow the buttons to the left to view my projects, learn more about me, and find my contact information.</p>
              </div>
              <div className={`ContentBox , ${state.background}`} id="Background">
                <h2 className="BoxHeader">Background</h2>
                <Subheader name="Trainee Web Developer" />
                  <p>Career changer, dedicated to building new skills and developing a strong portfolio</p>
                  <p>Quick learner with a new passion for web development</p>
                <Subheader name="Technical Experience" />
                  <p>Eight years of experience in the chemical industry</p>
                  <p>Comfortable using and maintaining a large variety of analytical and process equipment</p>
                  <p>Communicated with customers and sales teams to deliver high-quality technical projects</p>
              </div>
              <div className={`ContentBox , ${state.projects}`}id="Projects">
              <h2 className="BoxHeader">Projects</h2>
                <Subheader name="To-Do List" />
                  <div className="ContentRow">
                  <Project 
                      image="Clipboard" 
                      link="X" 
                      gitHub="X" />
                    <p className="ProjectText">One of the first small apps I completed, using direct DOM manipulation.<br></br>A simple to-do list, with local storage and sort functions.</p>
                  </div>
                <Subheader name="Blackjack" />
                  <div className="ContentRow">
                    <Project 
                      image="Blackjack" 
                      link="X" 
                      gitHub="X" />
                    <p className="ProjectText">Another DOM manipulation app.<br></br>A complete (single-player) replayable game of blackjack, with a local storage win/loss log.</p>
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
              <div className={`ContentBox , ${state.studies}`} id="Studies">
              <h2 className="BoxHeader">Studies</h2>
                <Subheader name="FreeCodeCamp" />
                <p>My knowledge of JavaScript, HTML and CSS fundamentals comes primarily from FreeCodeCamp courses.</p>
              </div>
              <div className={`ContentBox , ${state.pictures}`} id="Pictures">
              <h2 className="BoxHeader">Pictures</h2>
                <Subheader name="Placeholder" />
                <p> Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibuset magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultriciesnec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donecpede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Inte-ger tincidunt.</p>
              </div>
              <div className={`ContentBox , ${state.attributions}`} id="Attributions">
              <h2 className="BoxHeader">Attributions</h2>
                <Subheader name="Placeholder" />
                <p> Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibuset magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultriciesnec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donecpede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Inte-ger tincidunt.</p>
              </div>
              <div className={`ContentBox , ${state.contacts}`} id="Contacts">
              <h2 className="BoxHeader">Contacts</h2>
                <Subheader name="Placeholder" />
                <p> Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibuset magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultriciesnec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donecpede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Inte-ger tincidunt.</p>
              </div>
            </div>
         );
    }
}
 
export default ContentList;