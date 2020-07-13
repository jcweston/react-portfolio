import React, { Component } from 'react';
import Header from './Header'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
      let state=this.props.state
      
        return ( 
            <div className="Column , Navbar">
            {state.headers.map((item,i)=>{  
                return (
                  <Header 
                    onClick={this.props.onClick} 
                    name={item} 
                    visibility={state[item.toLowerCase()]} 
                    key={i} />
                )}
              )} 
            </div>
         );
    }
}
 
export default Navbar;