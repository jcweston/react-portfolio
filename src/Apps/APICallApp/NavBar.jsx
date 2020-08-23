import React, { Component } from 'react';
import NavButton from './NavButton'
import SearchButton from './SearchButton'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="NavBar">
                {this.pageButton("Back",-10)}
                {this.pageButton("Back",-1)}
                {this.pageButton("Forward",1)}
                {this.pageButton("Forward",10)}
                <SearchButton
                    typeSearch={this.props.typeSearch}/>
            </div>

         );
    }

    pageButton = (type,number) => {
        let active=true
        let buttonClass="navButton"
        let absNum=Math.abs(number)
        if (absNum>=this.props.page && number<=0) {
            active=false
            buttonClass="inactiveNavButton"
        }
        return (
                <NavButton 
                    className={buttonClass}
                    type={type} 
                    number={number} 
                    active={active}
                    navButtonHandler={this.props.navButtonHandler}/>
            )
    }
}
 
export default NavBar;