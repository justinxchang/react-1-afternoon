import React, {Component} from 'react';

class Sum extends Component{
    constructor(){
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleNum1(value){
        this.setState({
            number1: parseInt(value, 10)
        })
    }

    handleNum2(value){
        this.setState({
            number2: parseInt(value, 10)
        })
    }

    add(number1, number2){
        let sum = number1 + number2
        this.setState({
            sum: sum
        })
    }
    
    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={(e) => this.handleNum1(e.target.value)}></input>
                <input className="inputLine" onChange={(e) => this.handleNum2(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.add(this.state.number1, this.state.number2)}>Add</button>
                <span className="resultsBox">{this.state.sum}</span>
            </div>
        )
    }
}

export default Sum