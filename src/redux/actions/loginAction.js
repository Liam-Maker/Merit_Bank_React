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
<<<<<<< HEAD
};

=======
};
>>>>>>> e3a85006c59bc20cf05c6e832fae4e95b970d809
