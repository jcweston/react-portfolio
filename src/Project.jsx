import React, { Component } from 'react'
import { Link } from '@reach/router'
import Clipboard from './Images/Clipboard.svg'
import Spaceship from './Images/Spaceship.svg'
import Blackjack from './Images/Card.svg'
import Portfolio from './Images/Portfolio.svg'


class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Clipboard:Clipboard,
            Spaceship:Spaceship,
            Blackjack:Blackjack,
            Portfolio:Portfolio
         }
         this.link="Link"
         this.gitHub="GitHub"
    }
    render() { 

        if (this.props.link==="X") {
            this.link=""
        }
        if (this.props.gitHub==="X") {
            this.gitHub=""
        }

        return (
            <div className="ContentRow">
                {this.linkSelect()}
            </div>
            
         );
    }

    linkSelect = () => {
        const img=this.state[this.props.image]
        if (this.props.linkType === "external") {
            return (
                <div>
                   <a href={this.props.link}>
                        <img 
                            className="ProjectIcon" 
                            src={this.props.img} 
                            alt={`${this.props.image} Icon`}/>
                    </a>
                    <div className="Column">
                        <a href={this.props.link}><h5 className="Link">{this.link}</h5></a>
                        <a href={this.props.gitHub}><h5 className="Link">{this.gitHub}</h5></a> 
                    </div> 
                </div>
            )
        } else {
            return (
                <div>
                   <Link to={this.props.link}>
                        <img 
                            className="ProjectIcon" 
                            src={img} 
                            alt={`${this.props.image} Icon`}/>
                    </Link>
                    <div className="Column">
                        <Link to={this.props.link}><h5 className="Link">{this.link}</h5></Link>
                        <a href={this.props.gitHub}><h5 className="Link">{this.gitHub}</h5></a> 
                    </div> 
                </div>
            )
        }
    }
}
 
export default Project;