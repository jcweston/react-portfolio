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
   
      return ( 
        <Link to={`/${linkName}`}>
          <h2 
            className="HeaderActive" 
            // onClick={e=>onClick(name)}
            >
              {name}
          </h2>
        </Link>
        
       );
    } 
}
 
export default Header;
