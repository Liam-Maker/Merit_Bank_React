import { LOGIN } from './ActionTypes'

function loginActionCreater(jwt) {
    return {
        type: LOGIN,
        payload: jwt
    }
}

export default loginActionCreater