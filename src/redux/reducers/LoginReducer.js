import { LOG_IN, LOG_OUT } from '../ActionTypes'


const intitialState = {
    jwt: '',
    role: '',
    isLoggedIn: true
}

const reducer = (state = intitialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                jwt: action.payload.jwt,
                role: action.payload.role,
                isLoggedIn: true
            }

        case LOG_OUT:
            return {
                jwt: '',
                role: '',
                isLoggedIn: false
            }
        default:
            return state
    }
}

export default reducer