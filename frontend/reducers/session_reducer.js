import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const sessionReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = {...state}

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState[id] = action.user.id;
            return newState;
        case LOGOUT_CURRENT_USER:
            newState[id] = null
            return newState;
        default:
            return state;
    }
}

export default sessionReducer;