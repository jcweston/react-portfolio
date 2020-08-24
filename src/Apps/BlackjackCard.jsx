import React from 'react';

const BlackjackCard = (props) => {
    const value=props.value
    const name=props.name
    return ( 
        
        <div className='BlackjackCard'>
            <h4>{name}</h4>
            <h4>{value}</h4>
        </div>
     );
}
 
export default BlackjackCard;