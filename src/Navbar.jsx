import React, { Component } from 'react';
import Header from './Header'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
      let headers=this.props.headers
      
        return ( 
            <div className="Column , Navbar">
            {headers.map((item,i)=>{  
                return (
                  <Header 
                    name={item}
                    key={i} />
                )}
              )} 
            </div>
         );
    }
}
 
export default Navbar;