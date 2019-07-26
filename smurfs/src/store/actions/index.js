import axios from "axios";

export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const getSmurfs = () => (dispatch) => {
    dispatch({ type: FETCHING_START });
    axios.get('http://localhost:3333/smurfs')
            .then(response => {
                dispatch({ type: FETCHING_SUCCESS, payload: response.data });
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: FETCHING_FAILURE, payload: error.message });
            })
}

export const ADDING_START = 'ADDING_START';
export const ADDING_SUCCESS = 'ADDING_SUCCESS';
export const ADDING_FAILURE = 'ADDING_FAILURE';

export const addSmurf = (smurf) => (dispatch) => {
    dispatch({ type: ADDING_START });
    axios.post('http://localhost:3333/smurfs', smurf)
        .then(response => {
            dispatch({ type: ADDING_SUCCESS, payload: response.data });
        })
        .catch(error => {
            console.log(error);
            dispatch({ type: ADDING_FAILURE, payload: error.message })
        });
} 