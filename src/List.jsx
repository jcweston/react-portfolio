import React, { Component } from 'react';

class List extends Component {
    render() { 
        return ( 
        <ul>
            {this.props.list.map((item, i)=> {
                return (
                <li key={i}>
                    <p>
                        {item}
                    </p>
                    <button onClick={() => this.props.updatePriorityIngredient(item)}>
                        Make this the priority ingredient
                    </button>
                    <button onClick={() => this.props.deleteIngredient(item)}>
                       Delete
                    </button>
                </li>)
            })}
        </ul> 
        );
    }
}
 
export default List;