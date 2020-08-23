import React, { Component } from 'react';



class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { }
        this.SearchValue=""
    }
    render() { 
        return ( 
        <form>
            <input placeholder={this.props.type} onChange={(event) => {
                this.props.updateParams(this.props.type,event.target.value)
            }}>
            </input>
        </form> );
    }
}
 
export default SearchBar;
