// This reducer will handle all the requests actions
// This reducer works along side apiActions in the actions folder
import ACTION from '../actions/index';

const initialState = {
    isFetching: false,
    error: '', 
    response: null
};

export const apiReducer = (state = initialState, action = {type: null}) => {
    switch(action.type) {
        case ACTION.FETCH_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case ACTION.FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                response: action.payload
            }
        case ACTION.FETCH_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return (state);
    }

}