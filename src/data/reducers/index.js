import { combineReducers } from 'redux'
import type { GameReducer } from './game'
import { game } from './game'

export type State = { +game: GameReducer }

export const reducers = combineReducers({
  game
})
