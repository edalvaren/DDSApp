import { createReducer } from 'redux-act'

import * as a from '../actions/doc'

const getDefaultState = () => ({
    documentId: undefined,
    title: undefined,
    topic: undefined,
    category: undefined,
    url: undefined,
    lastUpdate: undefined,
})

export default _ =>
    createReducer(
        {
            [a.receiveDoc]: (state, doc) => ({
                ...state,
                ...doc,
                documentId: doc.id,
                title: doc.title,
                topic: doc.topic,
                category: doc.category,
                url: doc.url,
                lastUpdate: doc.lastUpdate,
            }),
        },
        getDefaultState()
    )
