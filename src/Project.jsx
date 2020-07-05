import React, { Component } from 'react'
import Clipboard from './Images/Clipboard.svg'
import Spaceship from './Images/Spaceship.svg'
import Blackjack from './Images/Card.svg'
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
            Blackjack:Blackjack
        }
        let img=obj[this.props.image]
        return (
            <div className="ContentRow">
                <img className="ProjectIcon" 
                src={img} alt="Clipboard"/>
                <div className="Column">
                    <h4 className="Link">{this.props.link}</h4>
                    <h4 className="Link">{this.props.gitHub}</h4> 
                </div>
                
            </div>
            
         );
    }
}
 
export default Project;