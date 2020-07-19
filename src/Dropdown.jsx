import React, { Component } from 'react';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="Dropdown">
                
                {this.props.headers.map((item,i)=>{  
                    
                return (
                  <button 
                    onClick={this.props.onClick(item)}
                    key={i}>
                        {item}
                    </button> 
                    
                )}
              )} 
              
            </div>

         );
    }
}
 
export default Dropdown;