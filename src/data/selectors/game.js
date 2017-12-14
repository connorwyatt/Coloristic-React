import { createSelector } from 'reselect'
import type { Color } from '../../constants/colors'
import type { State } from '../reducers'
import type {
  ColorList,
  CurrentColorIndex,
  GameState
} from '../reducers/game'

const gameState: State => GameState = (state: State) =>
  state.game

export class GameSelectors {
  static currentColorIndex: State => CurrentColorIndex = (
    state: State
  ) => gameState(state).currentColorIndex

  static colorList: State => ColorList = (state: State) =>
    gameState(state).colorList

  static currentColor: State => Color = createSelector(
    GameSelectors.currentColorIndex,
    GameSelectors.colorList,
    (
      currentColorIndex: CurrentColorIndex,
      colorList: ColorList
    ) => {
      if (!colorList) {
        return null
      }

      return colorList[currentColorIndex]
    }
  )
}
