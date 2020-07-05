import React, { Component } from 'react';

class Subheader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let name=this.props.name
        return ( 
            <h3 className="Subheader">{name}</h3>
         );
    }
}
 
export default Subheader;