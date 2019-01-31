import { select } from 'redux-saga/effects'
import { callWith401Handle } from './api'
import { SHARE_DOCUMENT } from '../constants/api'
import { post } from '../utils/api'

export function* shareDocument() {
    const { navigation: { docId } } = yield select()
    yield callWith401Handle(post, SHARE_DOCUMENT(docId))
}