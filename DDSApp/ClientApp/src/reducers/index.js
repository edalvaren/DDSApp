import { combineReducers, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
import navigation from './navigation'
import auth from './auth'
import cache from './cache'
import navbar from './navbar'
import doc from './doc'
import documents from './documents'
import search from './search'
import { unauthorizeUser } from '../actions/auth'
import {reducer as searchReducer} from '../components/search-async-fetch/index'

const form = () => formReducer

const getNewReducer = _ =>
  combineReducers(
    Object.entries({
      doc,
      documents,
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
const reducerSearch = _ =>
      combineReducers(
        Object.entries({
          search,
          searchReducer,
        })
      )



const reducer = getNewReducer()

export default (state, action) => {
  if (action.type === unauthorizeUser.getType()) {
    return reducer(createStore(getNewReducer()).getState())
  }

  return reducer(state, action)
}
