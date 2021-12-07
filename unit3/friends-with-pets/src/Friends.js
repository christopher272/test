import React from 'react'
import Pet from './Pets'


function FriendsList(props) {let petArr= props.Friends.pets.map(
    (wags => <Pet key={wags.id} pets={wags}/>)
)
    return(
        <div>
            <h1>{props.Friends.name}</h1>
            <h2> Age: {props.Friends.age}</h2>
                <p>{petArr}</p><br></br>
        </div>

    )
  
}
      
export default FriendsList  