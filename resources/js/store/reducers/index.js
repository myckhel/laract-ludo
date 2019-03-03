import { combineReducers } from 'redux';
import { INITIATE_SEEDS, ROLL, ROLLED } from "../constants";

const merge = (state, part) => Object.assign({}, state, { ...part })

const gameState = { roll: true, moving: false, chosenNum: false }
const boardState = { board: null, players: 2, currentRoll: [0,0], won: false, turn: 1 }
const playersState = {  }

function gameRedux(state = gameState, action) {
  switch (action.type) {
    case ROLL: return merge(state, { roll: action.payload })
    default: return state
  }
}

const boardRedux = (state = boardState, action) => {
  switch (action.type) {
    case ROLLED: return merge(state, { currentRoll: action.payload })
    case INITIATE_SEEDS: return merge(state, { seeds: action.payload })
    default: return state
  }
}

const playersRedux = (state = playersState, action) => {
  switch (action.type) {
    default: return state
  }
}

export default combineReducers({
  gameState: gameRedux,
  boardState: boardRedux,
  playersState: playersRedux,
})
