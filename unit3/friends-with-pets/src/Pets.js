import React from 'react'


function Pets(props) {
    return(
        <div>
            <p>Name:{props.pets.name}<br></br>
            Breed: {props.pets.breed}</p>
        </div>
    )
}



export default Pets