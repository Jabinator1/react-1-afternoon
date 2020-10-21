import React, {Component} from "react"

class FilterObject extends Component {

    constructor() {
        super()
        this.state = {
            employees: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
              ],
            userInput: "",
            filteredArray: []
        }
    }

    inputChange = value => {
        this.setState({
            userInput: value
        })
    }

    onClickFunc = (userInput) => {
        const {employees} = this.state
        let filteredEmployees = []

        for (let item in employees) {
            console.log(item)
            item.hasOwnPropery(userInput) 
            ? filteredEmployees.push(item) 
            : null
        }
        this.setState({ filteredEmployees: filteredEmployees})
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.employees, null, 10)}</span>
                <input className="inputLine" onChange={e => this.inputChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.onClickFunc(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject 