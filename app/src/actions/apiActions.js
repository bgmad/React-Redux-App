import axios from 'axios';

// Taking in the action type index as a reference
import ACTION from './index';

// This will hold the action creators for the apiActions
export const searchForTerm = searchInput => dispatch => {
    dispatch({type: ACTION.FETCH_START});
    axios
        .get(`https://searchly.asuarez.dev/api/v1/song/search?query=${searchInput}`)
        .then(res => {
            dispatch({
                type: ACTION.FETCH_SUCCESS, 
                payload: res.data.response.results
            });
        })
        .catch(err => {
            dispatch({
                type: ACTION.FETCH_FAIL, 
                payload: err
            });
        });
}
