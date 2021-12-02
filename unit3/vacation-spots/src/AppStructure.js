import React from 'react'
import VacationSpots from "./VacationSpots"
import VacationCard from "./Vacation"

function App(){
  const vacation = VacationSpots.map(card => <VacationCard key = {card.id} VacationCard={card} />)

  
  
  
  return(
    <div>
          {vacation}
    </div>)
}

export default App;