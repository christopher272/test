import React from 'react'
import Die from './Die'
class App extends React.Component { state={
    diceValues:[Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6)]
    } ;
diceRoll = () => this.setState({diceValues:[Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 6)]})
render() {
    return (
        <div className="DiceContainer">
            {this.state.diceValues.map((dice, index) => {
                return (
                    <Die Dice={dice} index={index}/>
                )
            })}
            <button onClick={this.diceRoll}>Dice Roll</button>
        </div>
    )
}

}
export default App