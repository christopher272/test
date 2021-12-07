import React from 'react'

function Badge(props) {
    return(
        <div className="badge">
            <h3>{props.badge.firstName}'s badge</h3> <br />
            <p>{props.badge.firstName} {props.badge.lastName}</p> <br />
            <p>{props.badge.email}</p>
            <p>{props.badge.birthPlace}</p>
            <p>{props.badge.phoneNumber}</p>
            <p>{props.badge.favoriteFood}</p>
            <p>{props.badge.aboutMe}</p>        
        </div>
    )

}
export default Badge