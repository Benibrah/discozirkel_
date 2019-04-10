import {
    LOAD_CLUBS_START,
    LOAD_CLUBS_SUCCESS,
    LOAD_CLUBS_ERROR
} from "../actions";

let defaultState = {
    clubs: [],
    loading: false,
    error: null
}

const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOAD_CLUBS_START:
            return {
                ...state,
                loading: true,
                error: null
            };

        case LOAD_CLUBS_SUCCESS:
            return {
                ...state,
                loading: false,
                clubs: action.payload.clubs
            };

        case LOAD_CLUBS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                clubs: []
            };
        default:
            return state;
    }

};

export default rootReducer;