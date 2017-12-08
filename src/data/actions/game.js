export class GameActionTypes {
  static newGame = 'game:newGame'
}

export type NewGameAction = {
  +type: GameActionTypes.newGame
}

export type GameAction = NewGameAction

export class GameActions {
  static newGame: NewGameAction = () => ({
    type: GameActionTypes.newGame
  })
}
