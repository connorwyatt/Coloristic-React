import { combineEpics, ofType } from 'redux-observable'
import { map } from 'rxjs/operators'
import { colors } from '../../constants/colors'
import {
  GameActions,
  GameActionTypes
} from '../actions/game'
import { randomise } from '../utils/randomiser'

const newGame = $action => {
  return $action.pipe(
    ofType(GameActionTypes.newGame),
    map(() => {
      const randomColors = randomise(colors)

      return GameActions.resetColorList(randomColors)
    })
  )
}

export const game = combineEpics(newGame)
