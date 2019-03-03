import {INITIATE_SEEDS, ROLL, ROLLED} from "../constants";

export function initiateSeeds (payload) { return {type: INITIATE_SEEDS, payload} }
export function rollAction (payload) { return { type: ROLL, payload } }
export function diesRolled (payload) { return { type: ROLLED, payload } }
