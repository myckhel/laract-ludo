import { INITIATE_SEEDS, ROLL, ROLLED, SEEDS_REFS, REMOVE_SEED } from "../constants";

export function initiateSeeds (payload) { return {type: INITIATE_SEEDS, payload} }
export function rollAction (payload) { return { type: ROLL, payload } }
export function diesRolled (payload) { return { type: ROLLED, payload } }
export function seedReferences (payload) { return { type: SEEDS_REFS, payload } }
export function removeSeed (payload) { return { type: REMOVE_SEED, payload } }
