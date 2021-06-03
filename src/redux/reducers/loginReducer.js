import { FETCH_JWT } from '../actions/types';

const initialState = {
    token: {}
};

function loginReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_JWT:
            return {
                ...state,
                token: action.payload
            };
        default:
            return state;
    }
}

export default loginReducer