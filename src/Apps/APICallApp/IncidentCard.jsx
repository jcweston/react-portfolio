import React, { Component } from 'react';
import { Router, Link } from '@reach/router'

const IncidentCard = (props) => {
    return ( 
        <div className="IncidentCard">
                <Link to={`/api/incident/${props.data.id}`}>
                    <h4>Incident: {props.data.title}</h4>
                </Link>
                <p>Address: {props.data.address}</p>
                <p>Type: {props.data.type}</p>
                <p>Description: {props.data.description}</p>
        </div>
        
     );
}
 
export default IncidentCard;