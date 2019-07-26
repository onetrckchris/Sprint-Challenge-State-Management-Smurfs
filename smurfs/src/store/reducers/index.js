import { 
    FETCHING_START, 
    FETCHING_SUCCESS, 
    FETCHING_FAILURE,
    ADDING_START,
    ADDING_SUCCESS,
    ADDING_FAILURE
 } from '../actions';

const initialState = {
    isFetchingSmurfs: false,
    error: '',
    smurfs: []
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_START:
            return {
                ...state,
                isFetchingSmurfs: true,
                error: ''
            }
        case FETCHING_SUCCESS:
            return {
                ...state,
                isFetchingSmurfs: false,
                error: '',
                smurfs: action.payload
            }
        case FETCHING_FAILURE:
            return {
                ...state,
                isFetchingSmurfs: false,
                error: action.payload
            }
        case ADDING_START:
            return {
                ...state,
                error: ''
            }
        case ADDING_SUCCESS:
            return {
                ...state,
                error: '',
                smurfs: action.payload
            }
        case ADDING_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}