import { combineReducers } from 'redux'
import type { Color } from '../../constants/colors'
import type { Action } from '../actions'
import { GameActionTypes } from '../actions/game'

export type CurrentColorIndex = number

export type ColorList = Array<Color>

export type GameState = {
  +currentColorIndex: CurrentColorIndex,
  +colorList: ColorList
}

const currentColorIndex = (
  state: CurrentColorIndex = null,
  action: Action
) => {
  switch (action.type) {
    case GameActionTypes.resetColorList:
      return 0
    case GameActionTypes.makeGuess:
      return state + 1
    default:
      return state
  }
}

const colorList = (
  state: ColorList = null,
  action: Action
) => {
  switch (action.type) {
    case GameActionTypes.resetColorList:
      return action.payload
    default:
      return state
  }
}

export const game = combineReducers({
  currentColorIndex,
  colorList
})
