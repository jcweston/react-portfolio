import React, { Component } from 'react';
import deleteImg from '../Images/Delete.svg'

class CompletedTask extends Component {
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
                <button onClick={()=>this.props.deleteTask(this.props.task)} className="deleteButton">
                <img src={deleteImg} alt="delete image" />
                </button>
                <p className="taskText"><s>{this.props.task}</s></p>
                <button onClick={()=>this.props.taskCompleted(this.props.task)}>Completed</button>
            </div>
            
         );
    }
}
 
export default CompletedTask;