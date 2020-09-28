import { combineReducers } from 'redux'

let defaultState = {
    user: null,
    books: [],
    categories: [],
}

function userReducer(state = defaultState.user, action) {
    switch (action.type) {
        case "ADD USER":
            return action.payload
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
function categoryReducer(state = defaultState.categories, action) {
    switch (action.type) {
        case "GET CATEGORIES":
            return action.payload
        default:
            return state
    }
}

let rootReducer = combineReducers({
    user: userReducer,
    books: bookReducer,
    categories: categoryReducer,
})

export default rootReducer