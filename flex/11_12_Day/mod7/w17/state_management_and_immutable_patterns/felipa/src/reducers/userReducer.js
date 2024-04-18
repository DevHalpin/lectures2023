

export const userReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN": {
            return { ...state, loggedIn: true};
        }
        case "LOGOUT": {
            return { ...state, loggedIn: false};
        }
        case "UPDATE_NAME": {
            return { ...state, name: action.payload};
        }
        case "UPDATE_DESCRIPTION": {
            return { ...state, description: action.payload};
        }
        case "ADD_TAG": {
            return { ...state, tags: action.payload};
        }
        case "REMOVE_TAG": {
            return { ...state, tags: action.payload};
        }
        case "SET_LOADING": {
            return { ...state, loading: action.payload};
        }
        default: {
            return state;
        }
    }
}



