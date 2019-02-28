import React, { Component } from 'react'
import Die from './Die'

class CenterLudo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      roll: props.gameState.roll,
    }
  }

  Throw = (props) => (
    <div onClick={() => props.roll()} className={`btn throw`}>
      <h3>Throw Now</h3>
    </div>
  )

  componentWillMount = () => {
    // console.log(this.props.roll['1'].roll())
  }

  render () {
    // console.log(this.props.gameState.roll);
    let dies = !this.props.gameState.roll ? [
      <Die num={this.props.rolled[0]} key={1} />,
      <Die key={2} num={this.props.rolled[1]} />
    ] : [<this.Throw roll={this.props.roll} key={1} />]
    return (
      <div className="center-ludo size-3 bg-warning">
      {dies}
      </div>
    )
  }
}

export default CenterLudo
