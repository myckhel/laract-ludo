import { createStore } from "redux";
import reducers from "./reducers/";

// const State = {
//   gameState: {
//     roll: true,
//     moving: false,
//     chosenNum: false,
//   },
//   board: null,
//   players: 2,
//   currentRoll: [],
//   won: false,
//   turn: 1,
// }

function configureStore() {
  return createStore(reducers);
}

export default configureStore;
