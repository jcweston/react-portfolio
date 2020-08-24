import React, { Component } from 'react';
import Task from './Task'
import CompletedTask from './CompletedTask'
import StateView from '../StateView'

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
        let completedArr = this.retrieveStorage('completed')
          this.setState({
            tasks:arr,
            completed:completedArr
           })
        
    }

    retrieveStorage = (type) => {
        let string = localStorage.getItem(type)
        if (string===null) {
            return []
        }
        return string.split('%%')
    }

    saveStorage = () => {
        const tasksStorage=this.state.tasks.join('%%')
        const completedStorage=this.state.completed.join('%%')
        console.log(this.state)
        localStorage.clear()
        localStorage.setItem('tasks',tasksStorage)
        localStorage.setItem('completed',completedStorage)
    }

    onSubmit = (event) => {
        event.preventDefault()
        const newTask=this.state.formValue
        let arr=this.state.tasks
        arr.push(newTask)
        this.saveStorage()
        this.setState(
            {tasks:arr,
            formValue:""},this.saveStorage())
    }

    deleteStorage = () => {
        localStorage.clear()
        this.setState ({
            tasks:[],
            completed:[]
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
        let completedArr=this.state.completed
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]===task) {
                arr.splice(i,1)
            } 
        }
        for (let i = 0; i<completedArr.length; i++) {
            if (completedArr[i]===task) {
                completedArr.splice(i,1)
            }
        }
        this.setState({
            tasks:arr,
            completed:completedArr
        }, this.saveStorage())
        
    }

    taskCompleted = (task) => {
        let obj=this.state
        let complete = false
        for (let i = 0; i < obj.tasks.length; i++) {
            if (obj.tasks[i]===task) {
              obj.completed.push(obj.tasks.splice(i,1)[0]) 
              complete=true 
            }
            
        }
        for (let i = 0; i < obj.completed.length; i++) {
            if (complete===false && obj.completed[i]===task)
            obj.tasks.push(obj.completed.splice(i,1)[0])
        }
        this.setState({obj},this.saveStorage())
    }
}
 
export default ToDo;
