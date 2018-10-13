import React, {Component} from 'react';

class FilterString extends Component{
    constructor(){
        super()

        this.state = {
            names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredNames: []
        }
    }

    handleInput(value){
        this.setState({
            userInput: value
        })
    }

    filterNames(userInput){
        let {names} = this.state;
        let filteredNames = []

        for(let i=0; i<names.length; i++){
            if(names[i].includes(userInput)){
                filteredNames.push(names[i])
            }
        }
        this.setState({filteredNames: filteredNames})
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Names: { JSON.stringify(this.state.names, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleInput(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filterNames(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered: { JSON.stringify(this.state.filteredNames, null, 10)}</span>
            </div>
        )
    }
}

export default FilterString