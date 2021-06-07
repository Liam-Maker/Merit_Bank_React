import { combineReducers } from 'redux'
import LoginReducer from './LoginReducer'

const reducers = combineReducers({
    auth: LoginReducer
})

export default reducers