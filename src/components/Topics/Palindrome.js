import React, {Component} from "react"

class Palindrome extends Component {

    constructor(){
        super()
        this.state = {
            userInput: "",
            palindrome: ""
        }
    }

    onChange = (input) => {
        this.setState({
            userInput: input
        })
    }

    onClick = () => {
        const {userInput} = this.state

        let reverse = userInput.split("").reverse().join("")

        if (reverse === userInput) {
            this.setState({
                palindrome: "true"
            })
        } else {
            this.setState({
                palindrome: "false"
            })
        }
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={e => this.onChange(e.target.value)} type="text" placeholder="Word Here"/>
                <button className="confirmationButton" onClick={() => this.onClick}>Check</button>
                <span className="resultsBox">{this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome 