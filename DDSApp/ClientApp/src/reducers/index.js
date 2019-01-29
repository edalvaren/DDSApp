import { combineReducers, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'

import navigation from './navigation'
import auth from './auth'
import cache from './cache'
import navbar from './navbar'

import { unauthorizeUser } from '../actions/auth'
import { receiveMockState } from '../actions/mock'

const form = () => formReducer

const getNewReducer = _ =>
  combineReducers(
    Object.entries({
      navigation,
      auth,
      cache,
      form,
      navbar,
    }).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: value()
      }),
      {}
    )
  )

const reducer = getNewReducer()

export default (state, action) => {
  if (action.type === unauthorizeUser.getType()) {
    return reducer(createStore(getNewReducer()).getState())
  }

  if (action.type === receiveMockState.getType()) {
    return reducer(action.payload)
  }

  return reducer(state, action)
}
