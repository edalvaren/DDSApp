import React from 'react'
import { Provider } from 'react-redux'

import './utils/array-extensions'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Theme } from './utils/theme';

import store from './store'
import saga from './sagas/'
import Root from './layouts/main'
import { sagaMiddleware } from './middleware'
import './styles/App.scss'
import { receiveMockState } from './actions/mock'
import { loggedIn } from './utils/auth'
import { startApp } from './actions/generic'
import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  h1 {
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    font-family: 'Roboto', sans-serif;
  }
  h2 {
     @import url('https://fonts.googleapis.com/css?family=Roboto');
    font-family: 'Roboto', serif  };
`
const App = () => {
  return (
    <MuiThemeProvider theme={Theme}>
    <Provider store={store}>
      <Root />
    </Provider>
    </MuiThemeProvider>
  )
}



export default App

sagaMiddleware.run(saga)

loggedIn() && store.dispatch(startApp())

if (process.env.REACT_APP_MOCK) {
  import('./mocks/state.js').then(module => {
    const state = store.getState()
    store.dispatch(
      receiveMockState(
        Object.entries(state).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [key]: { ...value, ...module.MOCK_STATE[key] }
          }),
          {}
        )
      )
    )
  })
}
