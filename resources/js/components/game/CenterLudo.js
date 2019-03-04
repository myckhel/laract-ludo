import React, { Component } from 'react'
import Die from './Die'
import { rollAction, diesRolled } from '../../store/actions'
import { connect } from "react-redux";

class CenterLudo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      roll: props.gameState.roll,
    }
  }

  Throw = () => (
    <div onClick={() => this.roll()} className={`btn throw`}>
      <h3>Throw Now</h3>
    </div>
  )

  componentWillMount = () => {
    // console.log(this.props.roll['1'].roll())
  }


    roll = () => {
      let rolled = this.props.playersState[this.props.boardState.turn].roll()
      this.props.diesRolled(rolled)
      this.chooseSeed()
    }

    chooseSeed = () => {
      // this.players[this.state.turn].state.finshed = true
      let num = this.props.playersState[this.props.boardState.turn].chooseNum()
      // this.setState( oldState => ( { gameState: {...oldState.gameState, chosenNum: num } } ) );

      this.props.boardState.seedRefs.map((seed) => {
        if (seed.props.belongsTo === this.props.boardState.turn) {
          seed.selectAble(num)
        }
        return seed
      })
      this.props.rollAction(false)
    }

  render () {
    // console.log(this.props);
    let dies = [
      <Die num={this.props.boardState.currentRoll[0]} key={1} />,
      <Die key={2} num={this.props.boardState.currentRoll[1]} />
    ]
    return (
      <div className="center-ludo size-3 bg-warning">
        { this.props.gameState.roll ?
          <this.Throw />
         : dies
        }
      </div>
    )
  }
}

const mapStateToProps = state => { return { ...state} }
const mapDispatchToProps = dispatch => ({
  rollAction: (bool) => dispatch(rollAction(bool)),
  diesRolled: (nums) => dispatch(diesRolled(nums)),
});

export default connect(mapStateToProps, mapDispatchToProps) (CenterLudo)
