import React from 'react'

function Die(props) {
    console.log(props)
    return(
        <div> 
            <h1>{props.Dice}</h1>
        </div>
    )
}

export default Die