import type { Store as ReduxStore } from 'redux'
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import type { Action } from './actions'
import { epics } from './epics'
import type { State } from './reducers'
import { reducers } from './reducers'

export type Store = ReduxStore<State, Action>

let appliedMiddleware = applyMiddleware(
  createEpicMiddleware(epics)
)

if (process.env.NODE_ENV === 'development') {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  appliedMiddleware = composeEnhancers(appliedMiddleware)
}

export const store: Store = createStore(
  reducers,
  appliedMiddleware
)
