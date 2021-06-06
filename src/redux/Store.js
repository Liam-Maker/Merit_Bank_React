import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../components/features/userSlice'

export default configureStore({
    reducer: {
        user: userReducer
    }
})













// import { createStore } from 'redux';
// import loginReducer from './Reducer'

// const store = createStore(loginReducer);

// export default store;
