import { select, put } from 'redux-saga/effects'
import { receiveDoc } from '../actions/doc'
import { receiveDocuments } from '../actions/documents'
import { receiveResult, submitQuery } from '../actions/search'
import { DOC_DETAIL, BROWSE_DOCS } from '../constants/api';
import { callWith401Handle } from './api'
import {get} from '../utils/api'
import { removeStateReceivedFrom } from '../actions/cache';


const enters = {
  docs: function*(state) {
    const { documents } = yield callWith401Handle(get, BROWSE_DOCS )
    yield put(receiveDocuments(documents))
  },
  doc: function*(state){
    const docId = state.navigation.docId;
    const doc = yield callWith401Handle(get, DOC_DETAIL(docId))
    yield put(receiveDoc(doc))
  },
  searchResults: function*(state){
  }
}

export function* enterPage() {
  const state = yield select()
  const pageName = state.navigation.page
  const entersFunc = enters[pageName]
  if (entersFunc) yield entersFunc(state)
}

export function startApp() {
  window.history.pushState({}, '', '')
}

const exits = {
  doc: function* () {
    yield put(removeStateReceivedFrom('doc'))
  }
}

export function* exitPage({ payload }) {
  const state = yield select()

  const exitsFunc = exits[payload]
  if (exitsFunc) yield exitsFunc(state)
}
