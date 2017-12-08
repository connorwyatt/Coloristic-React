import { combineReducers } from 'redux'
import type { Action } from '../actions'
import { GameActionTypes } from '../actions/game'

export type CurrentColor = ?string

export type GameState = { +currentColor: CurrentColor }

const currentColor = (
  state: CurrentColor = null,
  action: Action
) => {
  switch (action.type) {
    case GameActionTypes.newGame:
      return 'randomColor'
    default:
      return state
  }
}

export const game = combineReducers({ currentColor })
