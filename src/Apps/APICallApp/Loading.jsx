import React, { Component } from 'react';

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        if (this.props.isLoading) {
            return (
                <p>Loading</p>
            )
        } else {
            return ( 
                <div>
                    {this.props.children}
                </div>
         );
        }
        
    }
}
 
export default Loading;