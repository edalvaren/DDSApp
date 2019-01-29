import { put, call } from 'redux-saga/effects'
import { SubmissionError } from 'redux-form'
import { post } from '../utils/api'
import { startApp } from '../actions/generic'
import { to } from '../actions/navigation'
import {receiveSearchResults} from '../actions/search'
import {SEARCH} from '../constants/api/'

const searchSaga = (url, thanGoTo) =>
    function* ({ payload: { values, reject } }) {
        try {
            const authData = yield call(post, url, values)
            yield put(receiveSearchResults(authData))
            yield put(startApp())
            yield put(to(thanGoTo))
        } catch ({ status, message }) {
            yield call(reject, new SubmissionError(message))
        }
    }

export const submitQuery = searchSaga(SEARCH, 'search')
