import { combineReducers } from 'redux';
import { INITIATE_SEEDS, ROLL, ROLLED, SEEDS_REFS, REMOVE_SEED } from "../constants";
import Player from '../../helpers/Player'
import {generateSeeds} from '../../helpers/Draw'

const merge = (state, part) => Object.assign({}, state, { ...part })

const gameState = { roll: true, moving: false, chosenNum: false }

const seeds = generateSeeds()
const boardState = { board: null, seedRefs: [], players: 2, currentRoll: [0,0], won: false,
  turn: 1, seeds }
const playersState = { 1: new Player(1), 2: new Player(2) }

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
    case SEEDS_REFS: return merge(state, { seedRefs: state.seedRefs.concat(action.payload) })
    case REMOVE_SEED: state.seeds[`side${action.payload.side}`][0].splice(0, action.payload.position); return merge(state, {seeds: state.seeds } )
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
