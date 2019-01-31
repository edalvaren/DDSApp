import { createReducer } from 'redux-act'
import * as a from '../actions/documents'

const getDefaultState = page => ({
    documents: []
})

export default () => createReducer({
    [a.receiveDocuments]: (state, documents) => ({ ...state, documents })
}, getDefaultState())