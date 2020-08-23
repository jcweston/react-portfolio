import React, { Component } from 'react';

class NavButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const active=this.props.active
        const number=this.props.number
        const type=this.props.type
        const absNumber=Math.abs(this.props.number)
        return ( 
            <button 
            className={this.props.className}
            onClick={()=>{this.props.navButtonHandler(number,active)}}>
                {type+" "+absNumber}
            </button>
         );
    }
}
 
export default NavButton;