import { createAction } from 'redux-act'
import fetch from 'cross-fetch'

export const SUBMIT_QUERY = 'SUBMIT_QUERY'
export const RECEIVE_RESULT = 'RECEIVE_RESULT'
export const SELECT_RESULT = 'SELECT_RESULT'
export const INVALIDATE_RESULTS = 'INVALIDATE_RESULTS'

export function selectResult(result){
    return {
        type: SELECT_RESULT,
        result
    }
}

export function invalidateResults(result) {
    return {
        type: INVALIDATE_RESULTS,
        result
    }
}


export function submitQuery(query) {
    return {
        type: SUBMIT_QUERY,
        query
    }
}

export function receiveDocs(result, json ){
    return {
        type: RECEIVE_RESULT,
        result: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}

export const receiveSearchResults = createAction()
export const badSearchQuery = createAction()
