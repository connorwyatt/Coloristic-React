import type { Color } from '../../constants/colors'

export class GameActionTypes {
  static newColor = 'game:newColor'
  static newGame = 'game:newGame'
  static makeGuess = 'game:makeGuess'
  static resetColorList = 'game:resetColorList'
}

export type NewColorAction = {
  +type: GameActionTypes.newColor,
  +payload: string
}

export type NewGameAction = {
  +type: GameActionTypes.newGame
}

export type MakeGuessAction = {
  +type: GameActionTypes.makeGuess,
  +payload: string
}

export type ResetColorListAction = {
  +type: GameActionTypes.resetColorList
}

export type GameAction =
  | NewColorAction
  | NewGameAction
  | MakeGuessAction
  | ResetColorListAction

export class GameActions {
  static newColor: string => NewColorAction = (
    color: string
  ) => ({
    type: GameActionTypes.newColor,
    payload: color
  })

  static newGame: (Array<Color>) => NewGameAction = () => ({
    type: GameActionTypes.newGame
  })

  static makeGuess: string => MakeGuessAction = (
    color: string
  ) => ({
    type: GameActionTypes.makeGuess,
    payload: color
  })

  static resetColorList: (
    Array<Color>
  ) => ResetColorListAction = (colors: Array<Color>) => ({
    type: GameActionTypes.resetColorList,
    payload: colors
  })
}
