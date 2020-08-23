import React, { Component } from 'react';

class SearchButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <select onChange = {(e) => {this.props.typeSearch(e.target.value)}}>
                <option value="type">Select Type</option>
                <option value="crash">Crash</option>
                <option value="hazard">Hazard</option>
                <option value="theft">Theft</option>
                <option value="unconfirmed">Unconfirmed</option>
                <option value="infrastructure_issue">Infrastructure</option>
                <option value="chop_shop">Chop Shop</option>
            </select>
         );
    }
}
 
export default SearchButton;