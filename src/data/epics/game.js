import { combineEpics, ofType } from 'redux-observable'
import { map } from 'rxjs/operators'
import {
  GameActions,
  GameActionTypes
} from '../actions/game'

const newGame = $action =>
  $action.pipe(
    ofType(GameActionTypes.newGame),
    map(() => GameActions.newColor('#FFF'))
  )

export const game = combineEpics(newGame)
