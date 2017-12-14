import { combineEpics, ofType } from 'redux-observable'
import { map } from 'rxjs/operators'
import { colors } from '../../constants/colors'
import {
  GameActions,
  GameActionTypes
} from '../actions/game'

const newGame = $action => {
  return $action.pipe(
    ofType(GameActionTypes.newGame),
    map(() => {
      const randomColors = colors

      return GameActions.resetColorList(randomColors)
    })
  )
}

export const game = combineEpics(newGame)
