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
        if (this.props.task==="") {
            return null
        }
        else {
        const deleteImg=this.state.deleteImg
        return ( 
            <div className="taskCard">
                <button onClick={()=>this.props.deleteTask(this.props.task)} className="deleteButton" >
                    <img src={deleteImg} alt="delete image"/>
                </button>
                <p className="taskText">{this.props.task}</p>
                <button onClick={()=>this.props.taskCompleted(this.props.task)}>Completed</button>
            </div>
            
         );
    }}
}
 
export default Task;