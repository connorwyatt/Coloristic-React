// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { App } from './App'
import { store } from './data/store'
import { register as registerServiceWorker } from './registerServiceWorker'

const element = document.getElementById('root')

if (!element) {
  throw new Error(
    'Could not find root element for React app.'
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  element
)

registerServiceWorker()
