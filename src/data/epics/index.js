import { combineEpics } from 'redux-observable'
import { game } from './game'

export const epics = combineEpics(game)
