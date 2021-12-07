import React from 'react'
import Square from './square';



class App extends React.Component { state = {
        colors: ["white", "black", "black", "white"]
        };
  djSmall = () => {  
    console.log(this.state.colors)          
    this.setState(({colors}) => { 
      return {
        colors: colors.map(color => color !== 'white' ? 'white' : 'black')
      }
    })
  }
  partyDj = () => {  
    console.log(this.state.colors)               
    this.setState(({colors}) => {
      return {colors: ['purple', 'purple', colors[2], colors[3]]
    }
    })
  }
  
  proDjLeft = () => {            
    console.log(this.state.colors)   
    this.setState(({colors}) => {
      return {colors: [colors[0], colors[1], 'blue', colors[3]]
    }
    })
  }
  
  proDjRight = () => {            
    console.log(this.state.colors)   
    this.setState(({colors}) => {
      return {colors: [colors[0], colors[1], colors[2], 'blue']
    }
    })
  }
  bigDjOne = () => {    
    console.log(this.state.colors)   
    this.setState(({colors}) => {
      return {colors: ["pink", colors[1], colors[2], colors[3]]
    }
    })
  }
  bigDjTwo = () => {           
    console.log(this.state.colors)   
    this.setState(({colors}) => {
      return {colors: [colors[0], "green", colors[2], colors[3]]
    }
    })
  }
  bigDjThree = () => {               
    console.log(this.state.colors)   
    this.setState(({colors}) => {
      return {colors: [colors[0], colors[1], "teal", colors[3]]
    }
    })
  }
  bigDjFour = () => {
    console.log(this.state.colors)   
    this.setState(({colors}) => {
      return {colors: [colors[0], colors[1], colors[2], "orange"],
    }
    })
  }
  
  render() {
    return (
      <div className="squareContainer">
        {this.state.colors.map((color, index) => {
          return (
          <Square color={color} index={index}/>
          )
        } )}
      <button onClick={this.djSmall}>DJ Small</button>
      <button onClick={this.partyDj}>Party DJ</button>
      <button onClick={this.proDjLeft}>Left Blue</button>
      <button onClick={this.proDjRight}>Right Blue</button>
      <button onClick={this.bigDjOne}>Big DJ One</button>
      <button onClick={this.bigDjTwo}>Big DJ Two</button>
      <button onClick={this.bigDjThree}>Big DJ Three</button>
      <button onClick={this.bigDjFour}>Big DJ Four</button>
      </div>
    )
  };



}
export default App;