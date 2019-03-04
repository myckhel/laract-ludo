import React, { Component } from 'react';
// import Howl from '../assets/js/howler.core.min';
import Player from '../helpers/Player'
// require('../helpers/State')
import '../App.css';
import {Draw} from '../helpers/Draw'

import { connect } from "react-redux";
import { initiateSeeds } from '../store/actions'

class Board extends Component {
  constructor(props){
    super(props)
    this.players = props.playersState
    this.seedRefs = [];
    this.state = {
      gameState: {
        ...props.gameState
      },
      ...props.boardState,
      ...props.playersState
    }
  }

  componentWillMount = () => {
    this.init()
    document.addEventListener("keydown", this.handleKeyPress, false);
  }

  componentDidMount = () => {
    // this.roll()
    console.log(this.props)
  }

  componentDidUpdate = ( ) => {
  }

  componentWillUnmount = () => {
      document.removeEventListener("keydown", this.handleKeyPress, false);
   }

  init = () => {
    const seeds = this.props.boardState.seeds
    // this.props.seedReferences(this.props.boardState.seedRefs)
    this.props.initiateSeeds(seeds)
    this.setState({
      // seeds,
      player1: this.players['1'].state,
      player2: this.players['2'].state,
    }, () => {
      this.players['1'].seeds = seeds.side1
      this.players['2'].seeds = seeds.side2
    })
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
    // console.log(this.props.boardState.seeds);
    return (
      <Draw seeds={(()=>{console.log(this.props.boardState.seeds);return this.props.boardState.seeds})()} />
        // this.props.boardState.board
    );
  }
}

const mapStateToProps = state => { return { ...state } }
const mapDispatchToProps = dispatch => ({
  rollAction: (bool) => dispatch(rollAction(bool)),
  initiateSeeds: (seeds) => dispatch(initiateSeeds(seeds)),
});

export default connect(mapStateToProps, mapDispatchToProps) (Board)
