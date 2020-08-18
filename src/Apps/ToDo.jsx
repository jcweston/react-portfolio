import React, { Component } from 'react';
import Task from './Task'

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            formValue:"",
            tasks:[]
         }
    }
    render() { 
        return ( 
        <>
            <h3>To-Do List</h3>
            <form onSubmit={this.onSubmit}>
                <label>New Task</label>
                <br></br>
                <input type="text" value={this.state.formValue}onChange={this.onChange}></input>
                <input type="submit" value="Add To List"></input>    
            </form>
            <div className="taskList">
                {this.state.tasks.map((task,i) => {
                return (
                    <Task 
                        key={i}
                        task={task}
                        deleteTask={this.deleteTask}/>
                )})}
            </div>    
        </>
         );
    }

    // componentDidMount = () => {
    //     const arr = localStorage.getItem('tasks')
    //     console.log(arr)
    //     if(arr) {
    //       this.setState({
    //         tasks:arr
    //        })
    //     }
    // }

    onSubmit = (event) => {
        console.log(this.state)
        event.preventDefault()
        const newTask=this.state.formValue
        let arr=this.state.tasks
        arr.push(newTask)
        // localStorage.setItem('tasks',[...arr])
        this.setState(
            {tasks:arr,
            formValue:""}
        )
    }

    onChange = (event) => {
        const value = event.target.value
        this.setState({
            formValue:value
        })
    }

    deleteTask = (task) => {
        let arr=this.state.tasks
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]===task) {
                arr.splice(i,1)
            } 
        }
        this.setState({
            tasks:arr
        })
    }
}
 
export default ToDo;
