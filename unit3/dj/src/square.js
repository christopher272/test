import React from 'react'

function Square(props) {
    console.log(props)
    return(
       <div style = {{border: '1px solid', height: '250px', width: '250px', background: props.color}}> </div>
    )}




export default Square