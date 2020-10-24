import React, {Component} from "react"

class Sum extends Component {
    constructor(){
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    onClick = () => {
        const {number1, number2} = this.state

        this.setState({
            sum: (number1 + number2)
        })
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={e => this.setState({number1: e.target.value})} placeholder="First number"/>
                <input className="inputLine" onChange={e => this.setState({number2: e.target.value})} placeholder="Second number"/>
                <button className="confirmationButton" onClick={() => this.onClick(this.onClick)}>Check</button>
                <span className="resultsBox">{this.state.sum}</span>
            </div>
        )
    }
}

export default Sum 