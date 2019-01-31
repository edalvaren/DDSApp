import { createReducer } from 'redux-act'
import * as a from '../actions/auth'
import { takeIfExists } from '../utils/localStorage'

const getDefaultState = _ => ({
    id: takeIfExists('id'),
})

export default _ =>
    createReducer(
        {
            [a.receiveAuthData]: (state, { token, tokenExpirationTime, id }) => ({
                ...state,
                id,
                token,
                tokenExpirationTime
            }),
            [a.unauthorizeUser]: () => ({})
        },
        getDefaultState()
    )
