import type { Store as ReduxStore } from 'redux'
import { createStore } from 'redux'
import type { State } from './reducers'
import { reducers } from './reducers'

export type Store = ReduxStore<State, Action>

export const store: Store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)
