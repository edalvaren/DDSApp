export const BACKEND = process.env.REACT_APP_MAIN_API_URL

/* Routes fo Authorization Controller */
export const LOGIN = `${BACKEND}auth/login`
export const REGISTER = `${BACKEND}auth/register`

/* Backend routes for SpiralDocs Controller */ //#endregion
export const DOC_DETAIL =`${BACKEND}spiraldocs/{docID}`
export const BROWSE_DOCS = `${BACKEND}spiraldocs`
export const SHARE_DOCUMENT = `${BACKEND}spiraldocs/share/{docID}`

/* Backend routes for Search Controller */
export const SEARCH = `${BACKEND}search/search/?searchQuery`