import React, { Component } from 'react';
import Task from './Task'
import CompletedTask from './CompletedTask'

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            formValue:"",
            tasks:[],
            completed:[]
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
                        deleteTask={this.deleteTask}
                        taskCompleted={this.taskCompleted}/>
                )})}
                {this.state.completed.map((task,i) => {
                return (
                    <CompletedTask 
                        key={i}
                        task={task}
                        deleteTask={this.deleteTask}
                        taskCompleted={this.taskCompleted}/>
                )})}
            </div>
            <button onClick={this.deleteStorage}>Clear Storage</button>    
        </>
         );
    }

    componentDidMount = () => {
        let arr = this.retrieveStorage('tasks')
        console.log(arr)
        
          this.setState({
            tasks:arr
           })
        
    }

    retrieveStorage = (type) => {
        let string = localStorage.getItem(type)
        if (string===null) {
            return []
        }
        return string.split('%%')
    }

    saveStorage = (arr,type) => {
        const storageString=arr.join('%%')
        localStorage.clear()
        localStorage.setItem(type,storageString)
    }

    onSubmit = (event) => {
        event.preventDefault()
        const newTask=this.state.formValue
        let arr=this.state.tasks
        arr.push(newTask)
        this.saveStorage(arr,'tasks')
        this.setState(
            {tasks:arr,
            formValue:""}
        )
    }

    deleteStorage = () => {
        localStorage.clear()
        this.setState ({
            tasks:[]
        })
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
        this.saveStorage(arr)
    }

    taskCompleted = (task) => {
        let obj=this.state
        for (let i = 0; i < obj.tasks.length; i++) {
            if (obj.tasks[i]===task)
            obj.completed.push(obj.tasks.splice(i,1)[0])
        }
        this.setState({obj},console.log(this.state))
    }
}
 
export default ToDo;
