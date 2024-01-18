import { ADD_PLAYER } from "./playerTypes"
import { REMOVE_PLAYER } from "./playerTypes"
import { CHANGE_PLAYER_NAME } from "./playerTypes"
import { CHANGE_PLAYER_TO_EDIT } from "./playerTypes"

export const addPlayer = (player) => {
  return {
    type: ADD_PLAYER,
    payload: player
  }
}

export const removePlayer = (playerId) => {
  return {
    type: REMOVE_PLAYER,
    payload: playerId
  }
}

export const changePlayerName = (playerId, playerName) => {
  return {
    type: CHANGE_PLAYER_NAME,
    payload: {playerId, playerName}
  }
}

export const changePlayerToEdit = (playerId) => {
  return {
    type: CHANGE_PLAYER_TO_EDIT,
    payload: playerId
  }
}
