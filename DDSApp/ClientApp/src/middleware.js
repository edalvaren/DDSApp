import createSagaMiddleware from 'redux-saga'
import axios from 'axios';
import { unauthorizeUser } from './actions/auth'
import { createLogicMiddleware } from 'redux-logic';
import logic from './components/search-async-fetch/logic'

export const sagaMiddleware = createSagaMiddleware()

const deps = { // injected dependencies for logic
  httpClient: axios
};

const logicMiddleware = createLogicMiddleware(logic, deps);

const localStorageMiddleware = store => next => action => {
  if (action.type === unauthorizeUser.getType()) {
    localStorage.clear()
  }

  const prevState = store.getState()
  const result = next(action)
  const nextState = store.getState()

  if (prevState.auth.token !== nextState.auth.token && nextState.auth.token) {
    localStorage.setItem('token', nextState.auth.token)
    localStorage.setItem(
      'tokenExpirationTime',
      nextState.auth.tokenExpirationTime
    )
    localStorage.setItem('id', nextState.auth.id)
    localStorage.setItem('email', nextState.auth.email)
  }
  return result
}

export default [sagaMiddleware, localStorageMiddleware, logicMiddleware]
