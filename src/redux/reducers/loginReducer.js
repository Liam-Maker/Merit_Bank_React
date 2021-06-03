import { FETCH_JWT } from '../actions/types';

const initialState = {
    token: {}
};

function loginReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_JWT:
            return {
<<<<<<< HEAD
                ...state,
=======
>>>>>>> e3a85006c59bc20cf05c6e832fae4e95b970d809
                token: action.payload
            };
        default:
            return state;
    }
}

export default loginReducer