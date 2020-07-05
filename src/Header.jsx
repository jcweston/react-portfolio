import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    let name=this.props.name
    let onClick=this.props.onClick
    let visibility=this.props.visibility
    if (visibility==="Visible") {
      return ( 
        <h2 
          className="HeaderActive" 
          onClick={e=>onClick(name)}>
            {name}
        </h2>
       );


    }
    else {
      return ( 
      <h2 
        className="Header" 
        onClick={e=>onClick(name)}>
          {name}
      </h2>
     );
    }
    
  }
}
 
export default Header;
