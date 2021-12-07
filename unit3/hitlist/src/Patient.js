import React from 'react';
import AppointmentCard from './AppointmentCard'

function Patient(props){
    console.log(props);
    return ( 
        <div>
            <img src={props.patient.image}alt= ""/>
            <h1> Name:{props.patient.name}</h1>
        </div>

    );
}

export default Patient