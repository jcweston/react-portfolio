import React from 'react';

const StateView = (props) => {
    const tasks=props.state.tasks
    const completed=props.state.completed
    const value=props.state.formValue
    return ( 
        <div>
           <h4>Tasks</h4>
            {tasks.map((element,i)=>{
                return (
                    <p key={i}>{element}</p>
                )
            })}
            <h4>Completed</h4> 
            {completed.map((element,i)=>{
                return (
                    <p key={i}>{element}</p>
                )
            })}
        </div>
        
     );
}
 
export default StateView;