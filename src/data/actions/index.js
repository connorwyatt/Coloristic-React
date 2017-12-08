import type { GameAction } from './game'

export type ReduxInitAction = { +type: '@@INIT' }

export type Action = ReduxInitAction | GameAction
