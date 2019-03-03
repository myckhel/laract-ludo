import React, { Component } from 'react';
// import Howl from '../assets/js/howler.core.min';
import Player from '../helpers/Player'
// require('../helpers/State')
import {Side, Middle, generateSeeds} from '../helpers/Draw'
import '../App.css';

import { connect } from "react-redux";
import {initiateSeeds, diesRolled} from '../store/actions'

class Board extends Component {
  constructor(props){
    super(props)
    this.seedRefs = [];
    this.state = {
      gameState: {
        ...props.gameState
      },
      ...props.boardState
    }
  }

  componentWillMount = () => {
    this.init()
    document.addEventListener("keydown", this.handleKeyPress, false);
  }

  componentDidMount = () => {
    // this.roll()
    // console.log(this.state)
  }

  componentWillUnmount = () => {
      document.removeEventListener("keydown", this.handleKeyPress, false);
   }

  init = () => {
    // set players as the boards props
    this.players = {
      1: new Player(1),
      2: new Player(2),
    }

    const seeds = generateSeeds(this)
    this.props.initiateSeeds(seeds)
    this.setState({
      // seeds,
      player1: this.players['1'].state,
      player2: this.players['2'].state,
    }, () => {
      this.players['1'].seeds = seeds.side1
      this.players['2'].seeds = seeds.side2
      // draw the board
      this.setState({
        board: this.draw(seeds)
      }, );
    })
  }

  draw = (seeds) => {
    return (
      <div className="r board">
        <Side seeds={seeds.side1} colorTop={'primary'} colorButtom={'danger'} position={'left'} />
        <Middle players={this.players} gameState={this.state.gameState} roll={this.roll}
            currentRoll={this.state.currentRoll}
         />
       <Side seeds={seeds.side2} colorTop={'warning'} colorButtom={'success'} position={'right'} />
      </div>
    )
  }

  roll = (fn) => {
    let rolled = this.players[this.state.turn].roll()
    this.props.diesRolled(rolled)
    this.setState( oldState => ({
      // the current dice rolled for display
      currentRoll: rolled,
      // turn: oldState.turn === 1 ? 2 : 1,
      gameState: {...oldState.gameState, roll: false},
    }), ()=> {this.chooseSeed(fn)});
  }

  chooseSeed = (fn) => {
    // this.players[this.state.turn].state.finshed = true
    let num = this.players[this.state.turn].chooseNum()
    this.setState( oldState => ({
      gameState: {...oldState.gameState, chosenNum: num}
    }) );

    this.seedRefs.map((seed) => {
      if (seed.belongsTo === this.state.turn) {
        seed.selectAble(num)
      }
      return seed
    })

    this.setState(state => ({
      gameState: {...state.gameState, roll:false}
    }), fn);
  }

  won = () => {
    return ;
  }

  handleClick = (e) => {
    // let tile = e.target.innerHTML
    this.move()
  }

  move = () => {

  }

  handleKeyPress = (event) => {
    console.log('emmit');
    if(event.key === 'Enter'){
      console.log('enter press here! ')
    }
  }

  render() {
    if (this.state.gameState.moving) {

    }
    return (
        this.state.board
    );
  }
}

const mapStateToProps = state => { return { ...state } }
const mapDispatchToProps = dispatch => ({
  rollAction: (bool) => dispatch(rollAction(bool)),
  diesRolled: (nums) => dispatch(diesRolled(nums)),
  initiateSeeds: (seeds) => dispatch(initiateSeeds(seeds)),
});

export default connect(mapStateToProps, mapDispatchToProps) (Board)
// export default Board;
