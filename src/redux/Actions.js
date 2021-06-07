import { LOG_IN, LOG_OUT } from './ActionTypes'

export const logIn = token => {
    return (dispatch) => {
        dispatch({
            type: LOG_IN,
            payload: token
        })
    }
}

export const logOut = () => {
    return (dispatch) => {
        dispatch({
            type: LOG_OUT
        })
    }
}