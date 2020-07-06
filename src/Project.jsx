import React, { Component } from 'react'
import Clipboard from './Images/Clipboard.svg'
import Spaceship from './Images/Spaceship.svg'
import Blackjack from './Images/Card.svg'
import Portfolio from './Images/Portfolio.svg'
import ContentBox from './ContentBox';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let obj={
            Clipboard:Clipboard,
            Spaceship:Spaceship,
            Blackjack:Blackjack,
            Portfolio:Portfolio
        }
        let img=obj[this.props.image]
        return (
            <div className="ContentRow">
                <a href={this.props.link}>
                    <img 
                    className="ProjectIcon" 
                    src={img} 
                 alt={`${this.props.image} Icon`}/>
                </a>
                
                <div className="Column">
                    <a href={this.props.link}><h5 className="Link">Link</h5></a>
                    <a href={this.props.gitHub}><h5 className="Link">GitHub</h5></a> 
                </div>
                
            </div>
            
         );
    }
}
 
export default Project;