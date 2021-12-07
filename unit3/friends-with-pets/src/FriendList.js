import React from 'react'
import FriendsList from './Friends'
import FriendPets from './List'

function App() {
    const friends = FriendPets.map(card => <FriendsList key={card.id} Friends={card} />)
  
    return(
        <div>
            {friends}

        </div>
    )
} 
export default App