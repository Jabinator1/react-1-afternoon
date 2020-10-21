import React, {Component} from "react"

class FilterString extends Component {

    constructor() {
        super()
        this.state = {
            friends: ["Hannah", "Miriam", "Enoch", "Sterling", "Grace", "Xavier", "Jaden"],
            userInput: "",
            filteredArray: []
        }
    }

    inputChange(value) {
        this.setState({ userInput: value })
    }

    onClickFunc(userInput) {
        let { names } = this.state
        let filteredNames = []

        for (let i in names) {
            names[i].includes(userInput) ? filteredNames.push(names[i])
            : null
        }

        this.setState({filteredNames: filteredNames})
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Names: { JSON.stringify(this.state.friends, null, 10) }</span>
                <input className="inputLine" onChange={e => this.inputChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.onClickFunc(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) }</span>
            </div>
        )
    }
}

export default FilterString 