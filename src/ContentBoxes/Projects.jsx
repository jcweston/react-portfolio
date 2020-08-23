import React from 'react';
import Subheader from '../Subheader'
import Project from '../Project'

const Projects = () => {
    return ( 
        <div>
            <h2 className="BoxHeader">Projects</h2>
                <Subheader name="To-Do List" />
                  <div className="ContentRow">
                  <Project 
                        linkType="internal"
                      image="Clipboard" 
                      link="/toDo" 
                      gitHub="X" />
                    <p className="ProjectText">One of the first small apps I completed using HTML, Javascript and CSS.<br></br>A simple to-do list, with local storage and sort functions.</p>
                  </div>
                <Subheader name="Blackjack" />
                  <div className="ContentRow">
                    <Project 
                    linkType='internal'
                      image="Blackjack" 
                      link="/blackjack" 
                      gitHub="X" />
                    <p className="ProjectText">Another HTML/Javascript mini-app.<br></br>A complete (single-player) replayable game of blackjack, with a local storage win/loss log.</p>
                  </div>
                <Subheader name="Portfolio Version 1" />
                  <div className="ContentRow">
                    <Project 
                      image="Portfolio" 
                      link="https://jameswestonold.netlify.app/" 
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
                  <Subheader name="Api Call Project" />
                <div className="ContentRow">
                    <Project 
                      image="Bike" 
                      link="/api" 
                      gitHub="X" />
                  <p className="ProjectText">A project involving making API calls and visualising data.<br></br>A searchable list of bike incidents.</p>
                  </div>
        </div>
     );
}
 
export default Projects;