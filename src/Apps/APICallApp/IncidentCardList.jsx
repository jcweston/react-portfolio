import React, { Component } from 'react';
import IncidentCard from './IncidentCard'

class IncidentCardList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        if (this.props.isLoading===true) {
            return (
                <h3>
                    Loading...Please Wait
                </h3>
            )
        } else {
            console.log(this.props)
            return (
              <>
                {this.props.temp && <IncidentCard data={this.props.temp} />}
                {this.props.data.map((element,i) => {
                    return ( 
                        <div key={i}>
                            <IncidentCard data = {element}/>
                        </div>
                    );   
                })}    
              </>  
               
            )
        }

        
    }
}
 
export default IncidentCardList;