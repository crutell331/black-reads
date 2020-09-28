import { combineReducers } from 'redux'

let defaultState = {
    user: {}
}

function userReducer(state = defaultState.user, action) {
    switch (action.type) {
        case "ADD USER":
            return action.payload
        default:
            return state
    }
}

let rootReducer = combineReducers({
    user: userReducer
})

export default rootReducer