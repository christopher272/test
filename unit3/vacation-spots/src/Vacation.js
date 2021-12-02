import React from 'react'

function VacationCard(props) {
    return(
        <div>
            <h2>{props.VacationCard.place}</h2>
            <p>{props.VacationCard.price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
            <p>{props.VacationCard.timeToGo}</p>
        </div>
    )
}

export default VacationCard