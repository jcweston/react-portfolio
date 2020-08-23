import React, { Component } from 'react';
import IncidentCard from './IncidentCard';
import axios from 'axios';

class Incident extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLoading : true
         }
    }
    render() { 
        if (this.state.isLoading) {
            return (
                <p>loading</p>
            )
            } else if (this.state.err) {
               return (
                 <p>{this.state.err.response.status}</p>  
               ) 
                
        } else {
            return <IncidentCard data={this.state.data.incident} />
        }
    }

    componentDidMount = () => {
        this.getData()
    }

    getData = (type="type") => {
        const url = `https://bikewise.org:443/api/v2/incidents/${this.props.id}`
    
    
        axios.get(url)
          .then(res => {
            console.log(res)
            this.setState({
              data:res.data,
              isLoading:false
            })
          })
          .catch(err => {
            this.setState({
                isLoading:false,
                err:err
            })
          })
      }
}
 
export default Incident;