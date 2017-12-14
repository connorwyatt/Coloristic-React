import type { Color } from '../../constants/colors'
import type { State } from '../reducers'
import type { GameState } from '../reducers/game'

const gameState: State => GameState = (state: State) =>
  state.game

export class GameSelectors {
  static currentColor: State => Color = (state: State) => {
    const game = gameState(state)

    debugger

    if (!game.colorList) {
      return null
    }

    return game.colorList[game.currentColorIndex]
  }
}
