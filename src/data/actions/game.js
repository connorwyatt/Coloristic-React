export class GameActionTypes {
  static newColor = 'game:newColor'
  static newGame = 'game:newGame'
}

export type NewColorAction = {
  +type: GameActionTypes.newColor,
  payload: string
}

export type NewGameAction = {
  +type: GameActionTypes.newGame
}

export type GameAction = NewColorAction | NewGameAction

export class GameActions {
  static newColor: string => NewColorAction = (
    color: string
  ) => ({
    type: GameActionTypes.newColor,
    payload: color
  })

  static newGame: () => NewGameAction = () => ({
    type: GameActionTypes.newGame
  })
}
