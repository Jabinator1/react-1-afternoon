import React, {Component} from "react"

class EvenAndOdd extends Component {
    constructor() {
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: "",
        }
    }

    inputChange = value => {
        this.setState({
            userInput: value
        })
    }

    buttonClick = (userInput) => {
        let arr = userInput.split(",")
        // const {evenArray, oddArray} = this.state

        let even = []
        let odd = []

        for (let item of arr) {
            item % 2 === 0 ? even.push(parseInt(item, 10))
            // this.setState({evenArray: [...evenArray, item]})
            : odd.push(parseInt(item, 10))
            // this.setState({oddArray: [...oddArray, item]})
        }
        this.setState({
            evenArray: even,
            oddArray: odd,
        })

    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input onChange={e => this.inputChange(e.target.value)} className="inputLine"/>
                <button onClick={() => {this.buttonClick(this.state.userInput)}} className="conformationButton">Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdd 