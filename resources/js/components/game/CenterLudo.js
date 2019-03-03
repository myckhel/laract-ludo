import React, { Component } from 'react'
import Die from './Die'
import {rollAction} from '../../store/actions'
// let State = require('../helpers/State')
import { connect } from "react-redux";

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
    // console.log(this.props);
    let dies = [
      <Die num={this.props.currentRoll[0]} key={1} />,
      <Die key={2} num={this.props.currentRoll[1]} />
    ]
    return (
      <div className="center-ludo size-3 bg-warning">
        { this.props.gameState.roll ?
          <this.Throw roll={() => this.props.roll(() => this.props.rollAction(false))} />
         : dies
        }
      </div>
    )
  }
}

const mapStateToProps = state => { return {currentRoll: state.boardState.currentRoll, gameState: state.gameState}}
const mapDispatchToProps = dispatch => ({
  rollAction: (bool) => dispatch(rollAction(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps) (CenterLudo)
