// Write your code
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  State = {randomnumber: 0}

  ClickedRandomNumber = () => {
    this.setState(prevState => ({
      randomNumber: prevState.randomNumber + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="title">Random Number</h1>
          <p className="description">
            {' '}
            Generate a random number in the range of 0 to 100{' '}
          </p>
          <button
            type="button"
            className="button"
            onClick={this.ClickedRandomNumber}
          >
            Generate
          </button>
          <p className="randomNumber"> {randomNumber} </p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
