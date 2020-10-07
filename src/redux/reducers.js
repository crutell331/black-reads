import { combineReducers } from 'redux'

let defaultState = {
    user: null,
    books: [],
    genres: [],
    authors: []
}

function userReducer(state = defaultState.user, action) {
    switch (action.type) {
        case "ADD USER":
            return action.payload
        case "LOGOUT":
            return null
        case "ADD LIBRARY BOOK":
            let new_user = { ...state, books: [...state.books, action.payload] }
            return new_user
        default:
            return state
    }
}
function bookReducer(state = defaultState.books, action) {
    switch (action.type) {
        case "GET BOOKS":
            return action.payload
        default:
            return state
    }
}
function genreReducer(state = defaultState.genres, action) {
    switch (action.type) {
        case "GET GENRES":
            return action.payload
        default:
            return state
    }
}
function authorReducer(state = defaultState.authors, action) {
    switch (action.type) {
        case "GET AUTHORS":
            return action.payload
        default:
            return state
    }
}

let rootReducer = combineReducers({
    user: userReducer,
    books: bookReducer,
    genres: genreReducer,
    authors: authorReducer
})

export default rootReducer