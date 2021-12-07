import React from 'react'
function Map(props) {
    console.log(props)
    return(
        <div> 
            <h1>{props.FullName}</h1>
        </div>
    )
}

export default Map