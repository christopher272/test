import React from 'react'
import Badge from './Badge'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            birthPlace: '',
            phoneNumber: '',
            favoriteFood: '',
            aboutMe: '',
            badges: [],
        }
        this.handleChange =this.handleChange.bind(this)
        this.handleSubmit =this.handleSubmit.bind(this)
}
    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value})
    }
    handleSubmit(event) {
    event.preventDefault()
    const firstName = this.state.firstName
    const lastName = this.state.lastName
    const email = this.state.email  
    const birthPlace = this.state.birthPlace
    const phoneNumber = this.state.phoneNumber
    const favoriteFood = this.state.favoriteFood
    const aboutMe = this.state.aboutMe;

    this.setState((prevState) => ({badges:[ ...prevState.badges, {firstName, lastName, email, birthPlace, phoneNumber, favoriteFood, aboutMe}
    ]})
    )
    this.setState({ firstName: '',
                    lastName: '',
                    email: '',
                    birthPlace: '',
                    phoneNumber: '',
                    favoriteFood: '',
                    aboutMe: '',
                }
    
    
    )
}

// badges = ()=> {
//     return 
// }
render() 
{
    const badges = this.state.badges.map(card => <Badge key={card.id} badge={card}/>)
    console.log(this.state.badges)
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange}
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={this.state.firstName}></input>
                <input onChange={this.handleChange}
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={this.state.lastName}></input>
                        <br />
                <input onChange={this.handleChange}
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}></input>
                <input onChange={this.handleChange}
                    type="text"
                    placeholder="Place of Birth"
                    name="birthPlace"
                    value={this.state.birthPlace}></input>
                        <br />
                <input onChange={this.handleChange}
                    type="number"
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={this.state.phoneNumber}></input>
                <input onChange={this.handleChange}
                    type="text"
                    placeholder="Favorite Food"
                    name="favoriteFood"
                    value={this.state.favoriteFood}></input>
                        <br />
                <textarea onChange={this.handleChange}
                    name="aboutMe"
                    placeholder="Tell us about yourself."
                    value={this.state.aboutMe}></textarea>
                    <br />
                <button>Submit</button>
            
            </form>  
            {badges}
            </div> 
        
        )    
    }
}
export default App 