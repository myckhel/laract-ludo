import React, { Component } from 'react';
// import Howl from '../assets/js/howler.core.min';
import Player from '../helpers/Player'
// import State from '../helpers/State'
import {Side, Middle, generateSeeds} from '../helpers/Draw'
import '../App.css';

class Board extends Component {
  constructor(props){
    super(props)
    this.seedRefs = [];
    this.state = {
      gameState: {
        roll: true,
        moving: false,
        chosenNum: false,
      },
      board: null,
      players: 2,
      currentRoll: [],
      won: false,
      turn: 1,
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

    this.setState({
      seeds: generateSeeds(this),
      player1: this.players['1'].state,
      player2: this.players['2'].state,
    }, () => {
      this.players['1'].seeds = this.state.seeds.side1
      this.players['2'].seeds = this.state.seeds.side2
      // draw the board
      this.setState({
        board: this.draw(this.state.seeds)
      }, () => {
        // console.log(this);
      });
    })
  }

  draw = (seeds) => {
    return (
      <div className="r board">
        <Side meta={{seeds: seeds.side1, colorTop: 'primary', colorButtom: 'danger', position: 'left'}} />
        <Middle meta={{
            players: this.players, gameState: this.state.gameState, roll: this.roll,
            currentRoll: this.state.currentRoll
          }} />
        <Side meta={{seeds: seeds.side2, colorTop: 'warning', colorButtom: 'success', position: 'right'}} />
      </div>
    )
  }

  roll = () => {
    let rolled = this.players[this.state.turn].roll()
    this.setState( oldState => ({
      // the current dice rolled for display
      currentRoll: rolled,
      // turn: oldState.turn === 1 ? 2 : 1,
      gameState: {...oldState.gameState, roll: false},
    }), this.chooseSeed);
  }

  chooseSeed = () => {
    // this.players[this.state.turn].state.finshed = true
    let num = this.players[this.state.turn].chooseNum()
    this.setState( oldState => ({
      gameState: {...oldState.gameState, chosenNum: num}
    }), console.log(this.state));

    this.seedRefs.map((seed) => {
      seed.selectAble(num)
      return seed
    })

    this.setState(state => ({
      gameState: {...state.gameState, roll:false}
    }), );
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

export default Board;
