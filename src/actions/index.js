// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const GET_DATA_START = 'GET_DATA_START';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE';

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export const getData = () => {
    
    return dispatch => {
        dispatch({ type: GET_DATA_START });
    axios
        .get(
            'https://swapi.co/api/people/'
        )
        .then( res => {
            dispatch({
                type: GET_DATA_SUCCESS,
                payload: res.data.results
            });
        })
        .catch( err => {
            dispatch({
                type: GET_DATA_FAILURE,
                payload: err
            });
        });
    };
};
