// import { createReducer } from 'redux-act'
// import { to } from '../actions/navigation'

// import { unauthorizeUser } from '../actions/auth'
// import { loggedIn } from '../utils/auth'

// const getDefaultState = page => ({
//   page,
// })

// const forward = (state, page) => ({ state, page })

// export default _ =>
//   createReducer(
//     {
//       [to]: forward,
//       [unauthorizeUser]: state => forward(state, 'login'),
//     },
//     getDefaultState(process.env.REACT_APP_MOCK
//         ? undefined
//         : loggedIn() ? 'start' : 'login'
//     )
//   )

import { createReducer } from 'redux-act'
import * as a from '../actions/navigation'

import { unauthorizeUser } from '../actions/auth'
import { loggedIn } from '../utils/auth'

const getDefaultState = page => ({
  page,
  docId: undefined
})

const forward = (state, page) => ({ state, page })

export default _ =>
  createReducer(
    {
      [a.to]: forward,
      [a.toDoc]: (state, docId) => ({ ...state, page: 'doc', docId }),
      [unauthorizeUser]: state => forward(state, 'login'),
    },
    getDefaultState(process.env.REACT_APP_MOCK
      ? undefined
      : loggedIn() ? 'start' : 'login'
    )
  )
