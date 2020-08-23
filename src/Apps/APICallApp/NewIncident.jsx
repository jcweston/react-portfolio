import React, { Component } from 'react';

class NewIncident extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            address: "",
            type: ""
         }
    }
    render() { 
        return ( 
            <div>
                <form onSubmit={this.submitHandler}>
                    <label htmlFor="name">Name</label>
                    <input 
                    onChange={(e) => this.changeHandler(e.target.value,'name')} 
                    id="name"
                     type="text" 
                     value={this.state.name}></input>
                    <label htmlFor="address">Address</label>
                    <input onChange={(e) => this.changeHandler(e.target.value,'address')}
                    id="address" type="text" value={this.state.address}></input>
                    <label htmlFor="type">Type</label>
                    <input onChange={(e) => this.changeHandler(e.target.value,'type')}
                    id="type" type="text" value={this.state.type}></input>
                    <button>Submit</button>
                </form>
            </div>
         );
    }

    changeHandler = (value,key) => {
        this.setState({
            [key]:value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.addItem(this.state)
        this.setState({
            name:"",
            address:"",
            type:""
        })
    }
}
 
export default NewIncident;