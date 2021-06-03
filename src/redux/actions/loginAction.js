import { FETCH_JWT } from './types';

export const fetchToken = (user) => dispatch => {
    fetch('http://localhost:8080/api/authenticate', user)
        .then(res => res.json())
        .then(token =>
            dispatch({
                type: FETCH_JWT,
                payload: token
            })
        );
};