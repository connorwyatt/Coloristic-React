import type { State } from '../reducers'
import type {
  CurrentColor,
  GameState
} from '../reducers/game'

const gameState: State => GameState = (state: State) =>
  state.game

export class GameSelectors {
  static currentColor: State => CurrentColor = (
    state: State
  ) => gameState(state).currentColor
}
