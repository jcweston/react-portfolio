import React, { Component } from 'react';
import {Link} from '@reach/router'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    let name=this.props.name
    let linkName=name.toLowerCase()
    if (name==='Home') {
      linkName=''
    }
   
      return ( 
        <Link to={`/${linkName}`}>
          <h2 
            className="HeaderActive" 
            >
              {name}
          </h2>
        </Link>
        
       );
    } 
}
 
export default Header;
