import { createAction } from 'redux-act'

export const submitQuery = createAction();
export const receiveResult = createAction();
export const badSearchQuery = createAction();


// export function selectResult(result){
//     return {
//         type: SELECT_RESULT,
//         result
//     }
// }

// export function invalidateResults(result) {
//     return {
//         type: INVALIDATE_RESULTS,
//         result
//     }
// }


// export function submitQuery(query) {
//     return {
//         type: SUBMIT_QUERY,
//         query
//     }
// }

// export function receiveResult(result, json ){
//     return {
//         type: RECEIVE_RESULT,
//         result,
//         docs: json.data.children.map(child => child.data),
//         receivedAt: Date.now()
//     }
// }

// export function fetchDocs(query) {
//     return dispatch => {
//         dispatch(submitQuery(query))
//         return fetch(`https://spiraldocs.com/api/search/search/?searchQuery={query}`)
//             .then(response => response.json())
//             .then(json => dispatch(receiveResult(query, json)))
//     }
// }

// function shouldFetchPosts(state, query) {
//     const posts = state.resultsByQuery[query]
//     if (!posts) {
//         return true
//     } else if (posts.isFetching) {
//         return false
//     } else {
//         return posts.didInvalidate
//     }
// }
// export function fetchPostsIfNeeded(query) {
//     return (dispatch, getState) => {
//         if (shouldFetchPosts(getState(), query)) {
//             return dispatch(fetchDocs(query))
//         }
//     }
// }

// export const receiveSearchResults = createAction()
// export const badSearchQuery = createAction()
