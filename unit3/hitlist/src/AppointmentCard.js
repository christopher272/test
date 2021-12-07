import React, { Component } from 'react'
import Patient from './Patient'
class AppointmentCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            targets: []
        }
    }
    componentDidMount() {
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
        .then(response => response.json())
        .then(data => {
        this.setState({
            targets: data
        })
        console.log(data.name)
        });
    
        
    }
    render() {
        const patients = this.state.targets.map((patient, index) => <Patient key ={index} patient = {patient} />)
        return ( 
            <div>
                {patients}
            </div>
        )
    }
}
export default AppointmentCard