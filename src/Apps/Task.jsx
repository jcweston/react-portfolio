import React, { Component } from 'react';
import deleteImg from '../Images/Delete.svg'

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            deleteImg:deleteImg
         }
    }
    render() { 
        const deleteImg=this.state.deleteImg
        return ( 
            <div className="taskCard">
                <button onClick={()=>this.props.deleteTask(this.props.task)}>
                    X
                </button>
                <p className="taskText">{this.props.task}</p>
            </div>
            
         );
    }
}
 
export default Task;