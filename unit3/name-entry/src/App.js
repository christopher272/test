import React from 'react'


class NameForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName:[""],
            lastName:[""],
            FullName:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

     handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value})

     }
     handleSubmit(event) {
       event.preventDefault()
       const firstName = this.state.firstName
       const lastName = this.state.lastName
       this.setState(
           { FullName: [...this.state.FullName, firstName + " " + lastName]})
           this.setState({firstName:[""]})
           this.setState({lastName:[""]})
       console.log(this.state.firstName)
       console.log(this.state.FullName)
     }
     render() {
       return (
         <form onSubmit={this.handleSubmit} 
        >
              <input
                  type="text"
                  value={this.state.firstName}
                  name="firstName"
                  placeholder="First Name"
                  onChange={this.handleChange}
              />
    <br />
              <input
                  type="text"
                  value={this.state.lastName}
                  name="lastName"
                  placeholder="Last Name"
                  onChange={this.handleChange}
              />
    <br />
              <button>submit</button>
         <h1>{this.state.firstName}  {this.state.lastName}</h1>
   {this.state.FullName.map((name, i) => <Name key={i} FullName = {name} /> 
       )}
       <div>
         <h3>{name}</h3>
       </div>
           </form>)}
           
           
}

export default NameForm